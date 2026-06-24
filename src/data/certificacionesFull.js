const content = {
  es: {
    standards: {
      'TAP 21': {
        name: 'Treatment Accessibility Protocol 21',
        shortName: 'TAP 21',
        description: 'Establece las 12 funciones esenciales del consejero profesional en adicciones, proporcionando un marco de competencias reconocido internacionalmente para la práctica clínica y el desarrollo profesional.'
      },
      'TIP 64': {
        name: 'Treatment Improvement Protocol 64',
        shortName: 'TIP 64',
        description: 'Proporciona base científica y metodológica para la implementación de servicios de apoyo entre pares y recuperación, adaptados a la realidad cultural y social de América Latina.'
      },
      'TIP 52': {
        name: 'Treatment Improvement Protocol 52',
        shortName: 'TIP 52',
        description: 'Guía especializada en la supervisión clínica y el desarrollo profesional continuo del consejero en adicciones.'
      }
    },
    certificationsFull: [
      {
        code: 'OST',
        name: 'Operador Socioterapéutico',
        standard: 'TAP 21',
        basedOn: 'Basados en los Fundamentos Transdisciplinarios del TAP 21',
        fee: 30,
        summary: 'Nivel inicial. Acompañamiento supervisado en comunidades terapéuticas y centros de tratamiento.',
        description: 'El Operador Socioterapéutico (OST) es un profesional capacitado para acompañar procesos de recuperación y apoyo en personas con trastornos por uso de sustancias, integrando conocimientos técnicos, habilidades prácticas y valores humanos. Su formación se fundamenta específicamente en los Fundamentos Transdisciplinarios del TAP 21, orientados al desarrollo del saber conocer, saber hacer y saber ser dentro del trabajo terapéutico y comunitario en adicciones.',
        professionalProfile: 'El Operador Socioterapéutico actúa con sensibilidad humana, vocación de servicio y respeto por la dignidad de las personas. Su labor fortalece procesos de recuperación centrados en la persona y contribuye al desarrollo de ambientes terapéuticos seguros, inclusivos y orientados al bienestar biopsicosocial. El OST participa como agente de apoyo dentro de programas de prevención, tratamiento y recuperación, integrando principios éticos, trabajo interdisciplinario y acompañamiento humano continuo.',
        technicalDescription: 'La formación del Operador Socioterapéutico se fundamenta en el TAP 21: Competencias para Consejería en Adicción, desarrollado por SAMHSA y CSAT, el cual establece que los Fundamentos Transdisciplinarios constituyen la base esencial para todos los profesionales que trabajan en el campo de las adicciones. El TAP 21 reconoce cuatro fundamentos principales: Entender la Adicción, Conocimiento sobre el Tratamiento, Aplicación a la Práctica y Preparación Profesional. Estos fundamentos proporcionan conocimientos, destrezas y actitudes necesarias para desarrollar prácticas de apoyo efectivas, éticas y culturalmente sensibles en procesos de recuperación.',
        trainingAxes: [
          'Comprensión de la Adicción',
          'Conocimiento sobre el Tratamiento',
          'Aplicación a la Práctica',
          'Preparación Profesional',
          'Funciones del Operador Socioterapéutico'
        ],
        requirements: [
          'Secundaria completa o equivalente',
          '80 horas de formación específica en los Fundamentos Transdisciplinarios del TAP 21',
          '1,000 horas o mínimo un año de experiencia en centros de tratamiento o programas relacionados con adicciones',
          '100 horas de práctica supervisada en funciones socioterapéuticas',
          '3 avales profesionales',
          'Firma y compromiso formal con el Código de Ética Profesional',
          'Aprobación del examen internacional OST',
          'Ejercicio laboral en el país de origen con al menos un 51% de práctica profesional',
          'Entrega completa de documentación académica y administrativa requerida'
        ],
        competencies: {
          saberConocer: [
            'Comprensión integral de las adicciones desde enfoques médicos, psicológicos, sociales y culturales',
            'Capacidad para identificar factores de riesgo, señales de consumo y necesidades de apoyo',
            'Conocimiento de modelos de tratamiento y recuperación',
            'Conocimiento de recursos comunitarios y redes de apoyo'
          ],
          saberHacer: [
            'Aplicación de estrategias de acompañamiento, orientación y seguimiento socioterapéutico',
            'Intervención básica en crisis y derivación oportuna',
            'Facilitación de actividades grupales, educativas y comunitarias',
            'Observar e identificar señales de riesgo o recaída',
            'Registro y documentación de actividades'
          ],
          saberSer: [
            'Desarrollo de habilidades de comunicación efectiva, escucha activa y empatía terapéutica',
            'Manejo ético y confidencial de la información',
            'Compromiso con la formación continua, el autocuidado y la responsabilidad profesional',
            'Respeto por la diversidad cultural, social y humana dentro de los procesos de recuperación',
            'Vocación de servicio y sensibilidad humana'
          ]
        },
        functions: [
          'Acompañar procesos de recuperación y reinserción social',
          'Brindar orientación y apoyo terapéutico básico',
          'Facilitar procesos de motivación y adherencia al tratamiento',
          'Observar e identificar señales de riesgo o recaída',
          'Favorecer entornos terapéuticos seguros y humanizados',
          'Apoyar actividades grupales, educativas y comunitarias',
          'Promover habilidades de vida saludable y fortalecimiento personal',
          'Colaborar con profesionales y redes de apoyo en beneficio del usuario',
          'Derivar oportunamente situaciones que requieran atención especializada',
          'Mantener una conducta ética y profesional en todos los procesos de atención'
        ],
        hours: [
          { value: '80h', label: 'Formación específica' },
          { value: '1,000h', label: 'Experiencia supervisada' },
          { value: '100h', label: 'Práctica supervisada' }
        ]
      },
      {
        code: 'EPR',
        name: 'Entrenador de Pares en Recuperación',
        standard: 'TIP 64',
        basedOn: 'Basados en el TIP 64 de SAMHSA',
        fee: 30,
        summary: 'Apoyo desde la experiencia vivida en recuperación. Facilitador de apoyo y acompañamiento no clínico.',
        description: 'El Entrenador de Recuperación (Recovery Coach / Peer Recovery Coach) es un facilitador de apoyo y acompañamiento no clínico que, desde su experiencia vivida, formación especializada y compromiso ético, promueve procesos de recuperación, bienestar e integración social en personas afectadas por trastornos por uso de sustancias. Su labor se fundamenta en los principios de recuperación orientada a la persona, apoyo mutuo, inclusión, esperanza y fortalecimiento comunitario descritos en el TIP 64. El Entrenador de Recuperación actúa como modelo positivo de cambio, promoviendo la conexión con recursos de recuperación, redes de apoyo y servicios comunitarios.',
        professionalProfile: 'El Entrenador de Recuperación actúa como agente de esperanza y transformación humana, fortaleciendo procesos de recuperación desde el apoyo mutuo, la empatía y la experiencia vivida. Su intervención es no clínica y se orienta al fortalecimiento del bienestar biopsicosocial, la inclusión social y el acceso a recursos comunitarios que favorezcan la recuperación sostenida. El Recovery Coach promueve relaciones basadas en el respeto, la dignidad humana y la reducción del estigma, integrando principios de recuperación orientados a la persona y al fortalecimiento del capital de recuperación.',
        technicalDescription: 'La formación del Entrenador de Recuperación se fundamenta en el TIP 64: Incorporating Peer Support Into Substance Use Disorder Treatment Services, desarrollado por la Substance Abuse and Mental Health Services Administration (SAMHSA). El TIP 64 establece que los servicios de apoyo entre pares constituyen una práctica basada en evidencia que fortalece la recuperación, mejora la retención en tratamiento, aumenta la motivación para el cambio y favorece mejores resultados de recuperación a largo plazo. Asimismo, reconoce que los trabajadores pares y entrenadores de recuperación desempeñan un papel esencial dentro de los sistemas de atención orientados a la recuperación (ROSC), brindado apoyo no clínico basado en la experiencia vivida, la empatía, el acompañamiento y la construcción de redes de apoyo comunitario. El TIP 64 también enfatiza que los servicios de apoyo entre pares contribuyen a: reducir recurrencias, incrementar la motivación y adherencia al tratamiento, mejorar la retención en servicios de recuperación, fortalecer relaciones sociales y familiares, aumentar la satisfacción con el proceso de recuperación, promover la autoeficacia y el bienestar integral.',
        trainingAxes: [
          'Conocimiento sobre Recuperación y Trastorno por Uso de Sustancias',
          'Rol y Funciones del Entrenador de Recuperación y Pares',
          'Habilidades de Apoyo, Acompañamiento y Motivación',
          'Ética, Límites Profesionales y Confidencialidad',
          'Diversidad, Inclusión y Sensibilidad Cultural',
          'Construcción Comunitaria y Redes de Recuperación',
          'Desarrollo Profesional, Liderazgo y Autocuidado'
        ],
        requirements: [
          'Secundaria completa o equivalente',
          '80 horas de formación específica en recuperación, apoyo entre pares y fundamentos transdisciplinarios',
          '100 horas o mínimo un año de experiencia en centros de tratamiento, recuperación, casas de transición o programas comunitarios',
          '100 horas de práctica supervisada en funciones de acompañamiento y apoyo en recuperación',
          '3 avales profesionales',
          'Firma y compromiso formal con el Código de Ética Profesional',
          'Aprobación del examen internacional EPR (Entrenador de Pares en Recuperación)',
          'Ejercicio laboral en el país de origen con al menos un 51% de práctica profesional',
          'Entrega completa de documentación académica y administrativa requerida'
        ],
        competencies: {
          saberConocer: [
            'Comprensión del proceso de recuperación y del trastorno por uso de sustancias',
            'Capacidad para identificar señales de riesgo, recurrencia y necesidades de apoyo',
            'Conocimiento de recursos comunitarios y redes de recuperación',
            'Comprensión de los principios de recuperación orientada a la persona y apoyo mutuo'
          ],
          saberHacer: [
            'Habilidades de escucha activa, comunicación empática y acompañamiento humano',
            'Orientación y motivación basada en la experiencia vivida y recuperación compartida',
            'Facilitación de grupos de apoyo y espacios seguros de recuperación',
            'Promoción de hábitos saludables, bienestar integral y prevención de recurrencias',
            'Conexión de las personas con recursos comunitarios y redes de recuperación'
          ],
          saberSer: [
            'Sensibilidad cultural, inclusión, equidad y respeto por la diversidad humana',
            'Compromiso con el autocuidado, la formación continua y el desarrollo personal',
            'Capacidad para fortalecer el capital de recuperación de las personas y comunidades',
            'Actitud de modelo positivo de cambio y agente de esperanza',
            'Aplicación de principios éticos, confidencialidad y límites profesionales'
          ]
        },
        functions: [
          'Brindar apoyo de recuperación centrado en la persona',
          'Acompañar procesos de cambio y fortalecimiento personal',
          'Motivar la participación activa en procesos de recuperación',
          'Facilitar grupos de apoyo mutuo y recuperación',
          'Ayudar en la identificación de fortalezas y metas de recuperación',
          'Promover habilidades para la vida saludable y bienestar integral',
          'Orientar sobre recursos comunitarios y servicios disponibles',
          'Favorecer la integración social, familiar y comunitaria',
          'Fomentar la esperanza, resiliencia y empoderamiento personal',
          'Mantener límites éticos y relaciones profesionales saludables',
          'Colaborar con equipos interdisciplinarios y redes comunitarias',
          'Promover ambientes inclusivos, seguros y libres de estigma'
        ],
        hours: [
          { value: '80h', label: 'Formación específica' },
          { value: '100h', label: 'Experiencia en centros' },
          { value: '100h', label: 'Práctica supervisada' }
        ]
      },
      {
        code: 'CCAAD I',
        name: 'Consejero Asociado Junior – Nivel Inicial',
        standard: 'TAP 21',
        basedOn: 'Fundamentados en el TAP 21',
        fee: 50,
        summary: 'Primer nivel técnico profesional. Intervenciones estructuradas bajo supervisión profesional.',
        description: 'El Consejero Asociado en Adicciones CCAAD I es un profesional en formación inicial que desarrolla competencias básicas para la evaluación, orientación, acompañamiento y apoyo terapéutico de personas con trastornos por uso de sustancias, integrando principios éticos, conocimientos técnicos y habilidades de intervención centradas en la recuperación. Su práctica se fundamenta en el modelo de competencias descrito en el TAP 21: Competencias para Consejería en Adicción – Conocimiento, Destrezas y Actitudes de la Práctica Profesional, desarrollado por SAMHSA y la Red ATTC.',
        professionalProfile: 'El Consejero Asociado Junior – CCAAD I brinda apoyo estructurado y acompañamiento terapéutico desde una perspectiva ética, técnica y centrada en la persona, fortaleciendo procesos de recuperación y bienestar integral. Su práctica se desarrolla bajo supervisión profesional y está orientada a la adquisición de competencias clínicas básicas en evaluación, consejería, planificación y apoyo para personas con trastornos por uso de sustancias. El profesional promueve la recuperación desde un enfoque humano, interdisciplinario, inclusivo y libre de estigmas, conforme a las competencias internacionales del TAP 21.',
        technicalDescription: 'La certificación CCAAD I – Consejero Asociado Junior se fundamenta en el modelo de competencias profesionales del TAP 21, considerado el estándar internacional para la formación de consejeros en adicciones. El TAP 21 identifica competencias esenciales en conocimiento, destrezas y actitudes necesarias para una práctica efectiva en tratamiento de trastornos por uso de sustancias. Asimismo, establece que el desarrollo de la fuerza laboral en adicciones requiere profesionales preparados en evaluación, consejería, coordinación de servicios, ética, sensibilidad cultural y prácticas basadas en evidencia. El modelo promueve: atención centrada en la persona, recuperación integral y sostenida, intervenciones basadas en evidencia científica, integración familiar y comunitaria, trabajo interdisciplinario, reducción del estigma asociado a la adicción y mejora continua de la calidad de atención.',
        trainingAxes: [
          'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
          'Selección, Evaluación y Participación',
          'Planificación, Colaboración y Derivación del Tratamiento',
          'Consejería',
          'Responsabilidad Profesional y Ética',
          'Diversidad Cultural e Inclusión',
          'Aplicación de Evidencia y Prácticas Basadas en Investigación',
          'Desarrollo Profesional y Autocuidado'
        ],
        requirements: [
          'Diploma de escuela secundaria completa o GED equivalente',
          '120 horas de formación especializada en los ejes de formación del TAP 21',
          '1,500 horas o un mínimo de 1 año y 6 meses de experiencia supervisada en consejería en alcohol y drogas',
          '60 horas supervisadas en las 12 funciones internacionales del consejero en adicciones',
          '3 avales profesionales',
          'Firma y aceptación formal del Código de Ética Profesional',
          'Aprobación del examen internacional de consejería en adicciones',
          'Ejercicio profesional en país miembro con mínimo 51% de práctica laboral',
          'Entrega completa de documentación académica y administrativa requerida'
        ],
        competencies: {
          saberConocer: [
            'Comprensión integral del trastorno por uso de sustancias y sus efectos biopsicosociales',
            'Identificación de factores de riesgo, protección, recaída y recuperación',
            'Conocimiento de procesos de tamizaje, admisión y evaluación inicial',
            'Conocimiento de herramientas básicas de evaluación y entrevista estructurada'
          ],
          saberHacer: [
            'Aplicación de procesos de tamizaje, admisión y evaluación inicial',
            'Uso de entrevistas estructuradas y herramientas básicas de evaluación',
            'Diseño de metas terapéuticas y seguimiento del proceso de recuperación',
            'Coordinación de derivaciones y trabajo con redes de apoyo',
            'Desarrollo de consejería individual, grupal y familiar',
            'Aplicación de entrevista motivacional, psicoeducación y prevención de recaídas'
          ],
          saberSer: [
            'Promoción de habilidades de afrontamiento, autocuidado y adherencia terapéutica',
            'Manejo ético de la información, confidencialidad y responsabilidad profesional',
            'Trabajo interdisciplinario con enfoque humano, empático y libre de estigmas',
            'Sensibilidad cultural y adaptación de servicios según las necesidades de la persona'
          ]
        },
        functions: [
          'Realizar evaluaciones iniciales y tamizaje de personas con trastornos por uso de sustancias',
          'Desarrollar planes de tratamiento centados en la persona',
          'Brindar consejería individual y grupal bajo supervisión',
          'Aplicar entrevistas motivacionales y técnicas de prevención de recaídas',
          'Coordinar derivaciones a servicios especializados',
          'Documentar el progreso del paciente y mantener registros clínicos',
          'Trabajar en colaboración con equipos interdisciplinarios'
        ],
        hours: [
          { value: '120h', label: 'Formación especializada' },
          { value: '1,500h', label: 'Experiencia supervisada' },
          { value: '60h', label: 'Práctica supervisada' }
        ]
      },
      {
        code: 'CCAAD II',
        name: 'Técnico en Consejería en Adicciones – Nivel Profesional / Intermedio',
        standard: 'TAP 21',
        basedOn: 'Fundamentados en el TAP 21',
        fee: 75,
        summary: 'Competencias avanzadas en consejería, evaluación integral y coordinación de casos.',
        description: 'El Técnico en Consejería en Adicciones CCAAD II es un profesional con formación técnica y competencias clínicas intermedias para participar en procesos de evaluación, orientación, consejería y seguimiento terapéutico de personas con trastornos por uso de sustancias, dentro de equipos interdisciplinarios y modelos orientados a la recuperación. Su práctica se fundamenta en las competencias profesionales establecidas en el TAP 21.',
        professionalProfile: 'El Técnico en Consejería en Adicciones CCAAD II actúa con empatía, responsabilidad y compromiso humano, contribuyendo al acompañamiento terapéutico y fortaleciendo procesos de recuperación desde una atención ética, organizada y centrada en la dignidad de la persona. Su práctica integra competencias técnicas y habilidades de consejería que permiten colaborar activamente en procesos de evaluación, intervención, orientación y seguimiento dentro de programas de tratamiento y recuperación en adicciones. El profesional promueve la recuperación desde un enfoque humano, interdisciplinario, inclusivo y libre de estigmas, conforme a los estándares internacionales establecidos en el TAP 21.',
        technicalDescription: 'La certificación CCAAD II – Técnico en Consejería en Adicciones se fundamenta en el modelo de competencias profesionales del TAP 21, considerado uno de los estándares internacionales más importantes para la formación y desarrollo de profesionales en el campo de las adicciones. El TAP 21 identifica competencias esenciales en conocimientos, destrezas y actitudes necesarias para una práctica efectiva en tratamiento de trastornos por uso de sustancias psicoactivas. Asimismo, establece que los profesionales en adicciones deben desarrollar capacidades en: evaluación y orientación terapéutica, consejería individual y grupal, planificación y coordinación del tratamiento, ética y responsabilidad profesional, sensibilidad cultural, trabajo interdisciplinario, y aplicación de prácticas basadas en evidencia. El modelo TAP 21 promueve: atención centrada en la persona, recuperación integral y sostenida, fortalecimiento de redes familiares y comunitarias, reducción del estigma asociado a la adicción, calidad de atención clínica y humana, y desarrollo continuo de la fuerza laboral en adicciones.',
        trainingAxes: [
          'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
          'Selección, Evaluación y Participación',
          'Planificación, Colaboración y Derivación del Tratamiento',
          'Consejería',
          'Responsabilidad Profesional y Ética',
          'Diversidad Cultural e Inclusión',
          'Aplicación de Evidencia y Prácticas Basadas en Investigación',
          'Desarrollo Profesional y Autocuidado'
        ],
        requirements: [
          'Diploma de escuela secundaria completa o GED equivalente',
          '150 horas de formación especializada en los ejes de formación del TAP 21',
          '2,000 horas o mínimo 1 año y 6 meses de experiencia supervisada en consejería en alcohol y drogas',
          '96 horas supervisadas en las 12 funciones internacionales del consejero en adicciones',
          '3 avales profesionales',
          'Firma y aceptación formal del Código de Ética Profesional',
          'Aprobación del examen internacional de consejería en adicciones',
          'Ejercicio profesional en país miembro con mínimo 51% de práctica laboral',
          'Entrega completa de documentación académica y administrativa requerida'
        ],
        competencies: {
          saberConocer: [
            'Comprensión del trastorno por uso de sustancias desde un enfoque biopsicosocial',
            'Identificación de factores de riesgo, recaída, recuperación y necesidades de apoyo',
            'Dominio de procesos de tamizaje, admisión, orientación y evaluación inicial',
            'Conocimiento de herramientas de detección y evaluación detallada'
          ],
          saberHacer: [
            'Aplicación de procesos de tamizaje, admisión, orientación y evaluación inicial',
            'Participación en planes de tratamiento centados en la persona',
            'Coordinación de derivaciones y acceso a redes de apoyo comunitario',
            'Desarrollo de consejería individual y grupal de apoyo',
            'Aplicación de escucha activa, motivación y psicoeducación',
            'Registro técnico y seguimiento del proceso terapéutico'
          ],
          saberSer: [
            'Promoción de habilidades de afrontamiento y hábitos saludables',
            'Aplicación de principios éticos, confidencialidad y responsabilidad profesional',
            'Trabajo colaborativo dentro de equipos interdisciplinarios',
            'Sensibilidad cultural y adaptación de servicios según las necesidades de la persona'
          ]
        },
        functions: [
          'Realizar evaluaciones intermedias y seguimiento terapéutico de personas con trastornos por uso de sustancias',
          'Participar en el diseño y actualización de planes de tratamiento',
          'Desarrollar consejería individual y grupal de mayor complejidad',
          'Aplicar técnicas de entrevista motivacional y cognitivo-conductuales',
          'Coordinar con redes de apoyo comunitario e institucional',
          'Supervisar y documentar el progreso de los casos',
          'Colaborar en equipos interdisciplinarios de tratamiento'
        ],
        hours: [
          { value: '150h', label: 'Formación especializada' },
          { value: '2,000h', label: 'Experiencia supervisada' },
          { value: '96h', label: 'Práctica supervisada' }
        ]
      },
      {
        code: 'CCAAD III',
        name: 'Licenciado Profesional en Consejería Avanzada No Clínica – Nivel Avanzado',
        standard: 'TAP 21',
        basedOn: 'Fundamentados en el TAP 21',
        fee: 100,
        summary: 'Nivel avanzado profesional con evaluación biopsicosocial y manejo de casos complejos.',
        description: 'El Licenciado Profesional en Consejería Avanzada No Clínica CCAAD III desarrolla competencias especializadas para la atención avanzada de personas con trastorno por uso de sustancias, integrando evaluación integral, consejería avanzada, planificación terapéutica, coordinación interdisciplinaria y fortalecimiento de procesos de recuperación. Su práctica se fundamenta en el modelo internacional de competencias profesionales establecido en el TAP 21.',
        professionalProfile: 'El profesional CCAAD III actúa como líder en procesos de acompañamiento avanzado no clínico, promoviendo la recuperación integral, la coordinación interdisciplinaria y el fortalecimiento de redes de apoyo comunitario y familiar. Su desempeño integra competencias avanzadas de evaluación, orientación terapéutica, planificación del tratamiento y acompañamiento especializado, dentro de los límites éticos, técnicos y legales de su profesión. Asimismo, participa en procesos de supervisión, desarrollo de programas, mejora continua y fortalecimiento de servicios orientados a la recuperación y atención centrada en la persona.',
        technicalDescription: 'La certificación CCAAD III – Licenciado Profesional en Consejería Avanzada No Clínica se fundamenta en el modelo internacional de competencias profesionales desarrollado en el TAP 21, documento de referencia para la formación y desarrollo profesional en el campo de las adicciones. El TAP 21 identifica competencias esenciales relacionadas con: comprensión de la adicción, evaluación clínica avanzada, planificación del tratamiento, consejería individual y grupal, prevención de recaídas, coordinación de servicios, competencia cultural, ética profesional y aplicación de prácticas basadas en evidencia científica. Asimismo, reconoce la importancia de: la entrevista motivacional, el trabajo interdisciplinario, la integración biopsicosocial, el enfoque centado en la persona, la participación familiar y comunitaria, y el fortalecimiento de procesos de recuperación sostenida. El modelo TAP 21 promueve estándares internacionales para garantizar calidad profesional, responsabilidad ética, sensibilidad cultural y mejora continua en la atención de personas con trastornos por uso de sustancias.',
        trainingAxes: [
          'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
          'Selección, Evaluación y Participación',
          'Planificación, Colaboración y Derivación del Tratamiento',
          'Consejería',
          'Responsabilidad Profesional y Ética',
          'Diversidad Cultural e Inclusión',
          'Aplicación de Evidencia y Prácticas Basadas en Investigación',
          'Desarrollo Profesional, Liderazgo y Supervisión'
        ],
        requirements: [
          'Licenciatura en Psicología, Trabajo Social, Sociología u otras profesiones afines a la salud mental y ciencias del comportamiento humano',
          '170 horas de formación especializada en los ocho ejes de formación fundamentados en el TAP 21',
          '3,000 horas o mínimo 2 años y 6 meses de experiencia supervisada en consejería en alcohol y drogas',
          '120 horas supervisadas en las 12 funciones internacionales del consejero en adicciones',
          '3 avales profesionales',
          'Firma y aceptación formal del Código de Ética Profesional',
          'Aprobación del examen internacional de consejería en adicciones',
          'Ejercicio profesional en país miembro con mínimo 51% de práctica laboral',
          'Entrega completa de documentación académica y administrativa requerida'
        ],
        competencies: {
          saberConocer: [
            'Comprensión avanzada del trastorno por uso de sustancias desde enfoques neurobiológicos, psicológicos y sociales',
            'Identificación de factores de riesgo, protección y capital de recuperación',
            'Dominio de procesos avanzados de evaluación, admisión y entrevista clínica',
            'Integración de información biopsicosocial para la planificación terapéutica'
          ],
          saberHacer: [
            'Aplicación de procesos avanzados de evaluación, admisión y entrevista clínica',
            'Diseño de planes de tratamiento estructurados y orientados a metas',
            'Coordinación de recursos institucionales, comunitarios y redes de apoyo',
            'Desarrollo de consejería individual, grupal y familiar educativa',
            'Aplicación de entrevista motivacional y enfoques cognitivo-conductuales',
            'Fortalecimiento de habilidades de afrontamiento, prevención de recaídas y empoderamiento personal'
          ],
          saberSer: [
            'Seguimiento y evaluación continua del proceso de acompañamiento',
            'Participación en procesos de supervisión, mejora continua y trabajo interdisciplinario',
            'Liderazgo profesional y compromiso con la calidad asistencial',
            'Aplicación rigurosa de principios éticos, legales y de confidencialidad'
          ]
        },
        functions: [
          'Realizar evaluaciones biopsicosociales completas y diagnósticos funcionales',
          'Diseñar y coordinar planes de tratamiento individualizados',
          'Desarrollar consejería avanzada individual, grupal y familiar',
          'Aplicar enfoques terapéuticos basados en evidencia',
          'Supervisar y orientar a profesionales de niveles inferiores',
          'Coordinar equipos interdisciplinarios de tratamiento',
          'Participar en el desarrollo y mejora de programas de atención'
        ],
        hours: [
          { value: '170h', label: 'Formación especializada' },
          { value: '3,000h', label: 'Experiencia supervisada' },
          { value: '120h', label: 'Práctica supervisada' }
        ]
      },
      {
        code: 'CCAAD IV',
        name: 'Supervisor Clínico Certificado en Adicciones',
        standard: 'TIP 52',
        basedOn: 'Basado en el TIP 52: Clinical Supervision and Professional Development',
        fee: 125,
        summary: 'Máximo nivel. Supervisión profesional, liderazgo de equipos y garantía de calidad.',
        description: 'El Supervisor Clínico Certificado en Adicciones (CCAAD IV) representa el nivel más avanzado de formación profesional en el campo de las adicciones, orientado al liderazgo, supervisión clínica, evaluación del desempeño y fortalecimiento de equipos de trabajo dentro de sistemas de atención basados en evidencia, ética profesional y modelos de recuperación. Su práctica se fundamenta en estándares internacionales de supervisión clínica y desarrollo profesional continuo.',
        professionalProfile: 'El profesional CCAAD IV posee competencias avanzadas para supervisar, orientar, capacitar y fortalecer equipos de consejería y tratamiento en adicciones, garantizando calidad técnica, ética profesional, cumplimiento normativo y desarrollo continuo del talento humano. Está preparado para liderar procesos de supervisión clínica dentro de instituciones públicas y privadas, promoviendo prácticas basadas en evidencia, seguridad del paciente y modelos de recuperación integrales.',
        technicalDescription: 'El modelo CCAAD IV se sustenta en los principios internacionales de supervisión clínica desarrollados por SAMHSA y TIP 52, los cuales establecen que la supervisión clínica constituye un proceso esencial para: garantizar calidad en la atención, fortalecer el desarrollo profesional del consejero, promover estándares éticos y legales, mejorar la retención del personal, y consolidar sistemas de atención basados en evidencia y recuperación.',
        trainingAxes: [
          'Fundamentos de la Supervisión Clínica en Adicciones',
          'Modelos y Enfoques de Supervisión Clínica',
          'Gestión de Roles, Límites y Alcances de la Supervisión',
          'Desarrollo de la Relación Supervisora y Alianza Profesional',
          'Evaluación, Monitoreo y Retroalimentación del Desempeño',
          'Ética, Legalidad y Responsabilidad Profesional',
          'Liderazgo, Desarrollo Organizacional y Trabajo Interdisciplinario',
          'Desarrollo Profesional Continuo y Formación de Supervisores',
          'Implementación de Supervisión Basada en Evidencia y Calidad Asistencial',
          'Gestión de Casos Complejos y Toma de Decisiones Clínicas'
        ],
        requirements: [
          'Licenciatura en Psicología, Trabajo Social, Sociología o profesiones afines del área de salud mental y ciencias sociales',
          '60 horas de formación especializada en supervisión clínica en adicciones',
          '60 horas de entrenamiento práctico supervisado en funciones de supervisión clínica',
          'Dominio de principios éticos, legales y administrativos aplicados a la supervisión clínica',
          'Formación en evaluación del desempeño, retroalimentación y desarrollo profesional',
          '2,000 horas o mínimo dos años de experiencia supervisada en consejería en alcohol y drogas',
          '3 avales o referencias profesionales',
          'Firma y compromiso formal con el Código de Ética Profesional',
          'Aprobación del examen internacional de consejería y supervisión en adicciones',
          'Ejercicio laboral en un país miembro con cumplimiento mínimo del 51% de práctica profesional',
          'Entrega completa de documentación académica, profesional y administrativa requerida'
        ],
        competencies: {
          saberConocer: [
            'Comprensión avanzada de los fundamentos, principios y funciones de la supervisión clínica en adicciones',
            'Dominio de modelos integrativos y enfoques basados en evidencia para la supervisión clínica',
            'Conocimiento de procesos de supervisión, calidad asistencial y desarrollo profesional continuo',
            'Comprensión de roles, límites, responsabilidades y alcances de la supervisión clínica'
          ],
          saberHacer: [
            'Gestión de procesos de supervisión clínica orientados a la calidad asistencial y al desarrollo profesional continuo',
            'Desarrollo de relaciones de supervisión basadas en confianza, colaboración, retroalimentación y aprendizaje reflexivo',
            'Análisis de casos clínicos complejos y acompañamiento especializado al personal de consejería',
            'Evaluación objetiva y sistemática del desempeño clínico y profesional',
            'Diseño de planes de mejora, seguimiento y fortalecimiento de competencias profesionales',
            'Liderazgo profesional, coordinación interdisciplinaria y fortalecimiento institucional'
          ],
          saberSer: [
            'Aplicación rigurosa de principios éticos, legales y normativos en la práctica supervisora',
            'Manejo responsable de información confidencial y toma de decisiones éticas',
            'Promoción del aprendizaje continuo, innovación y mejora permanente de la calidad profesional',
            'Desarrollo de competencias de mentoría, coaching y formación de nuevos supervisores clínicos'
          ]
        },
        functions: [
          'Supervisar y orientar a equipos de consejería en adicciones',
          'Garantizar la calidad técnica y ética de los servicios de tratamiento',
          'Desarrollar y aplicar modelos de supervisión clínica basados en evidencia',
          'Evaluar el desempeño profesional y diseñar planes de mejora',
          'Promover el desarrollo profesional continuo del personal',
          'Liderar procesos de cambio institucional y mejora organizacional',
          'Formar y capacitar nuevos supervisores clínicos'
        ],
        hours: [
          { value: '60h', label: 'Formación en supervisión' },
          { value: '60h', label: 'Entrenamiento práctico' },
          { value: '2,000h', label: 'Experiencia en consejería' }
        ]
      }
    ]
  },
  pt: {
    standards: {
      'TAP 21': {
        name: 'Treatment Accessibility Protocol 21',
        shortName: 'TAP 21',
        description: 'Estabelece as 12 funções essenciais do conselheiro profissional em adições, proporcionando um marco de competências reconhecido internacionalmente para a prática clínica e o desenvolvimento profissional.'
      },
      'TIP 64': {
        name: 'Treatment Improvement Protocol 64',
        shortName: 'TIP 64',
        description: 'Proporciona base científica e metodológica para a implementação de serviços de apoio entre pares e recuperação, adaptados à realidade cultural e social da América Latina.'
      },
      'TIP 52': {
        name: 'Treatment Improvement Protocol 52',
        shortName: 'TIP 52',
        description: 'Guia especializado na supervisão clínica e no desenvolvimento profissional contínuo do conselheiro em adições.'
      }
    },
    certificationsFull: [
      {
        code: 'OST',
        name: 'Operador Socioterapêutico',
        standard: 'TAP 21',
        basedOn: 'Baseados nos Fundamentos Transdisciplinares do TAP 21',
        fee: 30,
        summary: 'Nível inicial. Acompanhamento supervisionado em comunidades terapêuticas e centros de tratamento.',
        description: 'O Operador Socioterapêutico (OST) é um profissional capacitado para acompanhar processos de recuperação e apoio em pessoas com transtornos por uso de substâncias, integrando conhecimentos técnicos, habilidades práticas e valores humanos. Sua formação se fundamenta especificamente nos Fundamentos Transdisciplinares do TAP 21, orientados ao desenvolvimento do saber conhecer, saber fazer e saber ser dentro do trabalho terapêutico e comunitário em adições.',
        professionalProfile: 'O Operador Socioterapêutico atua com sensibilidade humana, vocação de serviço e respeito pela dignidade das pessoas. Seu trabalho fortalece processos de recuperação centrados na pessoa e contribui para o desenvolvimento de ambientes terapêuticos seguros, inclusivos e orientados ao bem-estar biopsicossocial. O OST participa como agente de apoio dentro de programas de prevenção, tratamento e recuperação, integrando princípios éticos, trabalho interdisciplinar e acompanhamento humano contínuo.',
        technicalDescription: 'A formação do Operador Socioterapêutico se fundamenta no TAP 21: Competências para Aconselhamento em Adição, desenvolvido pela SAMHSA e CSAT, o qual estabelece que os Fundamentos Transdisciplinares constituem a base essencial para todos os profissionais que trabalham no campo das adições. O TAP 21 reconhece quatro fundamentos principais: Entender a Adição, Conhecimento sobre o Tratamento, Aplicação à Prática e Preparação Profissional. Esses fundamentos proporcionam conhecimentos, destrezas e atitudes necessárias para desenvolver práticas de apoio efetivas, éticas e culturalmente sensíveis em processos de recuperação.',
        trainingAxes: [
          'Compreensão da Adição',
          'Conhecimento sobre o Tratamento',
          'Aplicação à Prática',
          'Preparação Profissional',
          'Funções do Operador Socioterapêutico'
        ],
        requirements: [
          'Ensino médio completo ou equivalente',
          '80 horas de formação específica nos Fundamentos Transdisciplinares do TAP 21',
          '1.000 horas ou no mínimo um ano de experiência em centros de tratamento ou programas relacionados a adições',
          '100 horas de prática supervisionada em funções socioterapêuticas',
          '3 avais profissionais',
          'Assinatura e compromisso formal com o Código de Ética Profissional',
          'Aprovação no exame internacional OST',
          'Atuação profissional no país de origem com pelo menos 51% de prática profissional',
          'Entrega completa da documentação acadêmica e administrativa exigida'
        ],
        competencies: {
          saberConocer: [
            'Compreensão integral das adições a partir de enfoques médicos, psicológicos, sociais e culturais',
            'Capacidade para identificar fatores de risco, sinais de consumo e necessidades de apoio',
            'Conhecimento de modelos de tratamento e recuperação',
            'Conhecimento de recursos comunitários e redes de apoio'
          ],
          saberHacer: [
            'Aplicação de estratégias de acompanhamento, orientação e acompanhamento socioterapêutico',
            'Intervenção básica em crise e encaminhamento oportuno',
            'Facilitação de atividades grupais, educativas e comunitárias',
            'Observar e identificar sinais de risco ou recaída',
            'Registro e documentação de atividades'
          ],
          saberSer: [
            'Desenvolvimento de habilidades de comunicação efetiva, escuta ativa e empatia terapêutica',
            'Manejo ético e confidencial da informação',
            'Compromisso com a formação contínua, o autocuidado e a responsabilidade profissional',
            'Respeito pela diversidade cultural, social e humana dentro dos processos de recuperação',
            'Vocação de serviço e sensibilidade humana'
          ]
        },
        functions: [
          'Acompanhar processos de recuperação e reinserção social',
          'Oferecer orientação e apoio terapêutico básico',
          'Facilitar processos de motivação e adesão ao tratamento',
          'Observar e identificar sinais de risco ou recaída',
          'Favorecer ambientes terapêuticos seguros e humanizados',
          'Apoiar atividades grupais, educativas e comunitárias',
          'Promover habilidades de vida saudável e fortalecimento pessoal',
          'Colaborar com profissionais e redes de apoio em benefício do usuário',
          'Encaminhar oportunamente situações que exijam atenção especializada',
          'Manter conduta ética e profissional em todos os processos de atenção'
        ],
        hours: [
          { value: '80h', label: 'Formação específica' },
          { value: '1.000h', label: 'Experiência supervisionada' },
          { value: '100h', label: 'Prática supervisionada' }
        ]
      },
      {
        code: 'EPR',
        name: 'Treinador de Pares em Recuperação',
        standard: 'TIP 64',
        basedOn: 'Baseados no TIP 64 da SAMHSA',
        fee: 30,
        summary: 'Apoio a partir da experiência vivida em recuperação. Facilitador de apoio e acompanhamento não clínico.',
        description: 'O Treinador de Recuperação (Recovery Coach / Peer Recovery Coach) é um facilitador de apoio e acompanhamento não clínico que, a partir de sua experiência vivida, formação especializada e compromisso ético, promove processos de recuperação, bem-estar e integração social em pessoas afetadas por transtornos por uso de substâncias. Seu trabalho se fundamenta nos princípios de recuperação orientada à pessoa, apoio mútuo, inclusão, esperança e fortalecimento comunitário descritos no TIP 64. O Treinador de Recuperação atua como modelo positivo de mudança, promovendo a conexão com recursos de recuperação, redes de apoio e serviços comunitários.',
        professionalProfile: 'O Treinador de Recuperação atua como agente de esperança e transformação humana, fortalecendo processos de recuperação a partir do apoio mútuo, da empatia e da experiência vivida. Sua intervenção é não clínica e se orienta ao fortalecimento do bem-estar biopsicossocial, à inclusão social e ao acesso a recursos comunitários que favoreçam a recuperação sustentada. O Recovery Coach promove relações baseadas no respeito, na dignidade humana e na redução do estigma, integrando princípios de recuperação orientados à pessoa e ao fortalecimento do capital de recuperação.',
        technicalDescription: 'A formação do Treinador de Recuperação se fundamenta no TIP 64: Incorporating Peer Support Into Substance Use Disorder Treatment Services, desenvolvido pela Substance Abuse and Mental Health Services Administration (SAMHSA). O TIP 64 estabelece que os serviços de apoio entre pares constituem uma prática baseada em evidência que fortalece a recuperação, melhora a retenção em tratamento, aumenta a motivação para a mudança e favorece melhores resultados de recuperação a longo prazo. Da mesma forma, reconhece que os trabalhadores pares e treinadores de recuperação desempenham um papel essencial dentro dos sistemas de atenção orientados à recuperação (ROSC), oferecendo apoio não clínico baseado na experiência vivida, na empatia, no acompanhamento e na construção de redes de apoio comunitário. O TIP 64 também enfatiza que os serviços de apoio entre pares contribuem para: reduzir recorrências, aumentar a motivação e adesão ao tratamento, melhorar a retenção em serviços de recuperação, fortalecer relações sociais e familiares, aumentar a satisfação com o processo de recuperação, promover a autoeficácia e o bem-estar integral.',
        trainingAxes: [
          'Conhecimento sobre Recuperação e Transtorno por Uso de Substâncias',
          'Papel e Funções do Treinador de Recuperação e Pares',
          'Habilidades de Apoio, Acompanhamento e Motivação',
          'Ética, Limites Profissionais e Confidencialidade',
          'Diversidade, Inclusão e Sensibilidade Cultural',
          'Construção Comunitária e Redes de Recuperação',
          'Desenvolvimento Profissional, Liderança e Autocuidado'
        ],
        requirements: [
          'Ensino médio completo ou equivalente',
          '80 horas de formação específica em recuperação, apoio entre pares e fundamentos transdisciplinares',
          '100 horas ou no mínimo um ano de experiência em centros de tratamento, recuperação, casas de transição ou programas comunitários',
          '100 horas de prática supervisionada em funções de acompanhamento e apoio em recuperação',
          '3 avais profissionais',
          'Assinatura e compromisso formal com o Código de Ética Profissional',
          'Aprovação no exame internacional EPR (Treinador de Pares em Recuperação)',
          'Atuação profissional no país de origem com pelo menos 51% de prática profissional',
          'Entrega completa da documentação acadêmica e administrativa exigida'
        ],
        competencies: {
          saberConocer: [
            'Compreensão do processo de recuperação e do transtorno por uso de substâncias',
            'Capacidade para identificar sinais de risco, recorrência e necessidades de apoio',
            'Conhecimento de recursos comunitários e redes de recuperação',
            'Compreensão dos princípios de recuperação orientada à pessoa e apoio mútuo'
          ],
          saberHacer: [
            'Habilidades de escuta ativa, comunicação empática e acompanhamento humano',
            'Orientação e motivação baseadas na experiência vivida e recuperação compartilhada',
            'Facilitação de grupos de apoio e espaços seguros de recuperação',
            'Promoção de hábitos saudáveis, bem-estar integral e prevenção de recorrências',
            'Conexão das pessoas com recursos comunitários e redes de recuperação'
          ],
          saberSer: [
            'Sensibilidade cultural, inclusão, equidade e respeito pela diversidade humana',
            'Compromisso com o autocuidado, a formação contínua e o desenvolvimento pessoal',
            'Capacidade para fortalecer o capital de recuperação das pessoas e comunidades',
            'Atitude de modelo positivo de mudança e agente de esperança',
            'Aplicação de princípios éticos, confidencialidade e limites profissionais'
          ]
        },
        functions: [
          'Oferecer apoio de recuperação centrado na pessoa',
          'Acompanhar processos de mudança e fortalecimento pessoal',
          'Motivar a participação ativa em processos de recuperação',
          'Facilitar grupos de apoio mútuo e recuperação',
          'Ajudar na identificação de potencialidades e metas de recuperação',
          'Promover habilidades para a vida saudável e bem-estar integral',
          'Orientar sobre recursos comunitários e serviços disponíveis',
          'Favorecer a integração social, familiar e comunitária',
          'Fomentar a esperança, resiliência e empoderamento pessoal',
          'Manter limites éticos e relações profissionais saudáveis',
          'Colaborar com equipes interdisciplinares e redes comunitárias',
          'Promover ambientes inclusivos, seguros e livres de estigma'
        ],
        hours: [
          { value: '80h', label: 'Formação específica' },
          { value: '100h', label: 'Experiência em centros' },
          { value: '100h', label: 'Prática supervisionada' }
        ]
      },
      {
        code: 'CCAAD I',
        name: 'Conselheiro Associado Júnior – Nível Inicial',
        standard: 'TAP 21',
        basedOn: 'Fundamentados no TAP 21',
        fee: 50,
        summary: 'Primeiro nível técnico profissional. Intervenções estruturadas sob supervisão profissional.',
        description: 'O Conselheiro Associado em Adições CCAAD I é um profissional em formação inicial que desenvolve competências básicas para a avaliação, orientação, acompanhamento e apoio terapêutico de pessoas com transtornos por uso de substâncias, integrando princípios éticos, conhecimentos técnicos e habilidades de intervenção centradas na recuperação. Sua prática se fundamenta no modelo de competências descrito no TAP 21: Competências para Aconselhamento em Adição – Conhecimento, Destrezas e Atitudes da Prática Profissional, desenvolvido pela SAMHSA e a Rede ATTC.',
        professionalProfile: 'O Conselheiro Associado Júnior – CCAAD I oferece apoio estruturado e acompanhamento terapêutico a partir de uma perspectiva ética, técnica e centrada na pessoa, fortalecendo processos de recuperação e bem-estar integral. Sua prática se desenvolve sob supervisão profissional e está orientada à aquisição de competências clínicas básicas em avaliação, aconselhamento, planejamento e apoio para pessoas com transtornos por uso de substâncias. O profissional promove a recuperação a partir de um enfoque humano, interdisciplinar, inclusivo e livre de estigmas, conforme as competências internacionais do TAP 21.',
        technicalDescription: 'A certificação CCAAD I – Conselheiro Associado Júnior se fundamenta no modelo de competências profissionais do TAP 21, considerado o padrão internacional para a formação de conselheiros em adições. O TAP 21 identifica competências essenciais em conhecimento, destrezas e atitudes necessárias para uma prática efetiva no tratamento de transtornos por uso de substâncias. Da mesma forma, estabelece que o desenvolvimento da força de trabalho em adições requer profissionais preparados em avaliação, aconselhamento, coordenação de serviços, ética, sensibilidade cultural e práticas baseadas em evidência. O modelo promove: atenção centrada na pessoa, recuperação integral e sustentada, intervenções baseadas em evidência científica, integração familiar e comunitária, trabalho interdisciplinar, redução do estigma associado à adição e melhoria contínua da qualidade de atenção.',
        trainingAxes: [
          'Compreensão do Transtorno por Uso de Substâncias Psicoativas',
          'Seleção, Avaliação e Participação',
          'Planejamento, Colaboração e Encaminhamento do Tratamento',
          'Aconselhamento',
          'Responsabilidade Profissional e Ética',
          'Diversidade Cultural e Inclusão',
          'Aplicação de Evidência e Práticas Baseadas em Pesquisa',
          'Desenvolvimento Profissional e Autocuidado'
        ],
        requirements: [
          'Diploma de ensino médio completo ou equivalente',
          '120 horas de formação especializada nos eixos de formação do TAP 21',
          '1.500 horas ou no mínimo 1 ano e 6 meses de experiência supervisionada em aconselhamento em álcool e drogas',
          '60 horas supervisionadas nas 12 funções internacionais do conselheiro em adições',
          '3 avais profissionais',
          'Assinatura e aceitação formal do Código de Ética Profissional',
          'Aprovação no exame internacional de aconselhamento em adições',
          'Atuação profissional em país membro com mínimo de 51% de prática laboral',
          'Entrega completa da documentação acadêmica e administrativa exigida'
        ],
        competencies: {
          saberConocer: [
            'Compreensão integral do transtorno por uso de substâncias e seus efeitos biopsicossociais',
            'Identificação de fatores de risco, proteção, recaída e recuperação',
            'Conhecimento de processos de triagem, admissão e avaliação inicial',
            'Conhecimento de ferramentas básicas de avaliação e entrevista estruturada'
          ],
          saberHacer: [
            'Aplicação de processos de triagem, admissão e avaliação inicial',
            'Uso de entrevistas estruturadas e ferramentas básicas de avaliação',
            'Elaboração de metas terapêuticas e acompanhamento do processo de recuperação',
            'Coordenação de encaminhamentos e trabalho com redes de apoio',
            'Desenvolvimento de aconselhamento individual, grupal e familiar',
            'Aplicação de entrevista motivacional, psicoeducação e prevenção de recaídas'
          ],
          saberSer: [
            'Promoção de habilidades de enfrentamento, autocuidado e adesão terapêutica',
            'Manejo ético da informação, confidencialidade e responsabilidade profissional',
            'Trabalho interdisciplinar com enfoque humano, empático e livre de estigmas',
            'Sensibilidade cultural e adaptação de serviços conforme as necessidades da pessoa'
          ]
        },
        functions: [
          'Realizar avaliações iniciais e triagem de pessoas com transtornos por uso de substâncias',
          'Desenvolver planos de tratamento centrados na pessoa',
          'Oferecer aconselhamento individual e grupal sob supervisão',
          'Aplicar entrevistas motivacionais e técnicas de prevenção de recaídas',
          'Coordenar encaminhamentos a serviços especializados',
          'Documentar o progresso do paciente e manter registros clínicos',
          'Trabalhar em colaboração com equipes interdisciplinares'
        ],
        hours: [
          { value: '120h', label: 'Formação especializada' },
          { value: '1.500h', label: 'Experiência supervisionada' },
          { value: '60h', label: 'Prática supervisionada' }
        ]
      },
      {
        code: 'CCAAD II',
        name: 'Técnico em Aconselhamento em Adições – Nível Profissional / Intermediário',
        standard: 'TAP 21',
        basedOn: 'Fundamentados no TAP 21',
        fee: 75,
        summary: 'Competências avançadas em aconselhamento, avaliação integral e coordenação de casos.',
        description: 'O Técnico em Aconselhamento em Adições CCAAD II é um profissional com formação técnica e competências clínicas intermediárias para participar de processos de avaliação, orientação, aconselhamento e acompanhamento terapêutico de pessoas com transtornos por uso de substâncias, dentro de equipes interdisciplinares e modelos orientados à recuperação. Sua prática se fundamenta nas competências profissionais estabelecidas no TAP 21.',
        professionalProfile: 'O Técnico em Aconselhamento em Adições CCAAD II atua com empatia, responsabilidade e compromisso humano, contribuindo para o acompanhamento terapêutico e fortalecendo processos de recuperação a partir de uma atenção ética, organizada e centrada na dignidade da pessoa. Sua prática integra competências técnicas e habilidades de aconselhamento que permitem colaborar ativamente em processos de avaliação, intervenção, orientação e acompanhamento dentro de programas de tratamento e recuperação em adições. O profissional promove a recuperação a partir de um enfoque humano, interdisciplinar, inclusivo e livre de estigmas, conforme os padrões internacionais estabelecidos no TAP 21.',
        technicalDescription: 'A certificação CCAAD II – Técnico em Aconselhamento em Adições se fundamenta no modelo de competências profissionais do TAP 21, considerado um dos padrões internacionais mais importantes para a formação e desenvolvimento de profissionais no campo das adições. O TAP 21 identifica competências essenciais em conhecimentos, destrezas e atitudes necessárias para uma prática efetiva no tratamento de transtornos por uso de substâncias psicoativas. Da mesma forma, estabelece que os profissionais em adições devem desenvolver capacidades em: avaliação e orientação terapêutica, aconselhamento individual e grupal, planejamento e coordenação do tratamento, ética e responsabilidade profissional, sensibilidade cultural, trabalho interdisciplinar, e aplicação de práticas baseadas em evidência. O modelo TAP 21 promove: atenção centrada na pessoa, recuperação integral e sustentada, fortalecimento de redes familiares e comunitárias, redução do estigma associado à adição, qualidade de atenção clínica e humana, e desenvolvimento contínuo da força de trabalho em adições.',
        trainingAxes: [
          'Compreensão do Transtorno por Uso de Substâncias Psicoativas',
          'Seleção, Avaliação e Participação',
          'Planejamento, Colaboração e Encaminhamento do Tratamento',
          'Aconselhamento',
          'Responsabilidade Profissional e Ética',
          'Diversidade Cultural e Inclusão',
          'Aplicação de Evidência e Práticas Baseadas em Pesquisa',
          'Desenvolvimento Profissional e Autocuidado'
        ],
        requirements: [
          'Diploma de ensino médio completo ou equivalente',
          '150 horas de formação especializada nos eixos de formação do TAP 21',
          '2.000 horas ou no mínimo 1 ano e 6 meses de experiência supervisionada em aconselhamento em álcool e drogas',
          '96 horas supervisionadas nas 12 funções internacionais do conselheiro em adições',
          '3 avais profissionais',
          'Assinatura e aceitação formal do Código de Ética Profissional',
          'Aprovação no exame internacional de aconselhamento em adições',
          'Atuação profissional em país membro com mínimo de 51% de prática laboral',
          'Entrega completa da documentação acadêmica e administrativa exigida'
        ],
        competencies: {
          saberConocer: [
            'Compreensão do transtorno por uso de substâncias a partir de um enfoque biopsicossocial',
            'Identificação de fatores de risco, recaída, recuperação e necessidades de apoio',
            'Domínio de processos de triagem, admissão, orientação e avaliação inicial',
            'Conhecimento de ferramentas de detecção e avaliação detalhada'
          ],
          saberHacer: [
            'Aplicação de processos de triagem, admissão, orientação e avaliação inicial',
            'Participação em planos de tratamento centrados na pessoa',
            'Coordenação de encaminhamentos e acesso a redes de apoio comunitário',
            'Desenvolvimento de aconselhamento individual e grupal de apoio',
            'Aplicação de escuta ativa, motivação e psicoeducação',
            'Registro técnico e acompanhamento do processo terapêutico'
          ],
          saberSer: [
            'Promoção de habilidades de enfrentamento e hábitos saudáveis',
            'Aplicação de princípios éticos, confidencialidade e responsabilidade profissional',
            'Trabalho colaborativo dentro de equipes interdisciplinares',
            'Sensibilidade cultural e adaptação de serviços conforme as necessidades da pessoa'
          ]
        },
        functions: [
          'Realizar avaliações intermediárias e acompanhamento terapêutico de pessoas com transtornos por uso de substâncias',
          'Participar da elaboração e atualização de planos de tratamento',
          'Desenvolver aconselhamento individual e grupal de maior complexidade',
          'Aplicar técnicas de entrevista motivacional e cognitivo-comportamentais',
          'Coordenar com redes de apoio comunitário e institucional',
          'Supervisionar e documentar o progresso dos casos',
          'Colaborar em equipes interdisciplinares de tratamento'
        ],
        hours: [
          { value: '150h', label: 'Formação especializada' },
          { value: '2.000h', label: 'Experiência supervisionada' },
          { value: '96h', label: 'Prática supervisionada' }
        ]
      },
      {
        code: 'CCAAD III',
        name: 'Licenciado Profissional em Aconselhamento Avançado Não Clínico – Nível Avançado',
        standard: 'TAP 21',
        basedOn: 'Fundamentados no TAP 21',
        fee: 100,
        summary: 'Nível avançado profissional com avaliação biopsicossocial e manejo de casos complexos.',
        description: 'O Licenciado Profissional em Aconselhamento Avançado Não Clínico CCAAD III desenvolve competências especializadas para a atenção avançada de pessoas com transtorno por uso de substâncias, integrando avaliação integral, aconselhamento avançado, planejamento terapêutico, coordenação interdisciplinar e fortalecimento de processos de recuperação. Sua prática se fundamenta no modelo internacional de competências profissionais estabelecido no TAP 21.',
        professionalProfile: 'O profissional CCAAD III atua como líder em processos de acompanhamento avançado não clínico, promovendo a recuperação integral, a coordenação interdisciplinar e o fortalecimento de redes de apoio comunitário e familiar. Seu desempenho integra competências avançadas de avaliação, orientação terapêutica, planejamento do tratamento e acompanhamento especializado, dentro dos limites éticos, técnicos e legais de sua profissão. Da mesma forma, participa de processos de supervisão, desenvolvimento de programas, melhoria contínua e fortalecimento de serviços orientados à recuperação e atenção centrada na pessoa.',
        technicalDescription: 'A certificação CCAAD III – Licenciado Profissional em Aconselhamento Avançado Não Clínico se fundamenta no modelo internacional de competências profissionais desenvolvido no TAP 21, documento de referência para a formação e desenvolvimento profissional no campo das adições. O TAP 21 identifica competências essenciais relacionadas a: compreensão da adição, avaliação clínica avançada, planejamento do tratamento, aconselhamento individual e grupal, prevenção de recaídas, coordenação de serviços, competência cultural, ética profissional e aplicação de práticas baseadas em evidência científica. Da mesma forma, reconhece a importância de: a entrevista motivacional, o trabalho interdisciplinar, a integração biopsicossocial, o enfoque centrado na pessoa, a participação familiar e comunitária, e o fortalecimento de processos de recuperação sustentada. O modelo TAP 21 promove padrões internacionais para garantir qualidade profissional, responsabilidade ética, sensibilidade cultural e melhoria contínua na atenção de pessoas com transtornos por uso de substâncias.',
        trainingAxes: [
          'Compreensão do Transtorno por Uso de Substâncias Psicoativas',
          'Seleção, Avaliação e Participação',
          'Planejamento, Colaboração e Encaminhamento do Tratamento',
          'Aconselhamento',
          'Responsabilidade Profissional e Ética',
          'Diversidade Cultural e Inclusão',
          'Aplicação de Evidência e Práticas Baseadas em Pesquisa',
          'Desenvolvimento Profissional, Liderança e Supervisão'
        ],
        requirements: [
          'Graduação em Psicologia, Serviço Social, Sociologia ou outras profissões afins à saúde mental e ciências do comportamento humano',
          '170 horas de formação especializada nos oito eixos de formação fundamentados no TAP 21',
          '3.000 horas ou no mínimo 2 anos e 6 meses de experiência supervisionada em aconselhamento em álcool e drogas',
          '120 horas supervisionadas nas 12 funções internacionais do conselheiro em adições',
          '3 avais profissionais',
          'Assinatura e aceitação formal do Código de Ética Profissional',
          'Aprovação no exame internacional de aconselhamento em adições',
          'Atuação profissional em país membro com mínimo de 51% de prática laboral',
          'Entrega completa da documentação acadêmica e administrativa exigida'
        ],
        competencies: {
          saberConocer: [
            'Compreensão avançada do transtorno por uso de substâncias a partir de enfoques neurobiológicos, psicológicos e sociais',
            'Identificação de fatores de risco, proteção e capital de recuperação',
            'Domínio de processos avançados de avaliação, admissão e entrevista clínica',
            'Integração de informação biopsicossocial para o planejamento terapêutico'
          ],
          saberHacer: [
            'Aplicação de processos avançados de avaliação, admissão e entrevista clínica',
            'Elaboração de planos de tratamento estruturados e orientados a metas',
            'Coordenação de recursos institucionais, comunitários e redes de apoio',
            'Desenvolvimento de aconselhamento individual, grupal e familiar educativo',
            'Aplicação de entrevista motivacional e enfoques cognitivo-comportamentais',
            'Fortalecimento de habilidades de enfrentamento, prevenção de recaídas e empoderamento pessoal'
          ],
          saberSer: [
            'Acompanhamento e avaliação contínua do processo de acompanhamento',
            'Participação em processos de supervisão, melhoria contínua e trabalho interdisciplinar',
            'Liderança profissional e compromisso com a qualidade assistencial',
            'Aplicação rigorosa de princípios éticos, legais e de confidencialidade'
          ]
        },
        functions: [
          'Realizar avaliações biopsicossociais completas e diagnósticos funcionais',
          'Elaborar e coordenar planos de tratamento individualizados',
          'Desenvolver aconselhamento avançado individual, grupal e familiar',
          'Aplicar enfoques terapêuticos baseados em evidência',
          'Supervisionar e orientar profissionais de níveis inferiores',
          'Coordenar equipes interdisciplinares de tratamento',
          'Participar do desenvolvimento e melhoria de programas de atenção'
        ],
        hours: [
          { value: '170h', label: 'Formação especializada' },
          { value: '3.000h', label: 'Experiência supervisionada' },
          { value: '120h', label: 'Prática supervisionada' }
        ]
      },
      {
        code: 'CCAAD IV',
        name: 'Supervisor Clínico Certificado em Adições',
        standard: 'TIP 52',
        basedOn: 'Baseado no TIP 52: Clinical Supervision and Professional Development',
        fee: 125,
        summary: 'Nível máximo. Supervisão profissional, liderança de equipes e garantia de qualidade.',
        description: 'O Supervisor Clínico Certificado em Adições (CCAAD IV) representa o nível mais avançado de formação profissional no campo das adições, orientado à liderança, supervisão clínica, avaliação do desempenho e fortalecimento de equipes de trabalho dentro de sistemas de atenção baseados em evidência, ética profissional e modelos de recuperação. Sua prática se fundamenta em padrões internacionais de supervisão clínica e desenvolvimento profissional contínuo.',
        professionalProfile: 'O profissional CCAAD IV possui competências avançadas para supervisionar, orientar, capacitar e fortalecer equipes de aconselhamento e tratamento em adições, garantindo qualidade técnica, ética profissional, cumprimento normativo e desenvolvimento contínuo do talento humano. Está preparado para liderar processos de supervisão clínica dentro de instituições públicas e privadas, promovendo práticas baseadas em evidência, segurança do paciente e modelos de recuperação integrais.',
        technicalDescription: 'O modelo CCAAD IV se sustenta nos princípios internacionais de supervisão clínica desenvolvidos pela SAMHSA e TIP 52, os quais estabelecem que a supervisão clínica constitui um processo essencial para: garantir qualidade na atenção, fortalecer o desenvolvimento profissional do conselheiro, promover padrões éticos e legais, melhorar a retenção do pessoal, e consolidar sistemas de atenção baseados em evidência e recuperação.',
        trainingAxes: [
          'Fundamentos da Supervisão Clínica em Adições',
          'Modelos e Enfoques de Supervisão Clínica',
          'Gestão de Papéis, Limites e Alcances da Supervisão',
          'Desenvolvimento da Relação Supervisora e Aliança Profissional',
          'Avaliação, Monitoramento e Retroalimentação do Desempenho',
          'Ética, Legalidade e Responsabilidade Profissional',
          'Liderança, Desenvolvimento Organizacional e Trabalho Interdisciplinar',
          'Desenvolvimento Profissional Contínuo e Formação de Supervisores',
          'Implementação de Supervisão Baseada em Evidência e Qualidade Assistencial',
          'Gestão de Casos Complexos e Tomada de Decisões Clínicas'
        ],
        requirements: [
          'Graduação em Psicologia, Serviço Social, Sociologia ou profissões afins da área de saúde mental e ciências sociais',
          '60 horas de formação especializada em supervisão clínica em adições',
          '60 horas de treinamento prático supervisionado em funções de supervisão clínica',
          'Domínio de princípios éticos, legais e administrativos aplicados à supervisão clínica',
          'Formação em avaliação de desempenho, retroalimentação e desenvolvimento profissional',
          '2.000 horas ou no mínimo dois anos de experiência supervisionada em aconselhamento em álcool e drogas',
          '3 avais ou referências profissionais',
          'Assinatura e compromisso formal com o Código de Ética Profissional',
          'Aprovação no exame internacional de aconselhamento e supervisão em adições',
          'Atuação laboral em um país membro com cumprimento mínimo de 51% de prática profissional',
          'Entrega completa da documentação acadêmica, profissional e administrativa exigida'
        ],
        competencies: {
          saberConocer: [
            'Compreensão avançada dos fundamentos, princípios e funções da supervisão clínica em adições',
            'Domínio de modelos integrativos e enfoques baseados em evidência para a supervisão clínica',
            'Conhecimento de processos de supervisão, qualidade assistencial e desenvolvimento profissional contínuo',
            'Compreensão de papéis, limites, responsabilidades e alcances da supervisão clínica'
          ],
          saberHacer: [
            'Gestão de processos de supervisão clínica orientados à qualidade assistencial e ao desenvolvimento profissional contínuo',
            'Desenvolvimento de relações de supervisão baseadas em confiança, colaboração, retroalimentação e aprendizagem reflexiva',
            'Análise de casos clínicos complexos e acompanhamento especializado ao pessoal de aconselhamento',
            'Avaliação objetiva e sistemática do desempenho clínico e profissional',
            'Elaboração de planos de melhoria, acompanhamento e fortalecimento de competências profissionais',
            'Liderança profissional, coordenação interdisciplinar e fortalecimento institucional'
          ],
          saberSer: [
            'Aplicação rigorosa de princípios éticos, legais e normativos na prática supervisora',
            'Manejo responsável de informação confidencial e tomada de decisões éticas',
            'Promoção da aprendizagem contínua, inovação e melhoria permanente da qualidade profissional',
            'Desenvolvimento de competências de mentoria, coaching e formação de novos supervisores clínicos'
          ]
        },
        functions: [
          'Supervisionar e orientar equipes de aconselhamento em adições',
          'Garantir a qualidade técnica e ética dos serviços de tratamento',
          'Desenvolver e aplicar modelos de supervisão clínica baseados em evidência',
          'Avaliar o desempenho profissional e elaborar planos de melhoria',
          'Promover o desenvolvimento profissional contínuo do pessoal',
          'Liderar processos de mudança institucional e melhoria organizacional',
          'Formar e capacitar novos supervisores clínicos'
        ],
        hours: [
          { value: '60h', label: 'Formação em supervisão' },
          { value: '60h', label: 'Treinamento prático' },
          { value: '2.000h', label: 'Experiência em aconselhamento' }
        ]
      }
    ]
  }
}

export function getStandards(locale) {
  return content[locale]?.standards || content.es.standards
}

export function getCertificationsFull(locale) {
  return content[locale]?.certificationsFull || content.es.certificationsFull
}
