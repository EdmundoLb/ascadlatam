<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Formación Continua</div>
        <h1>Educación y<br><em class="gold">Formación Continua</em></h1>
        <p class="lead" style="margin-top:18px;">
          Perfiles formativos por competencias para cada nivel de certificación, basados en los estándares internacionales TAP 21, TIP 64 y TIP 52.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Level Tabs -->
        <div class="level-tabs">
          <button
            v-for="level in levels"
            :key="level.code"
            :class="['tab-btn', { active: activeLevel === level.code }]"
            @click="activeLevel = level.code"
          >
            {{ level.code }}
          </button>
        </div>

        <!-- Level Title -->
        <div class="level-header">
          <h2>{{ currentLevelData.name }}</h2>
          <p class="level-intro">{{ currentLevelData.intro }}</p>
        </div>

        <!-- Axes -->
        <div class="axes-container">
          <div v-for="(axis, index) in currentLevelData.axes" :key="index" class="axis-card">
            <button class="axis-toggle" @click="toggleAxis(index)">
              <div class="axis-title-row">
                <span class="axis-number">Eje {{ index + 1 }}</span>
                <span class="axis-name">{{ axis.name }}</span>
              </div>
              <svg class="axis-chevron" :class="{ rotated: expandedAxis === index }" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div class="axis-content" :class="{ expanded: expandedAxis === index }">
              <div class="axis-sections">
                <div v-for="(section, sIndex) in ['saberConocer', 'saberHacer', 'saberSer']" :key="sIndex" class="axis-section">
                  <h4 :class="['section-title', section]">{{ getSectionLabel(section) }}</h4>
                  <ul class="section-list">
                    <li v-for="(item, iIndex) in axis[section]" :key="iIndex">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Synthesis -->
        <div class="synthesis-card">
          <div class="synthesis-badge">Síntesis Curricular</div>
          <p>{{ currentLevelData.synthesis }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeLevel = ref('OST')
const expandedAxis = ref(0)

function toggleAxis(index) {
  expandedAxis.value = expandedAxis.value === index ? null : index
}

function getSectionLabel(section) {
  const labels = {
    saberConocer: 'Saber Conocer',
    saberHacer: 'Saber Hacer',
    saberSer: 'Saber Ser'
  }
  return labels[section]
}

const levels = [
  { code: 'OST', name: 'Operador Socioterapéutico' },
  { code: 'ER', name: 'Entrenador de Pares' },
  { code: 'CCAAD I', name: 'Consejero en Adicciones Nivel I' },
  { code: 'CCAAD II', name: 'Técnico en Consejería en Adicciones CCAAD II' },
  { code: 'CCAAD III', name: 'Licenciado Profesional en Consejería Avanzada No Clínica – CCAAD III' },
  { code: 'CCAAD IV', name: 'Supervisor Clínico Certificado en Adicciones – CCAAD IV' },
]

const allData = {
  'OST': {
    name: 'Formación en Competencias del Operador Socioterapéutico',
    intro: 'El operador socioterapéutico requiere una formación integral basada en competencias, orientada al desarrollo equilibrado del saber conocer, saber hacer y saber ser.',
    synthesis: 'El operador socioterapéutico se forma como un profesional técnico con competencias integrales para comprender la adicción, acompañar procesos de recuperación, participar en intervenciones básicas y colaborar dentro de equipos terapéuticos. Su perfil combina conocimientos especializados, habilidades de intervención y valores éticos que fortalecen la atención centrada en la persona y el trabajo interdisciplinario.',
    axes: [
      {
        name: 'Comprensión de la Adicción',
        saberConocer: [
          'Comprender modelos y teorías de la adicción desde enfoques médicos, psicológicos, sociales y culturales.',
          'Conocer factores de riesgo, protección y contexto sociocultural del consumo.',
          'Identificar efectos físicos, psicológicos y conductuales de las sustancias.',
          'Reconocer trastornos coexistentes y su relación con la adicción.'
        ],
        saberHacer: [
          'Analizar situaciones relacionadas con el consumo desde una visión integral.',
          'Diferenciar etapas del consumo y señales de riesgo.',
          'Interpretar factores contextuales que influyen en la conducta adictiva.',
          'Aplicar criterios de observación y derivación oportuna.'
        ],
        saberSer: [
          'Mantener apertura al aprendizaje y pensamiento crítico.',
          'Mostrar sensibilidad cultural y respeto por la diversidad.',
          'Evitar juicios y etiquetas hacia la persona.',
          'Valorar la complejidad humana y el trabajo interdisciplinario.'
        ]
      },
      {
        name: 'Conocimiento sobre el Tratamiento',
        saberConocer: [
          'Conocer modelos terapéuticos y enfoques de recuperación.',
          'Comprender el rol de la familia, comunidad y redes de apoyo.',
          'Reconocer la importancia de la investigación científica y la evidencia clínica.',
          'Identificar funciones del equipo interdisciplinario.'
        ],
        saberHacer: [
          'Explicar procesos terapéuticos y rutas de atención.',
          'Facilitar la integración familiar y comunitaria.',
          'Coordinar acciones con profesionales y recursos institucionales.',
          'Aplicar principios básicos de acompañamiento terapéutico.'
        ],
        saberSer: [
          'Mostrar disposición a colaborar con otros profesionales.',
          'Respetar diferentes enfoques de tratamiento.',
          'Valorar la recuperación como proceso integral.',
          'Promover relaciones basadas en respeto y empatía.'
        ]
      },
      {
        name: 'Aplicación a la Práctica',
        saberConocer: [
          'Comprender criterios diagnósticos y niveles de atención.',
          'Conocer estrategias de intervención y modalidades terapéuticas.',
          'Reconocer recursos médicos, farmacológicos y comunitarios.',
          'Identificar procedimientos de intervención en crisis.'
        ],
        saberHacer: [
          'Aplicar entrevistas, observación y seguimiento básico.',
          'Implementar estrategias motivacionales y educativas.',
          'Adaptar intervenciones según necesidades individuales.',
          'Detectar crisis y activar protocolos de derivación.'
        ],
        saberSer: [
          'Actuar con flexibilidad y capacidad de adaptación.',
          'Mantener actitud proactiva y resolutiva.',
          'Mostrar disposición para acompañar procesos complejos.',
          'Priorizar la seguridad y bienestar de la persona.'
        ]
      },
      {
        name: 'Preparación Profesional',
        saberConocer: [
          'Conocer principios éticos, legales y normativos.',
          'Comprender diversidad cultural, género y contexto social.',
          'Identificar protocolos de seguridad y confidencialidad.',
          'Reconocer la importancia de la supervisión profesional.'
        ],
        saberHacer: [
          'Documentar procesos de forma clara y ética.',
          'Aplicar normas de confidencialidad y límites profesionales.',
          'Participar en procesos de supervisión y mejora continua.',
          'Gestionar situaciones críticas con responsabilidad.'
        ],
        saberSer: [
          'Mantener compromiso ético y profesional.',
          'Mostrar responsabilidad y honestidad.',
          'Tener apertura a la retroalimentación.',
          'Practicar autocuidado y regulación emocional.'
        ]
      },
      {
        name: 'Funciones del Operador Socioterapéutico',
        saberConocer: [
          'Comprender procesos de selección, admisión, orientación y evaluación.',
          'Conocer fundamentos del acompañamiento, manejo de casos y educación.',
          'Identificar procedimientos de referencia y documentación.',
          'Reconocer límites del rol profesional.'
        ],
        saberHacer: [
          'Realizar tamizaje, orientación y seguimiento.',
          'Facilitar acompañamiento individual y grupal.',
          'Documentar avances y coordinar referencias.',
          'Aplicar estrategias de apoyo, contención y educación.'
        ],
        saberSer: [
          'Mantener actitud empática y humanizada.',
          'Respetar la dignidad y autonomía de la persona.',
          'Trabajar desde la colaboración interdisciplinaria.',
          'Actuar con compromiso, ética y vocación de servicio.'
        ]
      }
    ]
  },
  'ER': {
    name: 'Entrenador de Pares por Competencias',
    intro: 'El entrenador de pares desarrolla competencias organizadas en el saber conocer, saber hacer y saber ser, integrando experiencia vivida, acompañamiento humano y compromiso comunitario.',
    synthesis: 'El entrenador de pares desarrolla competencias organizadas en el saber conocer, saber hacer y saber ser, integrando experiencia vivida, acompañamiento humano y compromiso comunitario. Su perfil fortalece la recuperación desde la empatía, la inclusión y el apoyo mutuo, facilitando procesos de cambio, integración social y fortalecimiento de redes de recuperación. Actúa como modelo positivo, guía no clínica y agente de esperanza dentro de sistemas orientados a la recuperación.',
    axes: [
      {
        name: 'Conocimiento sobre Recuperación y Trastorno por Uso de Sustancias',
        saberConocer: [
          'Comprender el proceso de recuperación y el impacto biopsicosocial del consumo de sustancias.',
          'Reconocer efectos físicos, emocionales, sociales y conductuales asociados al uso problemático.',
          'Identificar diferentes caminos de recuperación y sistemas orientados a la recuperación.',
          'Conocer conceptos como recaída, remisión y capital de recuperación.'
        ],
        saberHacer: [
          'Explicar el proceso de recuperación de manera clara y comprensible.',
          'Identificar señales de riesgo y necesidades de apoyo.',
          'Facilitar conversaciones sobre cambio y bienestar.',
          'Promover la comprensión del proceso de recuperación en diferentes contextos.'
        ],
        saberSer: [
          'Mostrar esperanza y confianza en el cambio.',
          'Mantener empatía y respeto por la experiencia de cada persona.',
          'Valorar la recuperación como proceso continuo.',
          'Actuar sin prejuicios ni estigmas.'
        ]
      },
      {
        name: 'Rol y Funciones del Entrenador de Pares',
        saberConocer: [
          'Comprender el rol del entrenador de pares y sus límites.',
          'Diferenciar funciones clínicas y funciones de apoyo par.',
          'Reconocer el valor de la experiencia vivida como herramienta de acompañamiento.',
          'Conocer principios de orientación y navegación de recursos.'
        ],
        saberHacer: [
          'Actuar como referente positivo y modelo de recuperación.',
          'Facilitar orientación y acompañamiento no clínico.',
          'Motivar desde la experiencia compartida.',
          'Conectar a las personas con recursos y apoyos disponibles.'
        ],
        saberSer: [
          'Mantener autenticidad y coherencia personal.',
          'Inspirar esperanza desde la propia experiencia.',
          'Respetar límites profesionales y personales.',
          'Actuar con humildad y servicio.'
        ]
      },
      {
        name: 'Habilidades de Apoyo y Acompañamiento',
        saberConocer: [
          'Conocer principios de escucha activa y comunicación empática.',
          'Comprender dinámicas de acompañamiento individual y grupal.',
          'Reconocer estrategias de apoyo emocional y bienestar.',
          'Identificar procesos básicos de planificación de recuperación.'
        ],
        saberHacer: [
          'Aplicar escucha activa y validación emocional.',
          'Facilitar espacios seguros y de confianza.',
          'Compartir experiencias de recuperación de manera significativa.',
          'Coordinar grupos y actividades de apoyo.'
        ],
        saberSer: [
          'Mostrar cercanía y sensibilidad emocional.',
          'Respetar los tiempos y ritmos de recuperación.',
          'Favorecer relaciones basadas en confianza.',
          'Mantener actitud de apoyo y acompañamiento constante.'
        ]
      },
      {
        name: 'Ética y Límites Profesionales',
        saberConocer: [
          'Conocer principios éticos y normas de confidencialidad.',
          'Comprender límites del rol de entrenador de pares.',
          'Identificar situaciones que requieren derivación.',
          'Reconocer la importancia de la supervisión.'
        ],
        saberHacer: [
          'Aplicar límites adecuados en la relación de apoyo.',
          'Proteger la privacidad y confidencialidad.',
          'Derivar cuando la situación excede sus competencias.',
          'Actuar conforme a protocolos éticos.'
        ],
        saberSer: [
          'Actuar con integridad y responsabilidad.',
          'Mantener relaciones respetuosas y profesionales.',
          'Reconocer límites personales y funcionales.',
          'Promover confianza y seguridad en el acompañamiento.'
        ]
      },
      {
        name: 'Diversidad, Inclusión y Sensibilidad Cultural',
        saberConocer: [
          'Comprender diferencias culturales, espirituales y sociales.',
          'Reconocer factores de exclusión y desigualdad.',
          'Conocer principios de inclusión y accesibilidad.',
          'Identificar necesidades diversas en recuperación.'
        ],
        saberHacer: [
          'Adaptar el acompañamiento según contexto y necesidades.',
          'Promover servicios accesibles y equitativos.',
          'Facilitar espacios libres de discriminación.',
          'Incorporar enfoques inclusivos en el acompañamiento.'
        ],
        saberSer: [
          'Mostrar respeto por la diversidad humana.',
          'Mantener apertura cultural y sensibilidad social.',
          'Evitar actitudes estigmatizantes.',
          'Valorar las diferencias como fortaleza comunitaria.'
        ]
      },
      {
        name: 'Construcción Comunitaria y Redes de Recuperación',
        saberConocer: [
          'Conocer recursos comunitarios y redes de apoyo.',
          'Identificar servicios relacionados con salud, empleo y vivienda.',
          'Comprender el valor de la integración social.',
          'Reconocer la importancia del sentido de pertenencia.'
        ],
        saberHacer: [
          'Facilitar acceso a recursos comunitarios.',
          'Promover participación en redes y grupos de apoyo.',
          'Conectar personas con oportunidades de inclusión social.',
          'Acompañar procesos de integración comunitaria.'
        ],
        saberSer: [
          'Mostrar compromiso con la comunidad.',
          'Fomentar vínculos solidarios y colaborativos.',
          'Promover participación activa y apoyo mutuo.',
          'Valorar la recuperación como proceso colectivo.'
        ]
      },
      {
        name: 'Desarrollo Profesional y Autocuidado',
        saberConocer: [
          'Comprender la importancia de la supervisión y formación continua.',
          'Reconocer señales de agotamiento emocional.',
          'Conocer estrategias de autocuidado y bienestar.',
          'Identificar factores que favorecen la estabilidad personal.'
        ],
        saberHacer: [
          'Participar en procesos de formación y supervisión.',
          'Aplicar prácticas de autocuidado físico y emocional.',
          'Gestionar límites para prevenir desgaste.',
          'Fortalecer habilidades personales y profesionales.'
        ],
        saberSer: [
          'Mantener compromiso con el crecimiento personal.',
          'Practicar autocuidado responsable.',
          'Reconocer la importancia de pedir apoyo.',
          'Promover equilibrio entre ayuda a otros y bienestar propio.'
        ]
      }
    ]
  },
  'CCAAD I': {
    name: 'Funciones del Consejero en Adicciones Nivel 1',
    intro: 'El Consejero en Adicciones Nivel 1 desarrolla competencias integrales organizadas en el saber conocer, saber hacer y saber ser.',
    synthesis: 'El Consejero en Adicciones Nivel 1 desarrolla competencias integrales organizadas en el saber conocer, saber hacer y saber ser. Su perfil combina conocimientos sobre el trastorno por uso de sustancias, habilidades de evaluación y consejería, capacidad para planificar procesos de recuperación y compromiso ético-profesional. Su intervención se orienta a brindar apoyo estructurado, promover la adherencia terapéutica y fortalecer la recuperación desde un enfoque humano, técnico y centrado en la persona.',
    axes: [
      {
        name: 'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
        saberConocer: [
          'Comprender el trastorno por uso de sustancias y sus efectos biopsicosociales.',
          'Identificar factores de riesgo, protección y progresión del consumo.',
          'Reconocer síntomas, etapas del consumo y procesos de recuperación.',
          'Conocer modelos explicativos de la adicción y recaída.'
        ],
        saberHacer: [
          'Analizar patrones de consumo y señales de riesgo.',
          'Diferenciar niveles de gravedad y necesidades de intervención.',
          'Interpretar información clínica básica relacionada con TUS.',
          'Relacionar el contexto social y familiar con el proceso adictivo.'
        ],
        saberSer: [
          'Mostrar sensibilidad frente a la complejidad del consumo.',
          'Mantener actitud empática y libre de juicios.',
          'Respetar la dignidad y singularidad de cada persona.',
          'Promover una visión esperanzadora de la recuperación.'
        ]
      },
      {
        name: 'Selección, Evaluación y Participación',
        saberConocer: [
          'Conocer procesos de tamizaje, admisión y evaluación.',
          'Identificar herramientas e instrumentos de detección.',
          'Comprender criterios de riesgo y niveles de atención.',
          'Reconocer indicadores biopsicosociales relevantes.'
        ],
        saberHacer: [
          'Aplicar entrevistas estructuradas y herramientas de evaluación.',
          'Identificar necesidades y disposición al cambio.',
          'Elaborar impresiones diagnósticas preliminares.',
          'Documentar hallazgos y orientar decisiones de derivación.'
        ],
        saberSer: [
          'Actuar con objetividad y confidencialidad.',
          'Escuchar activamente sin prejuicios.',
          'Favorecer la participación y cooperación del cliente.',
          'Mostrar responsabilidad en la toma de decisiones iniciales.'
        ]
      },
      {
        name: 'Planificación, Colaboración y Derivación del Tratamiento',
        saberConocer: [
          'Comprender principios del plan de tratamiento individualizado.',
          'Conocer recursos comunitarios y redes de apoyo.',
          'Reconocer procesos de continuidad del cuidado.',
          'Identificar criterios de derivación y seguimiento.'
        ],
        saberHacer: [
          'Formular metas terapéuticas claras y medibles.',
          'Diseñar estrategias orientadas a la recuperación.',
          'Coordinar referencias y apoyos externos.',
          'Dar seguimiento al progreso terapéutico.'
        ],
        saberSer: [
          'Respetar la autonomía y decisiones de la persona.',
          'Mostrar compromiso con la recuperación integral.',
          'Trabajar colaborativamente con otros profesionales.',
          'Mantener flexibilidad y adaptación al proceso terapéutico.'
        ]
      },
      {
        name: 'Consejería',
        saberConocer: [
          'Conocer enfoques de consejería basados en evidencia.',
          'Comprender principios de entrevista motivacional y prevención de recaídas.',
          'Reconocer dinámicas individuales, familiares y grupales.',
          'Identificar procesos educativos en recuperación.'
        ],
        saberHacer: [
          'Brindar consejería individual, grupal y familiar.',
          'Facilitar procesos psicoeducativos.',
          'Aplicar técnicas motivacionales y de apoyo.',
          'Promover habilidades de afrontamiento y autocuidado.'
        ],
        saberSer: [
          'Establecer vínculos terapéuticos basados en respeto y empatía.',
          'Mostrar paciencia y escucha activa.',
          'Respetar el ritmo de cambio del cliente.',
          'Actuar con autenticidad y compromiso humano.'
        ]
      },
      {
        name: 'Responsabilidad Profesional y Ética',
        saberConocer: [
          'Comprender principios éticos y normativas de confidencialidad.',
          'Reconocer límites del rol profesional.',
          'Identificar procesos de supervisión y consulta.',
          'Conocer derechos de la persona atendida.'
        ],
        saberHacer: [
          'Aplicar normas éticas en la práctica diaria.',
          'Proteger información sensible y registros clínicos.',
          'Solicitar supervisión ante situaciones complejas.',
          'Documentar intervenciones de forma objetiva.'
        ],
        saberSer: [
          'Actuar con integridad y responsabilidad profesional.',
          'Mantener respeto por la diversidad y equidad.',
          'Reconocer límites personales y profesionales.',
          'Comprometerse con la mejora continua y el autocuidado.'
        ]
      }
    ]
  },
  'CCAAD II': {
    name: 'Técnico en Consejería en Adicciones CCAAD II',
    intro: 'El Técnico en Consejería en Adicciones CCAAD II desarrolla competencias estructuradas orientadas a la atención de personas con trastorno por uso de sustancias.',
    synthesis: 'El Técnico en Consejería en Adicciones CCAAD II desarrolla competencias estructuradas orientadas a la atención de personas con trastorno por uso de sustancias, integrando conocimientos técnicos, habilidades prácticas y actitudes profesionales. Su perfil se fundamenta en el saber conocer, saber hacer y saber ser, permitiéndole participar en procesos de evaluación, orientación, consejería, manejo de casos y seguimiento dentro de equipos interdisciplinarios. Su actuación se realiza bajo principios éticos, supervisión profesional y enfoque centrado en la recuperación y la dignidad humana.',
    axes: [
      {
        name: 'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
        saberConocer: [
          'Comprender el trastorno por uso de sustancias desde un enfoque biopsicosocial.',
          'Reconocer factores de riesgo, protección y progresión del consumo.',
          'Identificar etapas del cambio, recaída y recuperación.',
          'Conocer efectos físicos, emocionales, familiares y sociales asociados al consumo.'
        ],
        saberHacer: [
          'Analizar patrones de consumo y señales de riesgo.',
          'Identificar necesidades iniciales relacionadas con el proceso de recuperación.',
          'Interpretar información básica para orientar procesos de atención.',
          'Relacionar factores personales y contextuales con la conducta adictiva.'
        ],
        saberSer: [
          'Mostrar sensibilidad frente al sufrimiento humano.',
          'Mantener actitud empática y libre de juicios.',
          'Respetar la dignidad y singularidad de la persona.',
          'Promover una visión esperanzadora del cambio.'
        ]
      },
      {
        name: 'Selección, Evaluación y Participación',
        saberConocer: [
          'Conocer procesos de tamizaje, admisión, orientación y evaluación.',
          'Identificar instrumentos básicos de detección y registro.',
          'Comprender niveles de riesgo y necesidades de derivación.',
          'Reconocer principios de entrevista inicial y escucha activa.'
        ],
        saberHacer: [
          'Aplicar entrevistas estructuradas y herramientas de tamizaje.',
          'Recoger información relevante de forma organizada.',
          'Identificar factores de riesgo y necesidades de apoyo.',
          'Participar en la evaluación integral sin emitir diagnósticos clínicos.'
        ],
        saberSer: [
          'Actuar con respeto y confidencialidad.',
          'Favorecer un ambiente de acogida y confianza.',
          'Mantener objetividad y neutralidad profesional.',
          'Escuchar activamente sin estigmatizar.'
        ]
      },
      {
        name: 'Planificación, Colaboración y Derivación del Tratamiento',
        saberConocer: [
          'Comprender principios del plan de tratamiento individualizado.',
          'Conocer recursos institucionales y comunitarios.',
          'Reconocer procesos de coordinación interdisciplinaria.',
          'Identificar criterios básicos de referencia y continuidad del cuidado.'
        ],
        saberHacer: [
          'Participar en la elaboración de planes de tratamiento centrados en la persona.',
          'Formular metas claras y medibles orientadas a la recuperación.',
          'Facilitar derivaciones y acceso a redes de apoyo.',
          'Coordinar seguimiento básico dentro del proceso terapéutico.'
        ],
        saberSer: [
          'Respetar la autonomía y decisiones de la persona.',
          'Mostrar disposición para el trabajo colaborativo.',
          'Mantener compromiso con la continuidad del cuidado.',
          'Adaptarse a necesidades cambiantes del proceso terapéutico.'
        ]
      },
      {
        name: 'Consejería',
        saberConocer: [
          'Conocer fundamentos de consejería en adicciones y entrevista motivacional.',
          'Comprender procesos de cambio y prevención de recaídas.',
          'Identificar dinámicas individuales, grupales y familiares.',
          'Reconocer límites entre consejería y psicoterapia.'
        ],
        saberHacer: [
          'Facilitar sesiones individuales y grupales de apoyo.',
          'Aplicar escucha activa, motivación y psicoeducación.',
          'Promover hábitos saludables y habilidades de afrontamiento.',
          'Registrar avances y evolución del proceso.'
        ],
        saberSer: [
          'Establecer relaciones basadas en empatía y respeto.',
          'Mostrar paciencia ante procesos no lineales.',
          'Mantener actitud humana, cercana y profesional.',
          'Favorecer la participación activa de la persona.'
        ]
      },
      {
        name: 'Responsabilidad Profesional y Ética',
        saberConocer: [
          'Comprender principios éticos y límites del rol técnico.',
          'Conocer normas de confidencialidad y documentación.',
          'Identificar situaciones que requieren supervisión o derivación.',
          'Reconocer derechos de la persona usuaria.'
        ],
        saberHacer: [
          'Aplicar principios éticos en la práctica diaria.',
          'Documentar información de manera objetiva y organizada.',
          'Solicitar apoyo profesional ante situaciones complejas.',
          'Mantener registros técnicos claros y seguros.'
        ],
        saberSer: [
          'Actuar con integridad y responsabilidad profesional.',
          'Reconocer límites personales y funcionales.',
          'Mantener compromiso con la mejora continua.',
          'Practicar respeto, honestidad y confidencialidad.'
        ]
      }
    ]
  },
  'CCAAD III': {
    name: 'Licenciado Profesional en Consejería Avanzada No Clínica – CCAAD III',
    intro: 'El Licenciado Profesional en Consejería Avanzada No Clínica CCAAD III desarrolla competencias especializadas para la atención avanzada de personas con trastorno por uso de sustancias.',
    synthesis: 'El Licenciado Profesional en Consejería Avanzada No Clínica CCAAD III desarrolla competencias especializadas para la atención avanzada de personas con trastorno por uso de sustancias, integrando saber conocer, saber hacer y saber ser. Su perfil combina evaluación integral, planificación terapéutica, consejería avanzada, coordinación interdisciplinaria y responsabilidad ética. Actúa como profesional no clínico con capacidad para liderar procesos de acompañamiento estructurado, fortalecer redes de apoyo y contribuir al desarrollo de sistemas de atención orientados a la recuperación, siempre dentro de los límites legales y técnicos de su profesión.',
    axes: [
      {
        name: 'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
        saberConocer: [
          'Comprender el trastorno por uso de sustancias desde enfoques neurobiológicos, psicológicos y sociales.',
          'Conocer modelos avanzados de progresión, recaída y recuperación.',
          'Identificar factores de riesgo, protección y capital de recuperación.',
          'Reconocer comorbilidades emocionales, sociales y contextuales asociadas.'
        ],
        saberHacer: [
          'Analizar patrones complejos de consumo y evolución clínica.',
          'Interpretar factores biopsicosociales relacionados con el proceso adictivo.',
          'Integrar información del contexto familiar, comunitario y relacional.',
          'Identificar necesidades de intervención y continuidad del cuidado.'
        ],
        saberSer: [
          'Mostrar sensibilidad clínica y comprensión profunda del sufrimiento humano.',
          'Mantener actitud ética, empática y libre de estigmas.',
          'Respetar la singularidad y dignidad de la persona.',
          'Promover una visión integral y esperanzadora de la recuperación.'
        ]
      },
      {
        name: 'Selección, Evaluación y Participación',
        saberConocer: [
          'Conocer procesos avanzados de tamizaje, admisión y evaluación integral.',
          'Comprender criterios biopsicosociales de riesgo y funcionamiento.',
          'Identificar herramientas estructuradas de evaluación y entrevista.',
          'Reconocer indicadores para referencia o intervención especializada.'
        ],
        saberHacer: [
          'Aplicar entrevistas clínicas estructuradas y motivacionales.',
          'Integrar información relevante para valoración funcional.',
          'Identificar factores protectores, barreras y necesidades terapéuticas.',
          'Participar activamente en procesos de evaluación interdisciplinaria.'
        ],
        saberSer: [
          'Actuar con objetividad, confidencialidad y responsabilidad.',
          'Favorecer espacios de confianza y participación.',
          'Escuchar activamente con neutralidad profesional.',
          'Mantener respeto por la autonomía del cliente.'
        ]
      },
      {
        name: 'Planificación, Colaboración y Derivación del Tratamiento',
        saberConocer: [
          'Comprender principios de planificación terapéutica centrada en la persona.',
          'Conocer estrategias de coordinación interdisciplinaria.',
          'Reconocer modelos de continuidad del cuidado y recuperación.',
          'Identificar criterios de derivación y trabajo en red.'
        ],
        saberHacer: [
          'Diseñar planes de tratamiento estructurados y orientados a metas.',
          'Formular objetivos terapéuticos claros y medibles.',
          'Coordinar recursos institucionales y comunitarios.',
          'Dar seguimiento y ajustar planes según evolución.'
        ],
        saberSer: [
          'Mostrar compromiso con la recuperación integral.',
          'Respetar decisiones y prioridades del cliente.',
          'Favorecer el trabajo colaborativo con otros profesionales.',
          'Mantener flexibilidad ante cambios del proceso terapéutico.'
        ]
      },
      {
        name: 'Consejería Avanzada No Clínica',
        saberConocer: [
          'Comprender modelos avanzados de consejería y motivación al cambio.',
          'Conocer fundamentos de entrevista motivacional y enfoques cognitivo-conductuales.',
          'Identificar dinámicas individuales, grupales y familiares.',
          'Reconocer límites entre consejería avanzada y psicoterapia clínica.'
        ],
        saberHacer: [
          'Facilitar procesos de consejería individual, grupal y familiar educativa.',
          'Aplicar técnicas de motivación, reflexión y fortalecimiento personal.',
          'Guiar procesos de afrontamiento, prevención de recaídas y habilidades sociales.',
          'Registrar y evaluar avances del proceso de acompañamiento.'
        ],
        saberSer: [
          'Establecer vínculos terapéuticos basados en empatía y autenticidad.',
          'Mostrar paciencia y contención emocional.',
          'Mantener actitud ética y centrada en la persona.',
          'Favorecer la autodeterminación y el empoderamiento.'
        ]
      },
      {
        name: 'Responsabilidad Profesional, Ética y Supervisión',
        saberConocer: [
          'Comprender principios éticos, legales y normativos de la consejería.',
          'Reconocer límites profesionales y procesos de supervisión.',
          'Conocer modelos de toma de decisiones éticas.',
          'Identificar principios de documentación y confidencialidad.'
        ],
        saberHacer: [
          'Aplicar ética profesional en decisiones complejas.',
          'Documentar procesos de forma técnica y objetiva.',
          'Solicitar consulta y supervisión cuando corresponda.',
          'Participar en procesos de mejora continua y evaluación profesional.'
        ],
        saberSer: [
          'Actuar con integridad, responsabilidad y honestidad.',
          'Mantener apertura a la supervisión y retroalimentación.',
          'Reconocer límites personales y profesionales.',
          'Comprometerse con el aprendizaje continuo y el autocuidado.'
        ]
      }
    ]
  },
  'CCAAD IV': {
    name: 'Supervisor Clínico Certificado en Adicciones – CCAAD IV',
    intro: 'El Supervisor Clínico Certificado en Adicciones CCAAD IV representa el nivel más avanzado de desarrollo profesional dentro de la formación en adicciones.',
    synthesis: 'El Supervisor Clínico Certificado en Adicciones CCAAD IV representa el nivel más avanzado de desarrollo profesional dentro de la formación en adicciones. Su perfil se estructura en competencias integradas de saber conocer, saber hacer y saber ser, orientadas a la supervisión clínica, liderazgo, evaluación y formación de consejeros. Posee capacidades para garantizar calidad técnica, ética profesional y desarrollo continuo del talento humano, fortaleciendo sistemas de atención basados en evidencia, recuperación y estándares internacionales.',
    axes: [
      {
        name: 'Fundamentos de la Supervisión Clínica',
        saberConocer: [
          'Comprender el concepto, evolución y propósito de la supervisión clínica en adicciones.',
          'Conocer fundamentos de calidad asistencial y desarrollo profesional.',
          'Reconocer el papel de la supervisión dentro de sistemas orientados a la recuperación.',
          'Identificar herramientas tecnológicas y organizativas aplicadas a la supervisión.'
        ],
        saberHacer: [
          'Organizar procesos básicos de supervisión clínica.',
          'Identificar necesidades formativas y de acompañamiento profesional.',
          'Integrar herramientas de seguimiento y monitoreo.',
          'Aplicar estrategias de gestión del tiempo y prevención del desgaste profesional.'
        ],
        saberSer: [
          'Mostrar compromiso con la mejora continua.',
          'Mantener responsabilidad profesional y liderazgo ético.',
          'Valorar la supervisión como proceso formativo.',
          'Desarrollar autoconciencia del rol supervisor.'
        ]
      },
      {
        name: 'Gestión del Alcance y Roles de la Supervisión',
        saberConocer: [
          'Comprender funciones, límites y alcances del supervisor clínico.',
          'Conocer roles de educador, facilitador, evaluador y guía profesional.',
          'Reconocer competencias requeridas para la supervisión.',
          'Identificar estándares de calidad en el acompañamiento profesional.'
        ],
        saberHacer: [
          'Definir objetivos de supervisión según contexto y necesidades.',
          'Diferenciar funciones clínicas, educativas y administrativas.',
          'Establecer límites claros dentro del proceso supervisor.',
          'Estructurar espacios de supervisión orientados al desarrollo profesional.'
        ],
        saberSer: [
          'Actuar con claridad y ética profesional.',
          'Mostrar responsabilidad formativa.',
          'Mantener respeto por los límites del rol.',
          'Promover una cultura de calidad y profesionalismo.'
        ]
      },
      {
        name: 'Desarrollo de la Relación de Supervisión',
        saberConocer: [
          'Comprender principios de alianza supervisora.',
          'Conocer dinámicas relacionales y factores de desarrollo profesional.',
          'Reconocer el impacto de la diversidad y la cultura en la supervisión.',
          'Identificar procesos de empoderamiento y aprendizaje.'
        ],
        saberHacer: [
          'Construir relaciones de supervisión basadas en confianza y colaboración.',
          'Facilitar procesos de aprendizaje reflexivo.',
          'Manejar dinámicas interpersonales complejas.',
          'Promover el crecimiento profesional del supervisado.'
        ],
        saberSer: [
          'Mostrar empatía profesional y escucha activa.',
          'Mantener sensibilidad cultural.',
          'Favorecer relaciones respetuosas y seguras.',
          'Promover confianza y apertura profesional.'
        ]
      },
      {
        name: 'Aplicación de Modelos y Enfoques de Supervisión',
        saberConocer: [
          'Comprender modelos teóricos de supervisión clínica.',
          'Reconocer enfoques integrativos y de desarrollo profesional.',
          'Conocer estrategias de análisis de casos y reflexión clínica.',
          'Identificar distintos niveles de desarrollo del supervisado.'
        ],
        saberHacer: [
          'Aplicar modelos de supervisión según necesidades del contexto.',
          'Adaptar intervenciones supervisores al nivel del profesional acompañado.',
          'Integrar teoría y práctica en procesos supervisores.',
          'Analizar casos desde diferentes enfoques metodológicos.'
        ],
        saberSer: [
          'Mostrar pensamiento crítico y apertura teórica.',
          'Mantener flexibilidad profesional.',
          'Respetar diferentes estilos de aprendizaje.',
          'Favorecer innovación y mejora continua.'
        ]
      },
      {
        name: 'Ética, Legalidad y Responsabilidad Profesional',
        saberConocer: [
          'Comprender principios éticos aplicados a la supervisión clínica.',
          'Conocer normativas legales y marcos regulatorios.',
          'Identificar dilemas éticos frecuentes en supervisión.',
          'Reconocer principios de confidencialidad y protección de datos.'
        ],
        saberHacer: [
          'Aplicar procesos de toma de decisiones éticas.',
          'Resolver conflictos y dilemas profesionales.',
          'Gestionar información confidencial con responsabilidad.',
          'Garantizar cumplimiento de normas legales y éticas.'
        ],
        saberSer: [
          'Actuar con integridad y honestidad.',
          'Mostrar compromiso ético y responsabilidad institucional.',
          'Mantener respeto por derechos humanos y diversidad.',
          'Reconocer límites y responsabilidades del rol.'
        ]
      },
      {
        name: 'Evaluación y Monitoreo del Desempeño',
        saberConocer: [
          'Comprender métodos de evaluación por competencias.',
          'Conocer técnicas de retroalimentación profesional.',
          'Reconocer factores emocionales vinculados a la evaluación.',
          'Identificar indicadores de desempeño clínico y profesional.'
        ],
        saberHacer: [
          'Evaluar desempeño profesional de manera objetiva.',
          'Diseñar planes de mejora y seguimiento.',
          'Brindar retroalimentación estructurada y constructiva.',
          'Monitorear progresos y necesidades formativas.'
        ],
        saberSer: [
          'Actuar con objetividad y equidad.',
          'Mostrar paciencia y enfoque formativo.',
          'Favorecer el desarrollo del supervisado.',
          'Mantener actitud profesional y respetuosa.'
        ]
      }
    ]
  }
}

const currentLevelData = computed(() => allData[activeLevel.value])
</script>

<style scoped>
.level-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--line-light);
}
.tab-btn {
  font-family: var(--font-mono);
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .05em;
  padding: 10px 20px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text-muted);
  cursor: pointer;
  transition: all .2s;
}
.tab-btn:hover { border-color: var(--accent); color: var(--accent-dark); }
.tab-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}

