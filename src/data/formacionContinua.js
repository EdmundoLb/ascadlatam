const BASE = '/formacion-continua'

const THEME_COLORS = {
  'Adolescentes': { color: '#5b7c99', bg: 'rgba(91,124,153,0.12)' },
  'Familia': { color: '#6b8f71', bg: 'rgba(107,143,113,0.12)' },
  'Consejería Individual': { color: '#b8734f', bg: 'rgba(184,115,79,0.12)' },
  'Trastornos Coocurrentes': { color: '#8a5a7a', bg: 'rgba(138,90,122,0.12)' },
  'Recuperación Temprana': { color: '#4f8a8a', bg: 'rgba(79,138,138,0.12)' },
  'Mujeres': { color: '#b87a8a', bg: 'rgba(184,122,138,0.12)' },
  'Sustancias Específicas': { color: '#a17c3f', bg: 'rgba(161,124,63,0.12)' },
  'Mindfulness': { color: '#5f9e8f', bg: 'rgba(95,158,143,0.12)' },
  'Consejería Grupal': { color: '#6b6f9e', bg: 'rgba(107,111,158,0.12)' }
}

const categories = [
  {
    id: 'actualizacion-profesional',
    dir: 'actualizacion-profesional',
    label: { es: 'Actualización Profesional', pt: 'Atualização Profissional' },
    courses: [
      { slug: 'actualizacion-salud-sexual-recuperacion', title: { es: 'Actualización en Salud Sexual y Recuperación', pt: 'Atualização em Saúde Sexual e Recuperação' } },
      { slug: 'adiccion-en-la-familia', title: { es: 'Adicción en la Familia', pt: 'Adição na Família' } },
      { slug: 'adicciones-conductuales', title: { es: 'Adicciones Conductuales', pt: 'Adições Comportamentais' } },
      { slug: 'adicciones-digitales', title: { es: 'Adicciones Digitales', pt: 'Adições Digitais' } },
      { slug: 'espiritualidad-consejeria-psicoterapia', title: { es: 'Espiritualidad en la Consejería y Psicoterapia', pt: 'Espiritualidade no Aconselhamento e Psicoterapia' } },
      { slug: 'neurociencia-consumo-dependencia-sustancias', title: { es: 'Neurociencia del Consumo y Dependencia de Sustancias', pt: 'Neurociência do Consumo e Dependência de Substâncias' } },
      { slug: 'teoria-practica-profesional-adicciones', title: { es: 'Teoría y Práctica Profesional en Adicciones', pt: 'Teoria e Prática Profissional em Adições' } }
    ]
  },
  {
    id: 'certificacion-internacional',
    dir: 'certificacion-internacional',
    label: { es: 'Certificación Internacional', pt: 'Certificação Internacional' },
    courses: [
      { slug: 'ost-operador-soporte-terapeutico-2026', title: { es: 'Programa OST — Operador de Soporte Terapéutico 2026', pt: 'Programa OST — Operador de Suporte Terapêutico 2026' } },
      { slug: 'epr-cpr-entrenador-pares-aliados-recuperacion', title: { es: 'Programa EPR/CPR — Entrenador de Pares y Aliados en Recuperación', pt: 'Programa EPR/CPR — Treinador de Pares e Aliados em Recuperação' } },
      { slug: 'ccaad-i-consejero-nivel-1-2026-2027', title: { es: 'Programa CCAAD I — Consejero Nivel 1 (2026-2027)', pt: 'Programa CCAAD I — Conselheiro Nível 1 (2026-2027)' } },
      { slug: 'ccaad-ii-consejero-nivel-2', title: { es: 'Programa CCAAD II — Consejero Nivel 2', pt: 'Programa CCAAD II — Conselheiro Nível 2' } },
      { slug: 'ccaad-iii-consejero-nivel-3', title: { es: 'Programa CCAAD III — Consejero Nivel 3', pt: 'Programa CCAAD III — Conselheiro Nível 3' } },
      { slug: 'ccaad-iv-supervisor-consejeria', title: { es: 'Programa CCAAD IV — Supervisor Clínico en Consejería', pt: 'Programa CCAAD IV — Supervisor Clínico em Aconselhamento' } }
    ]
  },
  {
    id: 'entrenamiento-continuo',
    dir: 'entrenamiento-continuo',
    label: { es: 'Entrenamiento de Formación Continua', pt: 'Treinamento de Formação Contínua' },
    courses: [
      { slug: 'atencion-integrada-trauma-consumo-adolescentes', title: { es: 'Atención Integrada de Trauma y Consumo en Adolescentes', pt: 'Atenção Integrada ao Trauma e Consumo em Adolescentes' }, theme: { es: 'Adolescentes', pt: 'Adolescentes' } },
      { slug: 'consejeria-familiar-adicciones-secuencial', title: { es: 'Consejería Familiar en Adicciones Secuencial', pt: 'Aconselhamento Familiar em Adições Sequencial' }, theme: { es: 'Familia', pt: 'Família' } },
      { slug: 'consejeria-individual-conjunta-recuperacion', title: { es: 'Consejería Individual y Conjunta en Recuperación', pt: 'Aconselhamento Individual e Conjunto em Recuperação' }, theme: { es: 'Consejería Individual', pt: 'Aconselhamento Individual' } },
      { slug: 'consejeria-individual-habilidades-tecnicas', title: { es: 'Consejería Individual: Habilidades Técnicas', pt: 'Aconselhamento Individual: Habilidades Técnicas' }, theme: { es: 'Consejería Individual', pt: 'Aconselhamento Individual' } },
      { slug: 'consejeria-trastornos-coocurrentes', title: { es: 'Consejería en Trastornos Coocurrentes', pt: 'Aconselhamento em Transtornos Coocorrentes' }, theme: { es: 'Trastornos Coocurrentes', pt: 'Transtornos Coocorrentes' } },
      { slug: 'destrezas-recuperacion-temprana', title: { es: 'Destrezas para la Recuperación Temprana', pt: 'Destrezas para a Recuperação Inicial' }, theme: { es: 'Recuperación Temprana', pt: 'Recuperação Inicial' } },
      { slug: 'educacion-familiar-recuperacion', title: { es: 'Educación Familiar en Recuperación', pt: 'Educação Familiar em Recuperação' }, theme: { es: 'Familia', pt: 'Família' } },
      { slug: 'entrevista-motivacional-adolescentes', title: { es: 'Entrevista Motivacional con Adolescentes', pt: 'Entrevista Motivacional com Adolescentes' }, theme: { es: 'Adolescentes', pt: 'Adolescentes' } },
      { slug: 'habilidades-para-la-recuperacion', title: { es: 'Habilidades para la Recuperación', pt: 'Habilidades para a Recuperação' }, theme: { es: 'Recuperación Temprana', pt: 'Recuperação Inicial' } },
      { slug: 'intervencion-grupal-mujeres-recuperacion', title: { es: 'Intervención Grupal con Mujeres en Recuperación', pt: 'Intervenção Grupal com Mulheres em Recuperação' }, theme: { es: 'Mujeres', pt: 'Mulheres' } },
      { slug: 'intervencion-profesional-consumo-marihuana', title: { es: 'Intervención Profesional en Consumo de Marihuana', pt: 'Intervenção Profissional no Consumo de Maconha' }, theme: { es: 'Sustancias Específicas', pt: 'Substâncias Específicas' } },
      { slug: 'intervenciones-breves-adolescentes', title: { es: 'Intervenciones Breves con Adolescentes', pt: 'Intervenções Breves com Adolescentes' }, theme: { es: 'Adolescentes', pt: 'Adolescentes' } },
      { slug: 'planificacion-tratamiento-centrada-persona', title: { es: 'Planificación de Tratamiento Centrada en la Persona', pt: 'Planejamento de Tratamento Centrado na Pessoa' }, theme: { es: 'Consejería Individual', pt: 'Aconselhamento Individual' } },
      { slug: 'prevencion-recaidas-continuidad-recuperacion', title: { es: 'Prevención de Recaídas y Continuidad de la Recuperación', pt: 'Prevenção de Recaídas e Continuidade da Recuperação' }, theme: { es: 'Recuperación Temprana', pt: 'Recuperação Inicial' } },
      { slug: 'programa-familiar-trastornos-coocurrentes', title: { es: 'Programa Familiar en Trastornos Coocurrentes', pt: 'Programa Familiar em Transtornos Coocorrentes' }, theme: { es: 'Familia', pt: 'Família' } },
      { slug: 'sobriedad-basada-mindfulness', title: { es: 'Sobriedad Basada en Mindfulness', pt: 'Sobriedade Baseada em Mindfulness' }, theme: { es: 'Mindfulness', pt: 'Mindfulness' } },
      { slug: 'teoria-practica-consejeria-grupal', title: { es: 'Teoría y Práctica de la Consejería Grupal', pt: 'Teoria e Prática do Aconselhamento Grupal' }, theme: { es: 'Consejería Grupal', pt: 'Aconselhamento Grupal' } },
      { slug: 'trabajar-personas-resistencia-al-cambio', title: { es: 'Trabajar con Personas en Resistencia al Cambio', pt: 'Trabalhar com Pessoas em Resistência à Mudança' }, theme: { es: 'Consejería Individual', pt: 'Aconselhamento Individual' } },
      { slug: 'arte-consejeria-integradora-2018', title: { es: 'El Arte de la Consejería Integradora (2018)', pt: 'A Arte do Aconselhamento Integrador (2018)' }, theme: { es: 'Consejería Grupal', pt: 'Aconselhamento Grupal' } },
      { slug: 'trastornos-concurrentes', title: { es: 'Trastornos Concurrentes', pt: 'Transtornos Concorrentes' }, theme: { es: 'Trastornos Coocurrentes', pt: 'Transtornos Coocorrentes' } }
    ]
  }
]

