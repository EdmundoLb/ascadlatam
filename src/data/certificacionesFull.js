export const standards = {
  'TAP 21': {
    name: 'Treatment Accessibility Protocol 21',
    shortName: 'TAP 21',
    description: 'Establece las 12 funciones esenciales del consejero profesional en adicciones, proporcionando un marco de competencias reconocido internacionalmente para la práctica clínica y el desarrollo profesional.'
  },
  'TIP 64': {
    name: 'Treatment Improvement Protocol 64',
    shortName: 'TIP 64',
    description: 'Proporciona基底 científica e metodológica para la implementación de servicios de tratamiento basados en evidencia, adaptados a la realidad cultural y social de América Latina.'
  },
  'TIP 52': {
    name: 'Treatment Improvement Protocol 52',
    shortName: 'TIP 52',
    description: 'Guía especializada en la atención centrada en la recuperación, el bienestar y la dignidad de las personas, enfatizando un enfoque humano y libre de estigmas.'
  }
}

export const certificationsFull = [
  {
    code: 'OST',
    name: 'Operador Socioterapéutico',
    standard: 'TAP 21',
    basedOn: 'Basados en los Fundamentos Transdisciplinarios del TAP 21',
    fee: 30,
    summary: 'Nivel inicial de acompañamiento supervisado en comunidades terapéuticas.',
    description: 'El Operador Socioterapéutico actúa con sensibilidad humana, respeto por la diversidad y vocación de servicio, fortaleciendo procesos de recuperación centrados en la persona y contribuyendo al desarrollo de entornos terapéuticos seguros y humanizados.',
    professionalProfile: 'Profesional de primer nivel que brinda acompañamiento supervisado en comunidades terapéuticas, centros de tratamiento y programas de intervención temprana. Trabaja bajo la guía de supervisores clínicos en un entorno estructurado.',
    trainingAxes: [
      'Comprensión de la Adicción',
      'Conocimiento sobre el Tratamiento',
      'Aplicación a la Práctica',
      'Preparación Profesional',
      'Funciones del Operador Socioterapéutico'
    ],
    technicalDescription: 'Este nivel está fundamentado en el TAP 21 (Treatment Accessibility Protocol 21), que establece las 12 funciones esenciales del consejero. El OST desarrolla competencias básicas en comprensión integral de las adicciones, identificación de factores de riesgo, acompañamiento terapéutico y trabajo interdisciplinario.',
    requirements: [
      'Secundaria completa o equivalente',
      '3 avales profesionales',
      'Firma del código de ética',
      'Aprobación del examen OST',
      'Ejercicio laboral en el país de origen'
    ],
    competencies: {
      saberConocer: [
        'Comprensión integral de las adicciones desde enfoques médicos, psicológicos y sociales',
        'Conocimiento de los modelos de tratamiento y recuperación',
        'Identificación de factores de riesgo, señales de consumo y necesidades de apoyo',
        'Conocimiento de recursos comunitarios y redes de apoyo'
      ],
      saberHacer: [
        'Aplicación de estrategias de acompañamiento, orientación y seguimiento terapéutico',
        'Intervención básica en crisis y derivación oportuna',
        'Facilitación de actividades grupales básicas',
        'Registro y documentación de actividades'
      ],
      saberSer: [
        'Desarrollo de habilidades de comunicación, escucha activa y empatía',
        'Manejo ético y confidencial de la información',
        'Compromiso con la formación continua y el autocuidado',
        'Promoción del bienestar, la inclusión y la recuperación integral',
        'Vocación de servicio y sensibilidad humana'
      ]
    }
  },
  {
    code: 'ER',
    name: 'Entrenador de Recuperación',
    standard: 'TAP 21',
    basedOn: 'Basados en los Fundamentos Transdisciplinarios del TAP 21',
    fee: 30,
    summary: 'Para personas con experiencia vivida en recuperación que brindar apoyo empático.',
    description: 'El Entrenador de Recuperación actúa como modelo positivo y agente de esperanza, fortaleciendo procesos de recuperación desde el apoyo mutuo, la integración comunitaria y el acompañamiento no clínico, siempre desde una visión humana y libre de estigmas.',
    professionalProfile: 'Profesional con experiencia vivida en recuperación que ejerce un rol de apoyo entre pares, facilitando espacios seguros de compartida y promoviendo la integración comunitaria y redes de recuperación.',
    trainingAxes: [
      'Conocimiento sobre Recuperación y Trastorno por Uso de Sustancias',
      'Rol y Funciones del Entrenador de Pares',
      'Habilidades de Apoyo y Acompañamiento',
      'Ética y Límites Profesionales',
      'Diversidad, Inclusión y Sensibilidad Cultural',
      'Construcción Comunitaria y Redes de Recuperación',
      'Desarrollo Profesional y Autocuidado'
    ],
    technicalDescription: 'Fundamentado en el TAP 21, este nivel utiliza el modelo de las 12 funciones del consejeroadaptado al contexto de apoyo entre pares. El ER basa su práctica en la experiencia compartida de recuperación, facilitando conexión con recursos comunitarios y promoviendo hábitos saludables.',
    requirements: [
      'Experiencia vivida en recuperación (mín. 2 años)',
      'Secundaria completa o equivalente',
      '2 a 3 avales personales o profesionales',
      'Firma del código de ética',
      'Aprobación del examen ER'
    ],
    competencies: {
      saberConocer: [
        'Comprensión integral de las adicciones desde enfoques médicos, psicológicos y sociales',
        'Conocimiento de los modelos de tratamiento y recuperación',
        'Identificación de factores de riesgo, señales de consumo y necesidades de apoyo',
        'Conocimiento de recursos comunitarios y redes de apoyo'
      ],
      saberHacer: [
        'Aplicación de estrategias de acompañamiento, orientación y seguimiento terapéutico',
        'Intervención básica en crisis y derivación oportuna',
        'Facilitación de actividades grupales básicas',
        'Registro y documentación de actividades'
      ],
      saberSer: [
        'Desarrollo de habilidades de comunicación, escucha activa y empatía',
        'Manejo ético y confidencial de la información',
        'Compromiso con la formación continua y el autocuidado',
        'Promoción del bienestar, la inclusión y la recuperación integral',
        'Vocación de servicio y sensibilidad humana'
      ]
    }
  },
  {
    code: 'ER',
    name: 'Entrenador de Recuperación',
    standard: 'TAP 21',
    fee: 30,
    summary: 'Para personas con experiencia vivida en recuperación que brindan apoyo empático.',
    description: 'El Entrenador de Recuperación actúa como modelo positivo y agente de esperanza, fortaleciendo procesos de recuperación desde el apoyo mutuo, la integración comunitaria y el acompañamiento no clínico, siempre desde una visión humana y libre de estigmas.',
    professionalProfile: 'Profesional con experiencia vivida en recuperación que ejerce un rol de apoyo entre pares, facilitando espacios seguros de compartida y promoviendo la integración comunitaria y redes de recuperación.',
    trainingAxes: [
      'Conocimiento sobre Recuperación y Trastorno por Uso de Sustancias',
      'Rol y Funciones del Entrenador de Pares',
      'Habilidades de Apoyo y Acompañamiento',
      'Ética y Límites Profesionales',
      'Diversidad, Inclusión y Sensibilidad Cultural',
      'Construcción Comunitaria y Redes de Recuperación',
      'Desarrollo Profesional y Autocuidado'
    ],
    technicalDescription: 'Fundamentado en el TAP 21, este nivel utiliza el modelo de las 12 funciones del consejeroadaptado al contexto de apoyo entre pares. El ER basa su práctica en la experiencia compartida de recuperación, facilitando conexión con recursos comunitarios y promoviendo hábitos saludables.',
    competencies: {
      saberConocer: [
        'Comprensión del proceso de recuperación y del trastorno por uso de sustancias',
        'Conocimiento de señales de riesgo, factores de protección y necesidades de apoyo',
        'Comprensión de la importancia del apoyo mutuo en la recuperación',
        'Conocimiento de recursos comunitarios y redes de recuperación'
      ],
      saberHacer: [
        'Habilidades de escucha activa, comunicación empática y acompañamiento humano',
        'Orientación y motivación basada en la experiencia compartida',
        'Facilitación de grupos de apoyo y espacios seguros de recuperación',
        'Promoción de hábitos saludables, bienestar y prevención de recaídas',
        'Conexión de personas con recursos comunitarios'
      ],
      saberSer: [
        'Actitud de modelo positivo y agente de esperanza',
        'Sensibilidad cultural, inclusión y respeto por la diversidad',
        'Compromiso con el autocuidado y el crecimiento personal',
        'Ética, confidencialidad y definición de límites profesionales',
        'Visión humana y libre de estigmas'
      ]
    }
  },
  {
    code: 'CCAAD I',
    name: 'Consejero en Adicciones Nivel I',
    standard: 'TIP 64',
    basedOn: 'Basados en la Orientación Técnica del TIP 64 para Latino-América',
    fee: 50,
    summary: 'Primer nivel técnico profesional con intervenciones estructuradas.',
    description: 'El Consejero en Adicciones CCAAD I brinda apoyo estructurado y acompañamiento terapéutico desde una perspectiva ética, técnica y centrada en la persona, fortaleciendo procesos de recuperación y bienestar integral.',
    professionalProfile: 'Profesional técnico que realiza intervenciones estructuradas bajo supervisión profesional, trabajando en equipos interdisciplinarios en centros de tratamiento, comunidades terapéuticas y programas de prevención.',
    trainingAxes: [
      'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
      'Selección, Evaluación y Participación',
      'Planificación, Colaboración y Derivación del Tratamiento',
      'Consejería',
      'Responsabilidad Profesional y Ética'
    ],
    technicalDescription: 'Basado en el TIP 64 (Treatment Improvement Protocol 64), este nivel proporciona la base científica y metodológica necesaria para la implementación de servicios de tratamiento. El CCAAD I desarrolla competencias en tamizaje, evaluación inicial, diseño de metas terapéuticas y coordinación de derivaciones.',
    requirements: [
      'Secundaria completa o equivalente',
      '3 avales profesionales',
      'Firma del código de ética',
      'Aprobación del examen CCAAD I',
      'Ejercicio laboral en el país de origen'
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
        'Desarrollo de consejería individual, grupal y familiar'
      ],
      saberSer: [
        'Aplicación de entrevista motivacional y psicoeducación',
        'Promoción de habilidades de afrontamiento, autocuidado y adherencia terapéutica',
        'Manejo ético de la información, confidencialidad y responsabilidad profesional',
        'Trabajo interdisciplinario con enfoque humano, empático y libre de estigmas'
      ]
    }
  },
  {
    code: 'CCAAD II',
    name: 'Consejero en Adicciones Nivel II',
    standard: 'TIP 64',
    basedOn: 'Basados en la Orientación Técnica del TIP 64 para Latino-América',
    fee: 75,
    summary: 'Competencias avanzadas en consejería con mayor responsabilidad clínica.',
    description: 'El Técnico en Consejería en Adicciones CCAAD II actúa con empatía, responsabilidad y compromiso humano, contribuyendo al acompañamiento terapéutico y fortaleciendo procesos de recuperación desde una atención ética, organizada y centrada en la dignidad de la persona.',
    professionalProfile: 'Profesional con competencias avanzadas que asume mayor responsabilidad clínica, realizando evaluación integral, coordinación de casos y supervisión de actividades de niveles inferiores.',
    trainingAxes: [
      'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
      'Selección, Evaluación y Participación',
      'Planificación, Colaboración y Derivación del Tratamiento',
      'Consejería',
      'Responsabilidad Profesional y Ética'
    ],
    technicalDescription: 'Estructurado sobre el TIP 64, el CCAAD II profundiza las competencias clínicas con énfasis en la evaluación integral, planificación de tratamiento centrada en la persona y coordinación de equipos. Desarrolla habilidades avanzadas de consejería y gestión de casos.',
    requirements: [
      'Título o diploma de CCAAD I o equivalente',
      '2 años de experiencia mínima como CCAAD I',
      '3 avales profesionales',
      'Firma del código de ética',
      'Aprobación del examen CCAAD II'
    ],
    competencies: {
      saberConocer: [
        'Comprensión del trastorno por uso de sustancias desde un enfoque biopsicosocial',
        'Identificación de factores de riesgo, recaída, recuperación y necesidades específicas',
        'Conocimiento de procesos avanzados de tamizaje, admisión y orientación',
        'Dominio de herramientas de detección y evaluación detallada'
      ],
      saberHacer: [
        'Aplicación de procesos de tamizaje, admisión, orientación y evaluación inicial',
        'Participación en planes de tratamiento centrados en la persona',
        'Coordinación de derivaciones y acceso a redes de apoyo comunitario',
        'Desarrollo de consejería individual y grupal de apoyo',
        'Registro técnico y seguimiento del proceso terapéutico'
      ],
      saberSer: [
        'Aplicación de escucha activa, motivación y psicoeducación avanzada',
        'Promoción de habilidades de afrontamiento y hábitos saludables',
        'Aplicación de principios éticos, confidencialidad y responsabilidad profesional',
        'Trabajo colaborativo dentro de equipos interdisciplinarios'
      ]
    }
  },
  {
    code: 'CCAAD III',
    name: 'Consejero en Adicciones Nivel III',
    standard: 'TIP 52',
    basedOn: 'Basados en el Enfoque Centrado en la Persona del TIP 52',
    fee: 100,
    summary: 'Nivel clínico avanzado con evaluación biopsicosocial y manejo de casos complejos.',
    description: 'El profesional CCAAD III actúa como líder en procesos de acompañamiento avanzado no clínico, promoviendo la recuperación integral, el fortalecimiento de redes de apoyo y la atención centrada en la persona, siempre dentro de los límites éticos y técnicos de su profesión.',
    professionalProfile: 'Profesional avanzado que realiza evaluación biopsicosocial completa, diseña planes de tratamiento estructurados, lidera equipos clínicos y participa en procesos de supervisión de profesionales de niveles inferiores.',
    trainingAxes: [
      'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
      'Selección, Evaluación y Participación',
      'Planificación, Colaboración y Derivación del Tratamiento',
      'Consejería Avanzada',
      'Responsabilidad Profesional y Ética'
    ],
    technicalDescription: 'Fundamentado en el TIP 52 (Treatment Improvement Protocol 52), este nivel enfatiza la atención centrada en la recuperación, el bienestar y la dignidad. El CCAAD III integra enfoques neurobiológicos, psicológicos y sociales para la planificación terapéutica avanzada.',
    requirements: [
      'Título universitario en Psicología, Trabajo Social o carrera afín',
      '2 años de experiencia mínima como CCAAD II',
      '3 avales profesionales',
      'Firma del código de ética',
      'Aprobación del examen CCAAD III'
    ],
    competencies: {
      saberConocer: [
        'Comprensión avanzada del trastorno por uso de sustancias desde enfoques neurobiológicos, psicológicos y sociales',
        'Identificación de factores de riesgo, protección y capital de recuperación',
        'Conocimiento de procesos avanzados de evaluación, admisión y entrevista clínica',
        'Integración de información biopsicosocial para la planificación terapéutica'
      ],
      saberHacer: [
        'Aplicación de procesos avanzados de evaluación, admisión y entrevista clínica',
        'Diseño de planes de tratamiento estructurados y orientados a metas',
        'Coordinación de recursos institucionales, comunitarios y redes de apoyo',
        'Desarrollo de consejería individual, grupal y familiar educativa',
        'Aplicación de entrevista motivacional y enfoques cognitivo-conductuales'
      ],
      saberSer: [
        'Fortalecimiento de habilidades de afrontamiento, prevención de recaídas y empoderamiento',
        'Seguimiento y evaluación continua del proceso de acompañamiento',
        'Participación en procesos de supervisión y mejora continua',
        'Trabajo interdisciplinario con liderazgo técnico y ética profesional'
      ]
    }
  },
  {
    code: 'CCAAD IV',
    name: 'Supervisor Clínico en Adicciones',
    standard: 'TAP 21 + TIP 64/52',
    basedOn: 'Integrando los Estándares Internacionales TAP 21, TIP 64 y TIP 52',
    fee: 125,
    summary: 'Máximo nivel. Supervisión clínica, liderazgo de equipos y garantía de calidad.',
    description: 'El profesional CCAAD IV posee capacidades avanzadas para supervisar, formar y fortalecer equipos de consejería y atención en adicciones, garantizando calidad técnica, ética profesional y desarrollo continuo del talento humano dentro de modelos orientados a la recuperación.',
    professionalProfile: 'Profesional de máximo nivel especializado en supervisión clínica, gestión de equipos, diseño de programas y garantía de calidad. Ejerce liderazgo en instituciones y organizaciones del sector salud mental y adicciones.',
    trainingAxes: [
      'Fundamentos de la Supervisión Clínica',
      'Gestión del Alcance y Roles de la Supervisión',
      'Desarrollo de la Relación de Supervisión',
      'Aplicación de Modelos y Enfoques de Supervisión',
      'Ética, Legalidad y Responsabilidad Profesional',
      'Evaluación y Monitoreo del Desempeño'
    ],
    technicalDescription: 'Integrando los estándares TAP 21, TIP 64 y TIP 52, el CCAAD IV representa la culminación del desarrollo profesional. Este nivelmasteriza las competencias de supervisión clínica, gestión del alcance profesional, desarrollo de relaciones de supervisión y evaluación del desempeño.',
    requirements: [
      'Título universitario avanzado en Salud Mental o carrera afín',
      '3 años de experiencia mínima como CCAAD III',
      '3 avales profesionales de supervisors certificados',
      'Firma del código de ética',
      'Aprobación del examen CCAAD IV'
    ],
    competencies: {
      saberConocer: [
        'Comprensión de los fundamentos y modelos de supervisión clínica en adicciones',
        'Conocimiento de procesos de supervisión, calidad asistencial y desarrollo profesional',
        'Dominio de roles, límites y alcances de la supervisión clínica',
        'Conocimiento de modelos y enfoques integrativos de supervisión'
      ],
      saberHacer: [
        'Gestión de procesos de supervisión, calidad asistencial y desarrollo profesional',
        'Desarrollo de relaciones de supervisión basadas en confianza y aprendizaje reflexivo',
        'Análisis de casos clínicos y acompañamiento profesional especializado',
        'Evaluación objetiva del desempeño clínico y diseño de planes de mejora',
        'Liderazgo profesional y fortalecimiento institucional'
      ],
      saberSer: [
        'Aplicación de principios éticos, legales y normativos en supervisión clínica',
        'Gestión responsable de información confidencial y decisiones éticas',
        'Promoción del aprendizaje continuo, innovación y mejora de la calidad',
        'Compromiso con el desarrollo del talento humano y estándares internacionales'
      ]
    }
  }
]