.level-header {
  margin-bottom: 40px;
}
.level-header h2 {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 12px;
}
.level-intro {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 800px;
}

.axes-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
}

.axis-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.axis-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 24px;
  background: var(--bg-light);
  border: none;
  cursor: pointer;
  transition: background .2s;
}
.axis-toggle:hover { background: var(--accent-light); }
.axis-title-row {
  display: flex;
  align-items: center;
  gap: 16px;
}
.axis-number {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--white);
  background: var(--accent-dark);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
}
.axis-name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
}
.axis-chevron { color: var(--text-muted); transition: transform .3s; }
.axis-chevron.rotated { transform: rotate(180deg); }

.axis-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height .4s ease;
}
.axis-content.expanded { max-height: 2000px; }

.axis-sections {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 28px 24px;
  border-top: 1px solid var(--line-light);
}
.section-title {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  margin-bottom: 16px;
  display: inline-block;
}
.section-title.saberConocer { background: rgba(21, 101, 192, 0.1); color: #1565c0; }
.section-title.saberHacer { background: rgba(46, 125, 50, 0.1); color: #2e7d32; }
.section-title.saberSer { background: rgba(201, 168, 76, 0.15); color: var(--accent-dark); }

.section-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.section-list li {
  font-size: .8125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  padding: 8px 0;
  border-bottom: 1px solid var(--line-light);
}
.section-list li:last-child { border-bottom: none; }

.synthesis-card {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  border-radius: var(--radius-xl);
  padding: 40px 48px;
  position: relative;
  overflow: hidden;
}
.synthesis-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 50%, rgba(201,168,76,0.1) 0%, transparent 60%);
  pointer-events: none;
}
.synthesis-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(201,168,76,0.15);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.synthesis-card p {
  color: rgba(255,255,255,0.9);
  font-size: .9375rem;
  line-height: 1.8;
  max-width: 800px;
  position: relative;
  z-index: 1;
}

@media (max-width: 900px) {
  .axis-sections { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .level-tabs { gap: 6px; }
  .tab-btn { padding: 8px 12px; font-size: .6875rem; }
  .synthesis-card { padding: 28px 24px; }
}
</style>