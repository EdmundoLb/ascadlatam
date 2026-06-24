const content = {
  es: {
    origins: [
      { year: '2004', label: 'Creación del consorcio<br>en Costa Rica' },
      { year: '2019', label: 'Evolución formal<br>a ASCAD LATAM' },
      { year: 'ES + PT', label: 'Certificaciones en<br>español y portugués' },
    ],
    levels: [
      { code: 'OST',       name: 'Operador Socioterapéutico',           desc: 'Nivel inicial. Acompañamiento supervisado en comunidades terapéuticas y centros de tratamiento.',   fee: 30  },
      { code: 'EPR',       name: 'Entrenador de Pares en Recuperación', desc: 'Para personas con experiencia vivida en recuperación que brindan apoyo empático y no clínico.',     fee: 30  },
      { code: 'CCAAD I',   name: 'Consejero Asociado Junior',           desc: 'Primer nivel técnico profesional. Intervenciones estructuradas bajo supervisión profesional.',     fee: 50  },
      { code: 'CCAAD II',  name: 'Consejero Certificado',                desc: 'Competencias avanzadas en consejería, evaluación integral y coordinación de casos.',              fee: 75  },
      { code: 'CCAAD III', name: 'Consejero Senior',                     desc: 'Nivel avanzado profesional con evaluación biopsicosocial y manejo de casos complejos.',           fee: 100 },
      { code: 'CCAAD IV',  name: 'Supervisor Profesional',               desc: 'Máximo nivel. Supervisión profesional, liderazgo de equipos y garantía de calidad.',                fee: 125 },
    ],
    stats: [
      { num: '21', label: '', shortLabel: 'TAP 21',         tooltip: 'Treatment Accessibility Protocol 21' },
      { num: '64', label: '', shortLabel: 'TIP 64',         tooltip: 'Treatment Improvement Protocol 64' },
      { num: '52', label: '', shortLabel: 'TIP 52',         tooltip: 'Treatment Improvement Protocol 52' },
      { num: '6',  label: '', shortLabel: 'Ruta completa',  tooltip: 'Ruta completa de certificación' },
    ]
  },
  pt: {
    origins: [
      { year: '2004', label: 'Criação do consórcio<br>na Costa Rica' },
      { year: '2019', label: 'Evolução formal<br>para ASCAD LATAM' },
      { year: 'ES + PT', label: 'Certificações em<br>espanhol e português' },
    ],
    levels: [
      { code: 'OST',       name: 'Operador Socioterapêutico',          desc: 'Nível inicial. Acompanhamento supervisionado em comunidades terapêuticas e centros de tratamento.', fee: 30  },
      { code: 'EPR',       name: 'Treinador de Pares em Recuperação',  desc: 'Para pessoas com experiência vivida em recuperação que oferecem apoio empático e não clínico.',   fee: 30  },
      { code: 'CCAAD I',   name: 'Conselheiro Associado Júnior',       desc: 'Primeiro nível técnico profissional. Intervenções estruturadas sob supervisão profissional.',      fee: 50  },
      { code: 'CCAAD II',  name: 'Conselheiro Certificado',             desc: 'Competências avançadas em aconselhamento, avaliação integral e coordenação de casos.',           fee: 75  },
      { code: 'CCAAD III', name: 'Conselheiro Sênior',                  desc: 'Nível avançado profissional com avaliação biopsicossocial e manejo de casos complexos.',         fee: 100 },
      { code: 'CCAAD IV',  name: 'Supervisor Profissional',             desc: 'Nível máximo. Supervisão profissional, liderança de equipes e garantia de qualidade.',           fee: 125 },
    ],
    stats: [
      { num: '21', label: '', shortLabel: 'TAP 21',           tooltip: 'Treatment Accessibility Protocol 21' },
      { num: '64', label: '', shortLabel: 'TIP 64',           tooltip: 'Treatment Improvement Protocol 64' },
      { num: '52', label: '', shortLabel: 'TIP 52',           tooltip: 'Treatment Improvement Protocol 52' },
      { num: '6',  label: '', shortLabel: 'Trajetória completa', tooltip: 'Trajetória completa de certificação' },
    ]
  }
}

export function getOrigins(locale) {
  return content[locale]?.origins || content.es.origins
}

export function getLevels(locale) {
  return content[locale]?.levels || content.es.levels
}

export function getStats(locale) {
  return content[locale]?.stats || content.es.stats
}

export const levelIcons = {
  'OST': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  'EPR': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  'CCAAD I': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  'CCAAD II': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  'CCAAD III': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  'CCAAD IV': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
}
