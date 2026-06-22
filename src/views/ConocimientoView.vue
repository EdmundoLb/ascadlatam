<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Centro de Conocimiento</div>
        <h1>Recursos de aprendizaje y<br><em class="gold">consulta</em></h1>
        <p class="lead" style="margin-top:18px;">
          Accedé de forma organizada a contenidos educativos, materiales de apoyo y herramientas de capacitación en adicciones.
        </p>
      </div>
    </section>

    <!-- Featured Resources -->
    <section class="section featured-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">Recursos destacados</div>
          <h2>Contenido <em class="gold">recomendado</em></h2>
        </div>
        <div class="featured-grid">
          <article v-for="item in featuredItems" :key="item.id" class="featured-card">
            <div class="featured-badge" :class="`badge-${item.type}`">{{ item.typeLabel }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="featured-meta">
              <span class="meta-date">{{ item.date }}</span>
              <span class="meta-tag">{{ item.tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Tabs Navigation -->
    <section class="section tabs-section">
      <div class="container">
        <div class="content-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab-btn', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            <!-- v-html: SVG fijo definido en este mismo componente -->
            <span class="tab-icon" v-html="tab.icon"></span>
            {{ tab.label }}
          </button>
        </div>

        <!-- Biblioteca Tab -->
        <div v-if="activeTab === 'biblioteca'" class="tab-content">
          <div class="biblioteca-intro">
            <h3>Biblioteca de Contenidos</h3>
            <p>Guías, manuales, artículos especializados y casos de éxito para profundizar tu conocimiento en adicciones.</p>
          </div>
          <div class="library-grid">
            <div v-for="item in libraryItems" :key="item.id" class="library-card">
              <!-- v-html: SVG fijo definido en este mismo componente -->
              <div class="library-icon" v-html="item.icon"></div>
              <div class="library-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <span class="library-count">{{ item.count }} recursos</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Infografías Tab -->
        <div v-if="activeTab === 'infografias'" class="tab-content">
          <div class="infografias-intro">
            <h3>Infografías</h3>
            <p>Representaciones visuales de procesos, niveles y competencias para facilitar la comprensión de conceptos clave.</p>
          </div>
          <div class="infografias-grid">
            <div v-for="item in infografiasItems" :key="item.id" class="infografia-card" @click="openLightbox(item.image)">
              <div class="infografia-preview">
                <img :src="item.image" :alt="item.title" loading="lazy" />
                <div class="infografia-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </div>
              </div>
              <div class="infografia-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Lightbox Modal -->
        <div v-if="lightboxImage" class="lightbox" @click="closeLightbox">
          <button class="lightbox-close" @click="closeLightbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <img :src="lightboxImage" alt="Infografía ampliada" @click.stop />
        </div>

        <!-- Artículos Tab -->
        <div v-if="activeTab === 'articulos'" class="tab-content">
          <div class="articulos-intro">
            <h3>Artículos Especializados</h3>
            <p>Publicaciones de autores reconocidos sobre tendencias, investigaciones y mejores prácticas en el campo de las adicciones.</p>
          </div>
          <div class="articulos-list">
            <article v-for="item in articulosItems" :key="item.id" class="articulo-card" :class="{ open: openArticleId === item.id }">
              <button class="articulo-header" @click="toggleArticle(item.id)">
                <div class="articulo-title-wrap">
                  <h4>{{ item.title }}</h4>
                  <div class="articulo-meta">
                    <span class="articulo-author">{{ item.author }}</span>
                    <span class="articulo-credentials">{{ item.credentials }}</span>
                  </div>
                </div>
                <svg class="articulo-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div class="articulo-content" v-show="openArticleId === item.id">
                <p class="articulo-preview">{{ item.preview }}</p>
                <div class="articulo-full">
                  <p v-for="(paragraph, i) in item.content.split('\n\n')" :key="i">{{ paragraph }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Base de Conocimiento Tab -->
        <div v-if="activeTab === 'base'" class="tab-content">
          <div class="faq-intro">
            <h3>Base de Conocimiento</h3>
            <p>Preguntas frecuentes, buenas prácticas y documentación técnica para resolver tus dudas.</p>
          </div>
          <div class="faq-grid">
            <div v-for="faq in faqItems" :key="faq.id" class="faq-card">
              <h4>{{ faq.question }}</h4>
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <!-- Comunidad Tab (Próximamente) -->
        <div v-if="activeTab === 'comunidad'" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3>Comunidad de Profesionales</h3>
            <p>Foros de discusión, intercambio de experiencias y espacios de colaboración entre profesionales.</p>
            <span class="coming-badge">Próximamente</span>
          </div>
        </div>

        <!-- Academia Tab (Próximamente) -->
        <div v-if="activeTab === 'academia'" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
            <h3>Academia</h3>
            <p>Programas de formación por niveles, evaluaciones y seguimiento de tu progreso de aprendizaje.</p>
            <span class="coming-badge">Próximamente</span>
          </div>
        </div>

        <!-- Cursos Tab (Próximamente) -->
        <div v-if="activeTab === 'cursos'" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/></svg></div>
            <h3>Cursos y Capacitación</h3>
            <p>Cursos en línea, rutas de aprendizaje, certificaciones y cápsulas de microlearning.</p>
            <span class="coming-badge">Próximamente</span>
          </div>
        </div>

        <!-- Webinars Tab (Próximamente) -->
        <div v-if="activeTab === 'webinars'" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></div>
            <h3>Webinars y Eventos</h3>
            <p>Próximos webinars, grabaciones de sesiones anteriores, calendario de actividades y registro.</p>
            <span class="coming-badge">Próximamente</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-knowledge">
      <div class="container">
        <div class="cta-inner">
          <h2>¿No encontraste lo que buscabas?</h2>
          <p>Contactá a nuestro equipo para resolver tus dudas o solicitar información específica.</p>
          <router-link to="/contacto" class="btn btn-gold btn-lg">Contactanos</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import info01 from '/images/optimized/info01.webp'
import infor02 from '/images/optimized/infor02.webp'

const activeTab = ref('articulos')
const openArticleId = ref(null)
const lightboxImage = ref(null)

const toggleArticle = (id) => {
  openArticleId.value = openArticleId.value === id ? null : id
}

const openLightbox = (img) => {
  lightboxImage.value = img
}

const closeLightbox = () => {
  lightboxImage.value = null
}

const tabs = [
  { id: 'biblioteca', label: 'Biblioteca', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' },
  { id: 'infografias', label: 'Infografías', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' },
  { id: 'articulos', label: 'Artículos', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' },
  { id: 'base', label: 'Base de Conocimiento', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' },
  { id: 'comunidad', label: 'Comunidad', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { id: 'academia', label: 'Academia', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>' },
  { id: 'cursos', label: 'Cursos', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/></svg>' },
  { id: 'webinars', label: 'Webinars', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>' },
]

const featuredItems = [
  {
    id: 1,
    type: 'article',
    typeLabel: 'Artículo',
    title: 'Comprensión del Trastorno por Uso de Sustancias',
    description: 'Fundamentos actualizados sobre la comprensión integral de las adicciones desde enfoques biopsicosociales.',
    date: 'Mayo 2026',
    tag: 'TAP 21'
  },
  {
    id: 2,
    type: 'guide',
    typeLabel: 'Guía',
    title: 'Manual de Funciones del Operador Socioterapéutico',
    description: 'Descripción detallada de las funciones, competencias y alcances del perfil OST en comunidades terapéuticas.',
    date: 'Mayo 2026',
    tag: 'OST'
  },
  {
    id: 3,
    type: 'case',
    typeLabel: 'Caso de Éxito',
    title: 'Experiencias de Implementación en América Latina',
    description: 'Casos reales de aplicación de estándares internacionales en contextos diversos de la región.',
    date: 'Abril 2026',
    tag: 'Regional'
  }
]

const libraryItems = [
  {
    id: 1,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    title: 'Guías y Manuales',
    description: 'Documentos técnicos, protocolos y lineamentos para la práctica profesional.',
    count: 12
  },
  {
    id: 2,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    title: 'E-books y Documentos',
    description: 'Publicaciones digitales sobre competencias, estándares y mejores prácticas.',
    count: 8
  },
  {
    id: 3,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    title: 'Infografías',
    description: 'Representaciones visuales de procesos, niveles y competencias.',
    count: 15
  },
  {
    id: 4,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    title: 'Casos de Éxito',
    description: 'Experiencias reales de implementación y resultados obtenidos.',
    count: 6
  },
  {
    id: 5,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
    title: 'Artículos Especializados',
    description: 'Publicaciones académicas y técnicas sobre adicciones y recuperación.',
    count: 24
  },
  {
    id: 6,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
    title: 'Entrevistas y Revistas',
    description: 'Contenido audiovisual y publicaciones periódicas del consorcio.',
    count: 10
  }
]

const faqItems = [
  {
    id: 1,
    question: '¿Qué es ASCAD LATAM?',
    answer: 'ASCAD LATAM es el Consorcio Latinoamericano de Certificación en Adicciones, una organización que establece estándares internacionales para la formación y certificación de profesionales en el campo de las adicciones en toda América Latina.'
  },
  {
    id: 2,
    question: '¿Cuáles son los niveles de certificación?',
    answer: 'Existen 6 niveles: OST (Operador Socioterapéutico), ER (Entrenador de Recuperación), CCAAD I, CCAAD II, CCAAD III y CCAAD IV (Supervisor Profesional). Cada nivel tiene requisitos específicos de formación y experiencia.'
  },
  {
    id: 3,
    question: '¿Las certificaciones son reconocidas internacionalmente?',
    answer: 'Sí, las certificaciones están basadas en estándares internacionales como TAP 21, TIP 64 y TIP 52 de SAMHSA (Substance Abuse and Mental Health Services Administration) de Estados Unidos.'
  },
  {
    id: 4,
    question: '¿Cuánto tiempo es válida la certificación?',
    answer: 'La certificación ASCAD LATAM tiene validez de 2 años (bianual). Para renovar es necesario acumular horas de educación continua específicas por nivel y presentar la documentación de renovación.'
  },
  {
    id: 5,
    question: '¿Puedo trabajar en cualquier país de América Latina?',
    answer: 'La certificación ASCAD LATAM está reconocida en los países miembros del Consorcio. Cada país puede tener requisitos adicionales de validación local.'
  },
  {
    id: 6,
    question: '¿Qué requisitos necesito para certificarme?',
    answer: 'Los requisitos varían según el nivel. En general incluyen: formación académica mínima, horas de experiencia supervisada, horas de formación específica, avales profesionales, examen de certificación y firma del código de ética.'
  }
]

const infografiasItems = [
  {
    id: 1,
    title: 'Equipo de Recuperación',
    description: 'Conoce la composición y roles del equipo multidisciplinario que acompaña el proceso de recuperación.',
    image: info01
  },
  {
    id: 2,
    title: 'Etapas de Afrontamiento',
    description: 'Las fases del proceso de recuperación desde la intervención inicial hasta la integración social.',
    image: infor02
  }
]

const articulosItems = [
  {
    id: 1,
    title: 'Desarrollando un Entorno de Cambio para el Especialista en Apoyo de Recuperación entre Pares',
    author: 'Cynthia Moreno Tuohy',
    credentials: 'NCAC II, CDC III, SAP, Directora Ejecutiva de NAADAC',
    preview: 'La profesión de las adicciones se encuentra en un punto de quiebre. Actualmente, en Estados Unidos hay más personas que necesitan servicios de prevención, tratamiento y apoyo para la recuperación de las adicciones que profesionales disponibles para atender esas necesidades.',
    content: `La profesión de las adicciones se encuentra en un punto de quiebre. Actualmente, en Estados Unidos hay más personas que necesitan servicios de prevención, tratamiento y apoyo para la recuperación de las adicciones que profesionales disponibles para atender esas necesidades. Esta escasez de personal especializado es grave y continuará aumentando en los próximos años.

Según el Departamento de Trabajo de los Estados Unidos, la necesidad de profesionales de las adicciones crecerá un 20% para el año 2026. Este aumento responde tanto a factores negativos, como la epidemia de opioides, como a factores positivos, entre ellos: mayor concienciación pública sobre las adicciones, mayor acceso a los servicios gracias a la Ley de Paridad y la Ley de Cuidado de Salud Asequible, e incremento del financiamiento mediante leyes como la 21st Century Cures Act y la Comprehensive Addiction and Recovery Act.

El papel de los Especialistas en Apoyo de Recuperación entre Pares (PRSS) es fundamental para enfrentar esta escasez. La Comisión Nacional de Certificación para Profesionales de las Adicciones (NCC AP) trabaja en establecer estándares nacionales mediante la credencial de Especialista Nacional Certificado en Apoyo de Recuperación entre Pares (NCPRSS) y consolidar esta figura como parte fundamental de la trayectoria profesional nacional.

Los servicios que puede ofrecer un PRSS certificado incluyen: brindar apoyo individual para navegar sistemas de salud y grupos de apoyo mutuo, facilitar la incorporación de personas a grupos de apoyo, y conectar a los usuarios con recursos comunitarios relacionados con educación, empleo, vivienda, ropa, alimentación, transporte, cuidado infantil y redes de apoyo para egresados y recuperación.

La credencial NCPRSS es valorada por organizaciones como Optum porque: es una certificación nacional con criterios uniformes, existe un expediente nacional de credenciales administrado por NCC AP y NAADAC, hay un Código Nacional de Ética específico, y los titulares pueden obtener seguros de responsabilidad profesional.

Entre el trabajo pendiente se encuentran: fortalecer el reconocimiento nacional, ampliar los sistemas de reembolso, mejorar los sistemas de facturación, expandir el acceso a los servicios en agencias de salud mental, hospitales, salas de emergencia y centros comunitarios, e impulsar la investigación sobre la efectividad de los especialistas PRSS.

La meta es construir un sistema nacional de Especialistas en Apoyo de Recuperación entre Pares que sea integral, estandarizado, calificado y reconocido profesionalmente, contribuyendo al bienestar y la salud de individuos, familias y comunidades.`
  },
  {
    id: 2,
    title: 'Apoyo entre Pares Basado en la Diversidad Cultural',
    author: 'Gonzalo Esquivel',
    credentials: 'CCAD III, IV',
    preview: 'Los trabajadores de apoyo entre pares son personas que han tenido éxito en su propio proceso de recuperación y que ayudan a otras personas durante el suyo.',
    content: `Los trabajadores de apoyo entre pares son personas que han tenido éxito en su propio proceso de recuperación y que ayudan a otras personas durante el suyo. A través de la comprensión compartida, el respeto y el empoderamiento comunitario, estos trabajadores ayudan a que las personas permanezcan activas en su recuperación. El apoyo entre pares también puede reducir la probabilidad de recaída en quienes se encuentran en recuperación.

La sensibilidad cultural es la capacidad de aprender de las personas y relacionarse respetuosamente tanto con individuos de la propia cultura como de otras culturas. En el contexto de la recuperación, implica brindar servicios que incorporen y respeten las creencias culturales de cada persona.

Los trabajadores de apoyo entre pares realizan una amplia variedad de actividades: defender los intereses de las personas en recuperación, compartir recursos y habilidades para la vida, ayudar a construir comunidad y relaciones saludables, dirigir grupos de recuperación, orientar y acompañar a personas en recuperación, capacitar a otros trabajadores pares, supervisar programas y agencias de recuperación, y educar a responsables políticos sobre las necesidades de sus pares.

Los trabajadores de apoyo entre pares deben desarrollar competencias culturales adicionales para brindar servicios imparciales a grupos específicos que comparten experiencias de recuperación, como diversas minorías. El sesgo implícito opera de manera interna pero puede manifestarse externamente en la prestación de servicios, influyendo en la toma de decisiones, la distribución de recursos, el acceso a apoyos comunitarios, la construcción de relaciones y la dirección de grupos de recuperación.

Para reducir la discriminación y el estrés ambiental, los trabajadores deben: evitar proyectar percepciones propias y preguntar directamente cómo desea ser llamada la persona, garantizar acceso equitativo a recursos sin menospreciar los deseos de ninguna persona, procurar apoyo organizacional para que los trabajadores pares tengan acceso equitativo a recursos y financiamiento, asumir buenas intenciones al trabajar con otros profesionales, expresar preocupaciones de manera abierta cuando algo genere malestar, y evitar suposiciones culturales basadas en información insuficiente.

Los valores culturales aprendidos influyen de manera inconsciente y pueden generar sesgos implícitos que reducen la efectividad de los apoyos de recuperación e incluso causar daño. Las prácticas culturalmente sensibles deben incorporarse de manera activa en el trabajo cotidiano de apoyo a la recuperación.`
  },
  {
    id: 3,
    title: 'Entrenadores de Recuperación: Una Profesión Emergente',
    author: 'James "Kansas" Cafferty',
    credentials: 'LMFT, MAC, NCAAC, Presidente de NCC AP',
    preview: 'En nuestro campo, que evoluciona constantemente, siempre hay algo nuevo que aprender. He tenido reacciones parecidas frente a un nuevo sector de nuestra profesión: el coaching de recuperación.',
    content: `En nuestro campo, que evoluciona constantemente, siempre hay algo nuevo que aprender. Cuando comencé mi carrera, trabajaba con adolescentes y recuerdo que un consejero experimentado decía: "La consejería para adolescentes es fácil; solo hay que seguir las tres C: controlar, confrontar y aplicar consecuencias." Sin embargo, eso ocurrió antes de que las investigaciones sobre la entrevista motivacional transformaran nuestra comprensión del tratamiento.

He tenido reacciones parecidas frente a un nuevo sector de nuestra profesión: el coaching de recuperación. Actualmente, el coaching de recuperación está ganando gran popularidad, especialmente en el sector privado. Mi reacción inicial fue de resistencia, principalmente porque era algo nuevo y no lo comprendía completamente.

El problema de la falta de regulación me llevaba a rechazar la idea de que una persona con un trastorno por consumo de sustancias pudiera ser tratada sin confrontarla directamente. Comencé a recibir correos electrónicos promocionando capacitaciones para coaches de recuperación que ofrecían "certificaciones" sin contar con autoridad reguladora para emitirlas. Al final del día, todo lo que se necesita para ser un coach de recuperación independiente es un montón de tarjetas de presentación.

Para comprender esta preocupación, NCC AP actualizó sus principales exámenes de certificación: National Certified Addiction Counselor Level I, National Certified Addiction Counselor Level II, Master Addiction Counselor (MAC), y desarrolló la certificación para Especialistas Nacionales en Apoyo de Recuperación entre Pares (NCPRSS).

Un proceso basado en evidencia implica: analizar científicamente las tareas y competencias necesarias para ejercer, elaborar un "plano profesional" o blueprint, diseñar preguntas de examen alineadas con dicho plano, revisarlas con expertos y psicometristas, y realizar pruebas piloto para identificar preguntas problemáticas.

El objetivo principal de NCC AP es proteger al público contra posibles daños. Los organismos certificadores actúan como una escudo que protege a las personas vulnerables que buscan ayuda. Quienes han demostrado competencia profesional son fácilmente identificables porque poseen credenciales reconocidas que respaldan sus conocimientos y habilidades.

El coaching de recuperación ha llegado para quedarse. Sin embargo, en el campo de las adicciones se trata literalmente de cuestiones de vida o muerte. NCC AP ofrece colaborar con la industria del coaching de recuperación para ayudarla a desarrollar sistemas de acreditación, mecanismos de protección pública, estándares profesionales, reconocimiento legislativo y credibilidad ante financiadores y aseguradoras.

La reflexión final es buscar una forma de llevar el coaching de recuperación independiente desde un concepto prometedor hasta una verdadera profesión.`
  }
]
</script>

<style scoped>
/* Featured Section */
.featured-section { background: var(--white); }
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.featured-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 32px;
  transition: all .3s ease;
}
.featured-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}
.featured-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  margin-bottom: 16px;
}
.badge-article { background: rgba(21, 101, 192, 0.1); color: #1565c0; }
.badge-guide { background: rgba(46, 125, 50, 0.1); color: #2e7d32; }
.badge-case { background: rgba(201, 168, 76, 0.15); color: var(--accent-dark); }
.featured-card h3 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.3;
}
.featured-card p {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}
.featured-meta {
  display: flex;
  gap: 12px;
  align-items: center;
}
.meta-date { font-size: .75rem; color: var(--text-muted); }
.meta-tag {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 600;
  padding: 3px 8px;
  background: var(--accent-light);
  color: var(--accent-dark);
  border-radius: var(--radius-sm);
}

/* Tabs Section */
.tabs-section { background: var(--bg-light); }
.content-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--line-light);
  margin-bottom: 40px;
}
.tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: .875rem;
  font-weight: 500;
  padding: 12px 20px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--white);
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
.tab-icon { font-size: 1.125rem; }

.tab-content { animation: fadeIn .3s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.biblioteca-intro, .faq-intro {
  margin-bottom: 32px;
}
.biblioteca-intro h3, .faq-intro h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 8px;
}
.biblioteca-intro p, .faq-intro p {
  font-size: 1rem;
  color: var(--text-muted);
}

.library-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.library-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 28px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: all .3s ease;
}
.library-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-light);
}
.library-icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-light);
  border-radius: var(--radius-lg);
  color: var(--accent-dark);
}
.library-content h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 6px;
}
.library-content p {
  font-size: .8125rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 10px;
}
.library-count {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 600;
  color: var(--accent-dark);
  background: var(--accent-light);
  padding: 3px 10px;
  border-radius: var(--radius-sm);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.faq-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all .3s ease;
}
.faq-card:hover {
  border-color: var(--accent-light);
}
.faq-card h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 10px;
}
.faq-card p {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Coming Soon */
.coming-soon { padding: 60px 0; }
.coming-soon-inner {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}
.coming-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-light);
  border-radius: var(--radius-xl);
}
.coming-icon svg {
  width: 40px;
  height: 40px;
  stroke: var(--accent-dark);
}
.coming-soon-inner h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 12px;
}
.coming-soon-inner p {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}
.coming-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent-dark);
  background: var(--accent-light);
  border: 1px solid rgba(201,168,76,0.3);
  padding: 6px 16px;
  border-radius: 999px;
}

