import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

// ✅ METADATA optimizada para Project Management ERP/CRM
export const metadata: Metadata = {
  title: 'Project Management ERP/CRM | Consultoría Independiente Guatemala',
  description: 'Consultoría independiente especializada en Project Management ERP/CRM. Implementación Odoo, SAP, NetSuite en Guatemala y Panamá. +25 años transformando empresas en Centroamérica.',
  
  keywords: [
    'Project Management ERP/CRM',
    'consultoría independiente Centroamérica',
    'implementación Odoo Guatemala',
    'SAP NetSuite Panamá',
    'consultoría ERP CRM Guatemala',
    'transformación digital Centroamérica',
    'metodologías Agile SCRUM',
    'Project Management empresas Panamá'
  ],
  
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: 'https://lucy-consulting-evdq.vercel.app/servicios/project-management-erp-crm',
  },
  
  openGraph: {
    title: 'Project Management ERP/CRM | Consultoría Independiente Centroamérica',
    description: 'Project Manager externo especializado en implementación Odoo, SAP, NetSuite. Gestión del cambio y coordinación stakeholders en Guatemala y Panamá.',
    url: 'https://lucy-consulting-evdq.vercel.app/servicios/project-management-erp-crm',
    type: 'website',
    images: [
      {
        url: 'https://lucy-consulting-evdq.vercel.app/images/project-management-erp-crm-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Project Management ERP/CRM consultoría independiente Guatemala Panamá Centroamérica'
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Project Management ERP/CRM | Consultoría Independiente Guatemala',
    description: 'Consultoría independiente en implementación Odoo, SAP, NetSuite. Gestión del cambio y control calidad en Guatemala y Panamá.',
  },
}

export default function ProjectManagementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101D2B] text-white font-sans">
      {/* MAIN wrapper semántico */}
      <main>
        
        {/* ✅ SECCIÓN 1: HERO - COMPLETADA */}
        <section className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-crm.jpeg"
              alt="Project Management ERP/CRM independiente Odoo SAP NetSuite metodologías Agile SCRUM Guatemala Panamá Centroamérica"
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2A]/60 via-[#0F1C2A]/50 to-[#0F1C2A]/70"></div>
          </div>

          <div className="relative z-10 max-w-6xl px-6">
            {/* H1 optimizado para PM ERP/CRM */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#3574E3] block mb-2">
                Project Management ERP/CRM
              </span>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl block mb-2">
                Consultoría Independiente Especializada
              </span>
              <span className="text-[#60A5FA] text-xl md:text-3xl lg:text-4xl block">
                Odoo, SAP, NetSuite - Guatemala y Panamá
              </span>
            </h1>
            
            {/* Párrafo optimizado específico para PM */}
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Lideramos implementaciones exitosas de <strong>sistemas ERP/CRM</strong> usando metodologías 
              <strong> Agile, SCRUM y Waterfall</strong>. Gestión del cambio, coordinación de stakeholders 
              y control de calidad para empresas en <strong>Guatemala, Panamá y Centroamérica</strong>.
            </p>
            
            {/* CTAs Hero específicos para PM */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/mocawebpty/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white text-lg shadow-lg hover:scale-105 transition duration-200 min-h-[44px] min-w-[44px]"
                aria-label="Agendar consultoría Project Management ERP/CRM Guatemala Panamá"
                data-gtm-event="pm_hero_calendly_click"
                data-gtm-value="consultoria_pm_gratuita"
              >
                📅 Agenda cita exploratoria gratuita (30min)
              </a>
            
            </div>
          </div>
        </section>
{/* ✅ SECCIÓN 2: ¿QUÉ INCLUYE NUESTRO SERVICIO? - COMPLETADA */}
<section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F1C2A] relative">
        ¿Qué incluye nuestro Project Management ERP/CRM en Latinoamérica?
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
        Servicios especializados de <strong className="text-[#3574E3]">consultoría independiente</strong> para 
        <strong className="text-[#0F1C2A]"> implementaciones exitosas</strong> de sistemas empresariales
      </p>
    </header>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      
      {/* Servicio 1: Gestión Estratégica */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">📋</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Gestión Estratégica del Proyecto ERP
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Definimos <strong>alcance funcional y técnico</strong> junto a líderes del negocio para <strong>implementaciones ERP CRM</strong> en <strong>empresas de Guatemala y Panamá</strong>. <strong>Planificación detallada por fases</strong>: análisis, diseño, configuración, pruebas, capacitación y puesta en marcha para <strong>Odoo, SAP y NetSuite</strong>. <strong>Project Management especializado</strong> garantizando <strong>transformación digital</strong> exitosa.
        </p>
      </article>

      {/* Servicio 2: Coordinación Stakeholders */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🤝</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Coordinación de Stakeholders
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Actuamos como puente entre el <strong>equipo técnico implementador del ERP</strong>, áreas usuarias y alta dirección en <strong>organizaciones centroamericanas</strong>. Facilitamos <strong>toma de decisiones críticas</strong> enfocadas en prioridades estratégicas y retorno de inversión. <strong>Consultoría independiente</strong> para <strong>coordinación de proyectos ERP CRM</strong> efectiva.
        </p>
      </article>

      {/* Servicio 3: Gestión del Cambio */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🔄</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Gestión del Cambio Organizacional
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Identificamos <strong>impactos en procesos y roles</strong> durante <strong>implementación ERP CRM</strong>. Diseñamos e implementamos <strong>estrategias de comunicación, capacitación y adopción del sistema</strong> para <strong>empresas en Latinoamérica</strong>. <strong>Gestión del cambio</strong> especializada garantizando adopción exitosa de <strong>sistemas empresariales</strong>.
        </p>
      </article>

      {/* Servicio 4: Gestión de Riesgos */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🛡️</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Gestión de Riesgos y Control de Calidad
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          <strong>Monitoreo continuo de riesgos</strong> funcionales, técnicos y de resistencia al cambio en <strong>proyectos ERP/CRM</strong>. <strong>Control de entregables, pruebas de usuario (UAT) y validación de datos</strong> para garantizar <strong>implementaciones robustas</strong> de <strong>Odoo, SAP y NetSuite</strong> en <strong>Centroamérica</strong>.
        </p>
      </article>

      {/* Servicio 5: Supervisión Proveedor */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">👁️</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Supervisión del Proveedor ERP
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Garantizamos <strong>cumplimiento de cronogramas, hitos y niveles de servicio</strong> contratados con proveedores. Evaluamos desempeño y gestionamos escalaciones cuando es necesario. <strong>Project Management independiente</strong> supervisando <strong>implementación ERP CRM</strong> en <strong>empresas guatemaltecas y panameñas</strong>.
        </p>
      </article>

      {/* Servicio 6: Reporting Ejecutivo */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">📊</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Reporting Ejecutivo
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          <strong>Informes claros orientados a toma de decisiones</strong> sobre avances, riesgos, desvíos y recomendaciones en <strong>proyectos ERP/CRM</strong>. <strong>Paneles de control</strong> especializados para dirección general y comités ejecutivos de <strong>organizaciones en Latinoamérica</strong>. <strong>Consultoría independiente</strong> con transparencia total.
        </p>
      </article>

      {/* Servicio 7: Cierre y Mejora Continua */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🎯</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Cierre y Mejora Continua
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          <strong>Acompañamiento durante arranque en vivo (go-live) y estabilización posterior</strong> de <strong>sistemas empresariales</strong>. <strong>Documentación de lecciones aprendidas</strong> y elaboración de <strong>plan de mejoras evolutivas</strong>. <strong>Project Management ERP CRM</strong> completo hasta adopción exitosa en <strong>Centroamérica</strong>.
        </p>
      </article>

    </div>
  </div>
</section>
{/* ✅ SECCIÓN 4: CASOS DE ÉXITO - COMPLETADA */}
<section id="casos-exito" className="py-20 bg-gradient-to-br from-[#0F1C2A] via-[#1a2332] to-[#0F1C2A] text-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative">
        Casos de Éxito en Project Management ERP/CRM - Latinoamérica
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
        Resultados reales de <strong className="text-white">consultoría independiente</strong> en 
        <strong className="text-white"> Guatemala y Panamá</strong>
      </p>
    </header>

    <div className="grid lg:grid-cols-2 gap-12">
      
      {/* Caso 1: Guatemala - Odoo ERP */}
      <article className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 hover:border-[#3574E3]/50 transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mr-4">
            <span className="text-white text-2xl font-bold">🏢</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Empresa Distribuidora - Guatemala</h3>
            <p className="text-[#60A5FA] font-semibold">Project Management para implementación Odoo ERP - 6 meses</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Situación:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Empresa guatemalteca</strong> del sector distribución ya había contratado <strong className="text-white">implementación Odoo ERP</strong> con consultora local, pero el <strong className="text-white">proyecto ERP/CRM</strong> estaba retrasado 3 meses. Sin <strong className="text-white">coordinación de stakeholders</strong> efectiva, resistencia al cambio y falta de <strong className="text-white">gestión de riesgos</strong> en la <strong className="text-white">transformación digital</strong>.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Nuestro rol:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Project Manager externo independiente</strong> especializado en <strong className="text-white">sistemas empresariales</strong>. Coordinamos implementador, usuarios finales y dirección ejecutiva. <strong className="text-white">Gestión del cambio organizacional</strong>, <strong className="text-white">control de calidad implementaciones</strong> y supervisión de cronogramas para <strong className="text-white">empresas en Guatemala</strong>.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#3574E3] mb-3">Resultados:</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Proyecto rescatado y entregado on-time</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>95% adopción usuarios (vs 40% inicial)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Reducción 60% en escalaciones</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Ahorro $35,000 USD en sobrecostos</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* Caso 2: Panamá - NetSuite CRM */}
      <article className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 hover:border-[#3574E3]/50 transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mr-4">
            <span className="text-white text-2xl font-bold">🏦</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Empresa Servicios Financieros - Panamá</h3>
            <p className="text-[#60A5FA] font-semibold">Project Management para implementación NetSuite CRM - 8 meses</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Situación:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Empresa panameña</strong> de servicios financieros había adquirido <strong className="text-white">NetSuite CRM</strong> con implementador regional, pero faltaba <strong className="text-white">coordinación ejecutiva</strong> y <strong className="text-white">gestión de riesgos</strong> efectiva. Múltiples retrasos en <strong className="text-white">automatización de procesos</strong> y usuarios confundidos sobre <strong className="text-white">sistemas empresariales</strong>.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Nuestro rol:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Project Manager independiente</strong> supervisando implementador <strong className="text-white">NetSuite</strong>, facilitando <strong className="text-white">toma de decisiones críticas</strong> ejecutivas y gestionando comunicación entre 5 departamentos. <strong className="text-white">Asesoría tecnológica</strong> neutral para <strong className="text-white">empresas en Panamá</strong> durante <strong className="text-white">transformación digital</strong>.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#3574E3] mb-3">Resultados:</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Implementación exitosa on-time</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>85% cumplimiento objetivos (vs 45% proyectado)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Mejora 300% en comunicación stakeholders</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>ROI alcanzado 6 meses antes de lo esperado</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
{/* ✅ SECCIÓN 5: FAQ - COMPLETADA */}
<section id="faq" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="max-w-4xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F1C2A] relative">
        Preguntas Frecuentes sobre Project Management ERP/CRM en Latinoamérica
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
        Resolvemos las dudas más comunes sobre <strong className="text-[#3574E3]">consultoría independiente</strong> en 
        <strong className="text-[#0F1C2A]"> implementaciones ERP/CRM</strong>
      </p>
    </header>

    <div className="space-y-4">
      
      {/* Pregunta 1 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Qué incluye el servicio de Project Management ERP/CRM independiente?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Nuestro <strong className="text-[#0F1C2A]">Project Management especializado</strong> incluye <strong className="text-[#0F1C2A]">gestión estratégica del proyecto</strong>, <strong className="text-[#0F1C2A]">coordinación de stakeholders</strong>, <strong className="text-[#0F1C2A]">gestión del cambio organizacional</strong> y <strong className="text-[#0F1C2A]">control de calidad implementaciones</strong>. Supervisamos <strong className="text-[#0F1C2A]">implementaciones Odoo, SAP, NetSuite y Microsoft Dynamics</strong> para <strong className="text-[#0F1C2A]">empresas en Guatemala, Panamá y Centroamérica</strong> garantizando entregas exitosas sin conflictos de interés.
        </div>
      </details>

      {/* Pregunta 2 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Cuánto tiempo toma un proyecto de implementación ERP/CRM con Project Manager externo?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Los <strong className="text-[#0F1C2A]">proyectos ERP/CRM</strong> con <strong className="text-[#0F1C2A]">consultoría independiente</strong> varían entre 4-12 meses dependiendo de complejidad y tamaño de la <strong className="text-[#0F1C2A]">empresa guatemalteca o panameña</strong>. Usamos <strong className="text-[#0F1C2A]">metodologías Agile y SCRUM</strong> para entregas incrementales y <strong className="text-[#0F1C2A]">gestión de riesgos</strong> efectiva en <strong className="text-[#0F1C2A]">transformación digital</strong> de <strong className="text-[#0F1C2A]">organizaciones centroamericanas</strong>.
        </div>
      </details>

      {/* Pregunta 3 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Por qué elegir Project Manager independiente vs interno para implementación ERP CRM?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Un <strong className="text-[#0F1C2A]">Project Manager externo independiente</strong> ofrece neutralidad 100%, experiencia especializada en <strong className="text-[#0F1C2A]">sistemas empresariales</strong> y <strong className="text-[#0F1C2A]">asesoría tecnológica</strong> sin conflictos comerciales. Las <strong className="text-[#0F1C2A]">empresas en Latinoamérica</strong> obtienen mejor <strong className="text-[#0F1C2A]">control de calidad</strong>, <strong className="text-[#0F1C2A]">coordinación de stakeholders</strong> efectiva y reducción promedio del 30% en sobrecostos de <strong className="text-[#0F1C2A]">digitalización empresarial</strong>.
        </div>
      </details>

      {/* Pregunta 4 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Supervisan al proveedor de ERP/CRM durante la implementación?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Sí, parte clave de nuestro <strong className="text-[#0F1C2A]">Project Management ERP CRM</strong> es supervisar proveedores y consultoras implementadoras. Garantizamos cumplimiento de cronogramas, hitos y niveles de servicio contratados. Evaluamos desempeño y gestionamos escalaciones para <strong className="text-[#0F1C2A]">implementación ERP CRM</strong> exitosa en <strong className="text-[#0F1C2A]">empresas guatemaltecas y panameñas</strong>.
        </div>
      </details>

      {/* Pregunta 5 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Qué metodologías usan en Project Management para sistemas empresariales?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Aplicamos <strong className="text-[#0F1C2A]">metodologías Agile, SCRUM y Waterfall</strong> según necesidades del <strong className="text-[#0F1C2A]">proyecto ERP/CRM</strong>. Incluimos <strong className="text-[#0F1C2A]">gestión del cambio</strong> especializada, <strong className="text-[#0F1C2A]">automatización de procesos</strong>, <strong className="text-[#0F1C2A]">toma de decisiones críticas</strong> y <strong className="text-[#0F1C2A]">reporting ejecutivo</strong> para directivos de <strong className="text-[#0F1C2A]">organizaciones en Centroamérica</strong> durante <strong className="text-[#0F1C2A]">transformación digital</strong>.
        </div>
      </details>

    </div>
  </div>

  {/* Schema FAQPage para SEO/GEO */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué incluye el servicio de Project Management ERP/CRM independiente?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestro Project Management especializado incluye gestión estratégica del proyecto, coordinación de stakeholders, gestión del cambio organizacional y control de calidad implementaciones. Supervisamos implementaciones Odoo, SAP, NetSuite y Microsoft Dynamics para empresas en Guatemala, Panamá y Centroamérica garantizando entregas exitosas sin conflictos de interés."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo toma un proyecto de implementación ERP/CRM con Project Manager externo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los proyectos ERP/CRM con consultoría independiente varían entre 4-12 meses dependiendo de complejidad y tamaño de la empresa guatemalteca o panameña. Usamos metodologías Agile y SCRUM para entregas incrementales y gestión de riesgos efectiva en transformación digital de organizaciones centroamericanas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Por qué elegir Project Manager independiente vs interno para implementación ERP CRM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un Project Manager externo independiente ofrece neutralidad 100%, experiencia especializada en sistemas empresariales y asesoría tecnológica sin conflictos comerciales. Las empresas en Latinoamérica obtienen mejor control de calidad, coordinación de stakeholders efectiva y reducción promedio del 30% en sobrecostos de digitalización empresarial."
            }
          },
          {
            "@type": "Question",
            "name": "¿Supervisan al proveedor de ERP/CRM durante la implementación?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, parte clave de nuestro Project Management ERP CRM es supervisar proveedores y consultoras implementadoras. Garantizamos cumplimiento de cronogramas, hitos y niveles de servicio contratados. Evaluamos desempeño y gestionamos escalaciones para implementación ERP CRM exitosa en empresas guatemaltecas y panameñas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué metodologías usan en Project Management para sistemas empresariales?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aplicamos metodologías Agile, SCRUM y Waterfall según necesidades del proyecto ERP/CRM. Incluimos gestión del cambio especializada, automatización de procesos, toma de decisiones críticas y reporting ejecutivo para directivos de organizaciones en Centroamérica durante transformación digital."
            }
          }
        ]
      })
    }}
  />
</section>
       {/* ✅ SECCIÓN 6: CTA FINAL - COMPLETADA */}
<section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 text-gray-800">
  <div className="max-w-4xl mx-auto px-6 text-center">
    {/* H2 optimizado para conversión + SEO */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1C2A] relative">
      ¿Listo para optimizar tu implementación ERP/CRM con Project Management independiente?
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
    </h2>
    
    {/* Párrafo optimizado para conversión + keywords */}
    <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
      Agenda una <strong>consultoría gratuita</strong> y descubre cómo nuestro 
      <strong> Project Management ERP/CRM especializado</strong> puede garantizar el éxito de tu 
      <strong> implementación Odoo, SAP o NetSuite</strong> en <strong>Guatemala, Panamá o Latinoamérica</strong>.
    </p>

    {/* Datos de contacto con información para LLMs */}
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">WhatsApp</h3>
        <a 
          href="https://wa.me/50245172699?text=Hola%2C%20me%20interesa%20una%20consultor%C3%ADa%20sobre%20Project%20Management%20ERP%2FCRM" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-lg hover:text-[#3574E3] transition"
          aria-label="Contactar Lucy Consulting por WhatsApp para Project Management ERP/CRM"
          data-gtm-event="pm_contacto_whatsapp_click"
          data-gtm-value="whatsapp_pm_directo"
        >
          +502 4517 2699
        </a>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">Email</h3>
        <a 
          href="mailto:lucyconsultinggt@gmail.com?subject=Consultoría Project Management ERP/CRM" 
          className="text-sm hover:text-[#3574E3] transition break-words"
          aria-label="Enviar email a Lucy Consulting para Project Management ERP/CRM"
          data-gtm-event="pm_contacto_email_click"
          data-gtm-value="email_pm_directo"
        >
          lucyconsultinggt@gmail.com
        </a>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">Cobertura</h3>
        <p className="text-lg">Guatemala - Panamá</p>
        <p className="text-sm text-gray-600">Project Management en Latinoamérica</p>
      </div>
    </div>

    {/* CTAs principales con tracking optimizado */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="https://calendly.com/mocawebpty/30min"
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition min-h-[44px] justify-center items-center"
        aria-label="Agendar consultoría gratuita Project Management ERP/CRM"
        data-gtm-event="pm_cta_principal"
        data-gtm-value="consultoria_gratuita_pm"
      >
        📅 Agenda cita exploratoria gratuita (30min)
      </a>
      
      <a 
        href="https://www.linkedin.com/in/gladis-morales-1a891a35/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex border-2 border-[#0077B5] text-[#0077B5] px-6 py-3 rounded-full font-semibold hover:bg-[#0077B5] hover:text-white transition min-h-[44px] justify-center items-center"
        aria-label="Conectar con Gladis Morales en LinkedIn - Project Management ERP/CRM"
        data-gtm-event="pm_contacto_linkedin_click"
        data-gtm-value="linkedin_pm_gladis"
      >
        🔗 LinkedIn
      </a>
    </div>
  </div>

  {/* Schema LocalBusiness específico para Project Management */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://lucy-consulting-evdq.vercel.app/servicios/project-management-erp-crm#localbusiness",
        "name": "Lucy Consulting - Project Management ERP/CRM",
        "description": "Consultoría independiente especializada en Project Management para implementaciones ERP/CRM (Odoo, SAP, NetSuite) en empresas de Guatemala, Panamá y Latinoamérica.",
        "url": "https://lucy-consulting-evdq.vercel.app/servicios/project-management-erp-crm",
        "telephone": "+502-4517-2699",
        "email": "lucyconsultinggt@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": ["GT", "PA"],
          "addressRegion": ["Guatemala", "Panamá"],
          "addressLocality": "Guatemala, Panamá"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Guatemala"
          },
          {
            "@type": "Country",
            "name": "Panamá"
          },
          {
            "@type": "Place",
            "name": "Latinoamérica"
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "Gladis Morales",
          "jobTitle": "Project Manager ERP/CRM Senior"
        },
        "sameAs": [
          "https://www.linkedin.com/in/gladis-morales-1a891a35/"
        ],
        "serviceType": [
          "Project Management ERP/CRM",
          "Gestión de Implementaciones ERP", 
          "Coordinación de Stakeholders",
          "Gestión del Cambio Organizacional"
        ],
        "knowsAbout": [
          "Odoo ERP", "SAP ERP", "NetSuite ERP", "Microsoft Dynamics ERP",
          "Project Management", "Implementación ERP", "Gestión de Cambio"
        ]
      })
    }}
  />
</section>

      </main>
    </div>
  )
}