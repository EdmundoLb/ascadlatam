import { certificationsFull } from './certificacionesFull.js'

export const formCertifications = certificationsFull.map(cert => {
  const base = {
    code: cert.code,
    name: cert.name,
    fee: cert.fee,
    description: cert.summary,
  }

  switch (cert.code) {
    case 'OST':
      return {
        ...base,
        needsDegree: false,
        horasFields: [
          { name: 'horas_formacion',    label: 'Horas de formación completadas',       placeholder: 'Mín. 80 horas'    },
          { name: 'horas_experiencia',  label: 'Horas de experiencia supervisada',     placeholder: 'Mín. 1.000 horas' },
          { name: 'horas_entrenamiento',label: 'Horas de entrenamiento práctico',      placeholder: 'Mín. 100 horas'   },
        ],
        docs: [
          'Copia de documento de identidad',
          'Certificado de estudios (secundaria)',
          'Certificados de formación (80h)',
          'Constancia de experiencia supervisada (1.000h)',
          'Constancia de entrenamiento práctico (100h)',
          'Tres (3) cartas de referencia profesional',
          'Código de ética firmado'
        ],
      }
    case 'EPR':
      return {
        ...base,
        needsDegree: false,
        horasFields: [
          { name: 'horas_formacion',    label: 'Horas de formación específica',        placeholder: 'Mín. 80 horas' },
          { name: 'horas_entrenamiento',label: 'Horas de entrenamiento práctico',      placeholder: 'Mín. 80 horas' },
        ],
        docs: [
          'Copia de documento de identidad',
          'Certificado de estudios',
          'Certificados de formación por ejes (80h)',
          'Constancia de entrenamiento práctico (80h)',
          'Declaración de experiencia vivida en recuperación',
          '2 a 3 cartas de referencia',
          'Código de ética firmado'
        ],
      }
    case 'CCAAD I':
      return {
        ...base,
        needsDegree: false,
        horasFields: [
          { name: 'horas_formacion',    label: 'Horas de formación específica',        placeholder: 'Mín. 120 horas'   },
          { name: 'horas_experiencia',  label: 'Horas de experiencia supervisada',     placeholder: 'Mín. 1.500 horas' },
          { name: 'horas_entrenamiento',label: 'Horas de entrenamiento práctico',      placeholder: 'Mín. 60 horas'    },
        ],
        docs: [
          'Documento de identidad',
          'Certificado de estudios',
          'Certificados de formación (120h)',
          'Constancia de experiencia supervisada (1.500h)',
          'Constancia de entrenamiento práctico (60h)',
          'Tres (3) cartas de referencia profesional',
          'Código de ética firmado'
        ],
      }
    case 'CCAAD II':
      return {
        ...base,
        needsDegree: false,
        horasFields: [
          { name: 'horas_formacion',    label: 'Horas de formación específica',        placeholder: 'Mín. 150 horas'   },
          { name: 'horas_experiencia',  label: 'Horas de experiencia supervisada',     placeholder: 'Mín. 2.000 horas' },
          { name: 'horas_entrenamiento',label: 'Horas de entrenamiento práctico',      placeholder: 'Mín. 96 horas'    },
        ],
        docs: [
          'Documento de identidad',
          'Certificado de estudios',
          'Certificados de formación (150h)',
          'Constancia de experiencia supervisada (2.000h)',
          'Constancia de entrenamiento práctico (96h)',
          'Tres (3) cartas de referencia profesional',
          'Código de ética firmado'
        ],
      }
    case 'CCAAD III':
      return {
        ...base,
        needsDegree: true,
        degreePlaceholder: 'Ej. Licenciatura en Psicología – Universidad de…',
        horasFields: [
          { name: 'horas_formacion',   label: 'Horas de formación especializada',     placeholder: 'Mín. 170 horas'   },
          { name: 'horas_experiencia', label: 'Horas de experiencia en consejería',   placeholder: 'Mín. 3.000 horas' },
          { name: 'horas_practica',    label: 'Horas de práctica supervisada',        placeholder: 'Mín. 120 horas'   },
        ],
        docs: [
          'Documento de identidad',
          'Título universitario (Psicología, Trabajo Social o afines)',
          'Certificados de formación (170h)',
          'Constancia de experiencia en consejería (3.000h)',
          'Certificado de práctica supervisada (120h)',
          'Tres (3) cartas de referencia profesional',
          'Código de ética firmado'
        ],
      }
    case 'CCAAD IV':
      return {
        ...base,
        needsDegree: true,
        degreePlaceholder: 'Ej. Maestría en Salud Mental – Universidad de…',
        horasFields: [
          { name: 'horas_consejero',   label: 'Horas como consejero en adicciones',   placeholder: 'Mín. 2.000 horas' },
          { name: 'horas_supervision', label: 'Horas de supervisión clínica',          placeholder: 'Mín. 4.000 horas' },
          { name: 'horas_formacion',   label: 'Horas de formación en supervisión',     placeholder: 'Mín. 40 horas'    },
          { name: 'horas_recibida',    label: 'Horas de supervisión recibida',          placeholder: 'Mín. 120 horas'   },
        ],
        docs: [
          'Documento de identidad',
          'Título universitario (Licenciatura o superior)',
          'Certificados de formación en supervisión (40h)',
          'Constancia como consejero (2.000h)',
          'Constancia de supervisión clínica (4.000h)',
          'Certificado de supervisión recibida (120h)',
          'Tres (3) cartas de referencia profesional',
          'Código de ética firmado'
        ],
      }
    default:
      return base
  }
})