/* Infografías */
.infografias-intro, .articulos-intro {
  margin-bottom: 32px;
}
.infografias-intro h3, .articulos-intro h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 8px;
}
.infografias-intro p, .articulos-intro p {
  font-size: 1rem;
  color: var(--text-muted);
}
.infografias-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.infografia-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  cursor: pointer;
  transition: all .3s ease;
}
.infografia-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}
.infografia-preview {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}
.infografia-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .3s ease;
}
.infografia-card:hover .infografia-preview img {
  transform: scale(1.05);
}
.infografia-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,37,64,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity .3s ease;
}
.infografia-overlay svg {
  color: var(--white);
}
.infografia-card:hover .infografia-overlay {
  opacity: 1;
}
.infografia-info {
  padding: 24px;
}
.infografia-info h4 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--text);
  margin-bottom: 8px;
}
.infografia-info p {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  animation: fadeIn .2s ease;
}
.lightbox img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
}
.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  transition: background .2s ease;
}
.lightbox-close:hover {
  background: rgba(255,255,255,0.2);
}

/* Artículos */
.articulos-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.articulo-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all .3s ease;
}
.articulo-card:hover {
  border-color: var(--accent-light);
}
.articulo-card.open {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}
.articulo-header {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 28px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}
.articulo-title-wrap {
  flex: 1;
}
.articulo-header h4 {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.4;
}
.articulo-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.articulo-author {
  font-size: .8125rem;
  font-weight: 600;
  color: var(--primary);
}
.articulo-credentials {
  font-size: .75rem;
  color: var(--text-muted);
  padding-left: 8px;
  border-left: 1px solid var(--line);
}
.articulo-arrow {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform .3s ease;
}
.articulo-card.open .articulo-arrow {
  transform: rotate(180deg);
}
.articulo-content {
  padding: 0 28px 28px;
  border-top: 1px solid var(--line-light);
}
.articulo-preview {
  font-size: .9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-top: 20px;
  padding-bottom: 16px;
  border-bottom: 1px dashed var(--line);
}
.articulo-full {
  margin-top: 20px;
}
.articulo-full p {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 16px;
}
.articulo-full p:last-child {
  margin-bottom: 0;
}

/* CTA */
.cta-knowledge {
  background: var(--primary);
  padding: 80px 0;
}
.cta-inner { text-align: center; }
.cta-inner h2 { color: var(--white); margin-bottom: 12px; font-size: 2rem; }
.cta-inner p { color: rgba(255,255,255,0.8); margin-bottom: 28px; font-size: 1.0625rem; }

@media (max-width: 1024px) {
  .featured-grid { grid-template-columns: repeat(2, 1fr); }
  .library-grid { grid-template-columns: repeat(2, 1fr); }
  .infografias-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .featured-grid { grid-template-columns: 1fr; }
  .library-grid { grid-template-columns: 1fr; }
  .faq-grid { grid-template-columns: 1fr; }
  .infografias-grid { grid-template-columns: 1fr; }
  .content-tabs { gap: 6px; }
  .tab-btn { padding: 10px 14px; font-size: .8125rem; }
  .articulo-header { padding: 20px; }
  .articulo-content { padding: 0 20px 20px; }
}
@media (max-width: 480px) {
  .library-card { flex-direction: column; }
  .tab-btn .tab-icon { display: none; }
  .infografias-grid { gap: 20px; }
  .lightbox { padding: 20px; }
}
</style>