export function getFormacionContinuaCategories(locale = 'es') {
  return categories.map(cat => ({
    id: cat.id,
    label: cat.label[locale] || cat.label.es,
    count: cat.courses.length,
    courses: cat.courses.map(course => ({
      slug: course.slug,
      title: course.title[locale] || course.title.es,
      categoryId: cat.id,
      categoryLabel: cat.label[locale] || cat.label.es,
      fileUrl: `${BASE}/${cat.dir}/${course.slug}.pdf`
    }))
  }))
}

export function getEntrenamientoContinuoThemes(locale = 'es') {
  const cat = categories.find(c => c.id === 'entrenamiento-continuo')
  const groups = new Map()
  for (const course of cat.courses) {
    const key = course.theme.es
    const entry = {
      slug: course.slug,
      title: course.title[locale] || course.title.es,
      fileUrl: `${BASE}/${cat.dir}/${course.slug}.pdf`
    }
    if (!groups.has(key)) {
      const palette = THEME_COLORS[key] || { color: '#6b7280', bg: 'rgba(107,114,128,0.12)' }
      groups.set(key, { theme: course.theme[locale] || course.theme.es, color: palette.color, bg: palette.bg, courses: [] })
    }
    groups.get(key).courses.push(entry)
  }
  return Array.from(groups.values())
}
