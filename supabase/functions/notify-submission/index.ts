// Disparada por un trigger de Postgres (ver supabase/migrations/0002_notify_trigger.sql)
// en INSERT sobre `solicitudes` y `contactos`. Manda un email al equipo de
// ASCAD LATAM y uno de confirmación a quien llenó el formulario, vía Resend.
//
// Deploy: pegar este archivo en Supabase Dashboard > Edge Functions > notify-submission
// Secrets: RESEND_API_KEY y WEBHOOK_SECRET (el mismo valor que se guardó en
// Vault como 'webhook_shared_secret' en la migración 0002).

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const WEBHOOK_SECRET = Deno.env.get('WEBHOOK_SECRET')
const FROM_EMAIL = Deno.env.get('RESEND_FROM_EMAIL') ?? 'ASCAD LATAM <onboarding@resend.dev>'
const STAFF_EMAIL = Deno.env.get('STAFF_NOTIFICATION_EMAIL') ?? 'info@ascadlatam.org'

const DETAILS_LABELS: Record<string, string> = {
  titulo: 'Título universitario',
  institucion: 'Institución/programa actual',
  horas_formacion: 'Horas de formación',
  horas_experiencia: 'Horas de experiencia supervisada',
  horas_entrenamiento: 'Horas de entrenamiento práctico',
  horas_practica: 'Horas de práctica supervisada',
  horas_consejero: 'Horas como consejero',
  horas_supervision: 'Horas de supervisión clínica',
  horas_recibida: 'Horas de supervisión recibida',
  anios_recuperacion: 'Años en recuperación'
}

async function sendEmail(to: string, subject: string, html: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html })
  })
  if (!res.ok) {
    console.error('Resend error', res.status, await res.text())
  }
}

function detailsToHtml(details: Record<string, string> | null) {
  if (!details || Object.keys(details).length === 0) return ''
  return Object.entries(details)
    .map(([key, value]) => `<li><strong>${DETAILS_LABELS[key] ?? key}:</strong> ${value}</li>`)
    .join('')
}

async function notifySolicitud(record: Record<string, unknown>) {
  const details = record.details as Record<string, string> | null

  await sendEmail(
    STAFF_EMAIL,
    `Nueva solicitud de certificación: ${record.certification_code} – ${record.full_name}`,
    `<h2>Nueva solicitud de certificación</h2>
     <ul>
       <li><strong>Nivel:</strong> ${record.certification_code}</li>
       <li><strong>Nombre:</strong> ${record.full_name}</li>
       <li><strong>Email:</strong> ${record.email}</li>
       <li><strong>Teléfono:</strong> ${record.phone}</li>
       <li><strong>País:</strong> ${record.country}</li>
       <li><strong>Ciudad:</strong> ${record.city}</li>
       <li><strong>Documento:</strong> ${record.document_id}</li>
       <li><strong>Fecha de nacimiento:</strong> ${record.birth_date}</li>
       ${detailsToHtml(details)}
     </ul>`
  )

  await sendEmail(
    record.email as string,
    'Recibimos tu solicitud de certificación – ASCAD LATAM',
    `<p>Hola ${record.full_name},</p>
     <p>Recibimos tu solicitud para la certificación <strong>${record.certification_code}</strong>.
     Nuestro equipo va a revisar tu información y te vamos a contactar en los próximos días hábiles.</p>
     <p>Si tenés alguna consulta mientras tanto, podés escribirnos a ${STAFF_EMAIL}.</p>
     <p>Gracias por confiar en ASCAD LATAM.</p>`
  )
}

async function notifyContacto(record: Record<string, unknown>) {
  await sendEmail(
    STAFF_EMAIL,
    `Nuevo mensaje de contacto: ${record.asunto ?? 'Consulta general'} – ${record.nombre}`,
    `<h2>Nuevo mensaje de contacto</h2>
     <ul>
       <li><strong>Nombre:</strong> ${record.nombre}</li>
       <li><strong>Email:</strong> ${record.email}</li>
       <li><strong>País:</strong> ${record.pais ?? '—'}</li>
       <li><strong>Asunto:</strong> ${record.asunto ?? '—'}</li>
     </ul>
     <p>${record.mensaje}</p>`
  )

  await sendEmail(
    record.email as string,
    'Recibimos tu mensaje – ASCAD LATAM',
    `<p>Hola ${record.nombre},</p>
     <p>Recibimos tu mensaje y te vamos a responder en 2 a 3 días hábiles.</p>
     <p>Gracias por escribirnos.</p>`
  )
}

Deno.serve(async (req) => {
  if (!RESEND_API_KEY) {
    return new Response('RESEND_API_KEY no configurada', { status: 500 })
  }

  // Solo el trigger de Postgres (que conoce el secreto guardado en Vault)
  // puede invocar esta función. Sin esto, cualquiera con la URL podría
  // mandar emails de phishing a nombre de ASCAD LATAM con datos inventados.
  if (!WEBHOOK_SECRET || req.headers.get('x-webhook-secret') !== WEBHOOK_SECRET) {
    return new Response('No autorizado', { status: 401 })
  }

  const payload = await req.json()
  const { table, record } = payload as { table: string; record: Record<string, unknown> }

  if (table === 'solicitudes') {
    await notifySolicitud(record)
  } else if (table === 'contactos') {
    await notifyContacto(record)
  } else {
    return new Response(`Tabla no soportada: ${table}`, { status: 400 })
  }

  return new Response('ok', { status: 200 })
})
