import { getCertificationsFull } from './certificacionesFull.js'

const content = {
  es: {
    'OST': {
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
    },
    'EPR': {
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
    },
    'CCAAD I': {
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
    },
    'CCAAD II': {
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
    },
    'CCAAD III': {
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
    },
    'CCAAD IV': {
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
    },
  },
  pt: {
    'OST': {
      needsDegree: false,
      horasFields: [
        { name: 'horas_formacion',    label: 'Horas de formação concluídas',          placeholder: 'Mín. 80 horas'    },
        { name: 'horas_experiencia',  label: 'Horas de experiência supervisionada',   placeholder: 'Mín. 1.000 horas' },
        { name: 'horas_entrenamiento',label: 'Horas de treinamento prático',          placeholder: 'Mín. 100 horas'   },
      ],
      docs: [
        'Cópia de documento de identidade',
        'Certificado de estudos (ensino médio)',
        'Certificados de formação (80h)',
        'Comprovante de experiência supervisionada (1.000h)',
        'Comprovante de treinamento prático (100h)',
        'Três (3) cartas de referência profissional',
        'Código de ética assinado'
      ],
    },
    'EPR': {
      needsDegree: false,
      horasFields: [
        { name: 'horas_formacion',    label: 'Horas de formação específica',          placeholder: 'Mín. 80 horas' },
        { name: 'horas_entrenamiento',label: 'Horas de treinamento prático',          placeholder: 'Mín. 80 horas' },
      ],
      docs: [
        'Cópia de documento de identidade',
        'Certificado de estudos',
        'Certificados de formação por eixos (80h)',
        'Comprovante de treinamento prático (80h)',
        'Declaração de experiência vivida em recuperação',
        '2 a 3 cartas de referência',
        'Código de ética assinado'
      ],
    },
    'CCAAD I': {
      needsDegree: false,
      horasFields: [
        { name: 'horas_formacion',    label: 'Horas de formação específica',          placeholder: 'Mín. 120 horas'   },
        { name: 'horas_experiencia',  label: 'Horas de experiência supervisionada',   placeholder: 'Mín. 1.500 horas' },
        { name: 'horas_entrenamiento',label: 'Horas de treinamento prático',          placeholder: 'Mín. 60 horas'    },
      ],
      docs: [
        'Documento de identidade',
        'Certificado de estudos',
        'Certificados de formação (120h)',
        'Comprovante de experiência supervisionada (1.500h)',
        'Comprovante de treinamento prático (60h)',
        'Três (3) cartas de referência profissional',
        'Código de ética assinado'
      ],
    },
    'CCAAD II': {
      needsDegree: false,
      horasFields: [
        { name: 'horas_formacion',    label: 'Horas de formação específica',          placeholder: 'Mín. 150 horas'   },
        { name: 'horas_experiencia',  label: 'Horas de experiência supervisionada',   placeholder: 'Mín. 2.000 horas' },
        { name: 'horas_entrenamiento',label: 'Horas de treinamento prático',          placeholder: 'Mín. 96 horas'    },
      ],
      docs: [
        'Documento de identidade',
        'Certificado de estudos',
        'Certificados de formação (150h)',
        'Comprovante de experiência supervisionada (2.000h)',
        'Comprovante de treinamento prático (96h)',
        'Três (3) cartas de referência profissional',
        'Código de ética assinado'
      ],
    },
    'CCAAD III': {
      needsDegree: true,
      degreePlaceholder: 'Ex. Graduação em Psicologia – Universidade de…',
      horasFields: [
        { name: 'horas_formacion',   label: 'Horas de formação especializada',       placeholder: 'Mín. 170 horas'   },
        { name: 'horas_experiencia', label: 'Horas de experiência em aconselhamento',placeholder: 'Mín. 3.000 horas' },
        { name: 'horas_practica',    label: 'Horas de prática supervisionada',       placeholder: 'Mín. 120 horas'   },
      ],
      docs: [
        'Documento de identidade',
        'Diploma universitário (Psicologia, Serviço Social ou áreas afins)',
        'Certificados de formação (170h)',
        'Comprovante de experiência em aconselhamento (3.000h)',
        'Certificado de prática supervisionada (120h)',
        'Três (3) cartas de referência profissional',
        'Código de ética assinado'
      ],
    },
    'CCAAD IV': {
      needsDegree: true,
      degreePlaceholder: 'Ex. Mestrado em Saúde Mental – Universidade de…',
      horasFields: [
        { name: 'horas_consejero',   label: 'Horas como conselheiro em adições',     placeholder: 'Mín. 2.000 horas' },
        { name: 'horas_supervision', label: 'Horas de supervisão clínica',           placeholder: 'Mín. 4.000 horas' },
        { name: 'horas_formacion',   label: 'Horas de formação em supervisão',       placeholder: 'Mín. 40 horas'    },
        { name: 'horas_recibida',    label: 'Horas de supervisão recebida',          placeholder: 'Mín. 120 horas'   },
      ],
      docs: [
        'Documento de identidade',
        'Diploma universitário (Graduação ou superior)',
        'Certificados de formação em supervisão (40h)',
        'Comprovante como conselheiro (2.000h)',
        'Comprovante de supervisão clínica (4.000h)',
        'Certificado de supervisão recebida (120h)',
        'Três (3) cartas de referência profissional',
        'Código de ética assinado'
      ],
    },
  },
}

export function getFormCertifications(locale) {
  const localeContent = content[locale] || content.es

  return getCertificationsFull(locale).map(cert => {
    const base = {
      code: cert.code,
      name: cert.name,
      fee: cert.fee,
      description: cert.summary,
    }

    const extra = localeContent[cert.code]
    return extra ? { ...base, ...extra } : base
  })
}
