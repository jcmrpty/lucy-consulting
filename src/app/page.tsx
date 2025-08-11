import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101D2B] text-white font-sans">
      {/* MAIN wrapper semántico (Checklist GEO #6) */}
      <main>
       {/* HERO SECTION optimizado - Texto correcto según checklist */}
<section className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/images/hero-crm.jpeg"
      alt="Consultoría independiente Project Management ERP/CRM Odoo SAP NetSuite mapeo procesos Latinoamérica - Lucy Consulting Guatemala Panamá"
      fill
      className="object-cover opacity-40"
      priority
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2A]/60 via-[#0F1C2A]/50 to-[#0F1C2A]/70"></div>
  </div>

  <div className="relative z-10 max-w-6xl px-6">
    {/* H1 ÚNICO optimizado con los 3 servicios completos (Checklist #2) */}
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
      <span className="text-[#3574E3] block mb-2">
        Project Management ERP/CRM | Mapeo de Procesos
      </span>
      <span className="text-white text-2xl md:text-4xl lg:text-5xl block mb-2">
        Consultoría Independiente en Selección e Implementación
      </span>
      <span className="text-[#60A5FA] text-xl md:text-3xl lg:text-4xl block">
      </span>
    </h1>
    
   {/* Párrafo optimizado y conciso */}
<p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
  Especialistas en <strong>project management ERP/CRM</strong> y <strong>mapeo de procesos</strong>. 
  Metodologías <strong>Agile y SCRUM</strong> con +25 años de experiencia.
</p>
    {/* CTAs Hero con tracking GA4/GTM (Checklist #9) */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="https://calendly.com/mocawebpty/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white text-lg shadow-lg hover:scale-105 transition duration-200 min-h-[44px] min-w-[44px]"
        aria-label="Contactar por WhatsApp para consultoría Project Management ERP/CRM en Latinoamérica"
        data-gtm-event="hero_whatsapp_click"
        data-gtm-value="consultoria_gratuita"
      >
        💬 Agenda cita exploratoria gratuita (30min)

      </a>
      
    </div>
  </div>
</section>      
{/* QUIÉNES SOMOS - Optimizado con keywords y checklist SEO/GEO */}
<section id="quienes-somos" className="relative w-full py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F1C2A] relative">
  Consultoría Project Management ERP/CRM
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      
      {/* Contenido optimizado para LLMs y SEO (Checklist GEO #1) */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 max-w-5xl mx-auto">
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <strong className="text-[#3574E3]">Lucy Consulting</strong> es una consultoría independiente 
          especializada en <strong className="text-[#0F1C2A]">Project Management ERP/CRM</strong>, 
          <strong className="text-[#0F1C2A]"> mapeo de procesos</strong> y 
          <strong className="text-[#0F1C2A]"> asesoramiento en selección de sistemas</strong> para 
          empresas medianas y grandes en Latinoamérica.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed">
          Lideramos proyectos tecnológicos, optimizamos flujos de trabajo empresariales y brindamos 
          recomendaciones neutrales sin conflictos de interés. Con sede principal en 
          <strong className="text-[#3574E3]"> Guatemala</strong> y presencia en 
          <strong className="text-[#3574E3]"> Panamá</strong>, acompañamos a organizaciones en toda la región.
        </p>
        
      </div>
    </header>
  </div>
</section>
 {/* DIRECTORA GENERAL - Optimizado SEO/GEO */}
<section className="relative w-full py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-[#3574E3]/5 to-transparent rounded-full blur-2xl"></div>
  <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-[#60A5FA]/5 to-transparent rounded-full blur-2xl"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Imagen con efectos */}
      <div className="order-2 lg:order-1">
        <div className="relative">
          {/* Efecto de fondo detrás de la imagen */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#3574E3]/20 to-[#60A5FA]/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
            <Image
              src="/images/foto-lucy.jpg"
              alt="Gladis Morales Directora General Lucy Consulting especialista Project Management ERP CRM implementación Odoo SAP NetSuite Guatemala Panamá Centroamérica"
              width={400}
              height={500}
              className="rounded-xl shadow-lg mx-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Contenido optimizado con párrafos SEO */}
      <div className="order-1 lg:order-2">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-8">
          <div className="mb-6">
            {/* H2 optimizado con keywords (Checklist #2) */}
            <h2 className="text-3xl font-bold mb-2 text-[#0F1C2A]">
              Gladis Morales - Directora General Especialista en Project Management ERP/CRM
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
              <p className="text-xl text-[#3574E3] font-semibold">
                Fundadora Lucy Consulting
              </p>
            </div>
          </div>
          
          {/* Contenido indexable en párrafos (Checklist #3) */}
          <div className="space-y-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              <strong>Licenciada en Administración de Sistemas de Información</strong> y 
              <strong> Maestría en Administración de la Confiabilidad</strong>, con más de 
              <strong> 25 años de experiencia en implementación ERP/CRM</strong> para empresas 
              en Latinoamérica. Especialista certificada en metodologías 
              <strong> Agile, SCRUM Foundation y Lean Six Sigma</strong>.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Fundadora de <strong>Lucy Consulting</strong> con 5 años liderando 
              <strong> consultoría independiente en Project Management ERP/CRM</strong>. 
              Experiencia comprobada en implementación de <strong>Odoo, SAP, NetSuite y Microsoft Dynamics</strong> 
              para empresas medianas y grandes en <strong>Guatemala, Panamá</strong> y .
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Su enfoque de <strong>consultoría neutral</strong> garantiza decisiones objetivas en 
              selección de sistemas, <strong>mapeo de procesos empresariales</strong> y 
              <strong> transformación digital</strong> sin conflictos de interés comerciales.
            </p>
          </div>

          {/* LinkedIn Button optimizado con tracking (Checklist #9) */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/gladis-morales-1a891a35/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-[#0077B5] to-[#005983] hover:from-[#005983] hover:to-[#004066] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-h-[44px]"
              aria-label="Ver perfil LinkedIn Gladis Morales especialista Project Management ERP/CRM Lucy Consulting Guatemala"
              data-gtm-event="directora_linkedin_click"
              data-gtm-value="gladis_morales_profile"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.5-2.2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-8.6c0-2-.1-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V24h-4V8z"/>
              </svg>
              <span className="font-semibold">Conectar en LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* SERVICIOS - Optimizado SEO/GEO con keywords actualizadas */}
<section id="servicios" className="relative w-full py-20 bg-gradient-to-br from-[#0F1C2A] via-[#1a2332] to-[#0F1C2A] text-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      {/* H2 optimizado con los 3 servicios (Checklist #2) */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative">
        Project Management ERP/CRM y Mapeo de Procesos - Guatemala Panamá
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      
      {/* Descripción general optimizada para LLMs (Checklist GEO #1) */}
      <p className="text-blue-100 max-w-4xl mx-auto text-lg leading-relaxed">
        Consultoría independiente en <strong className="text-white">sistemas ERP/CRM y mapeo de procesos</strong> 
        para empresas en Guatemala y Panamá.
      </p>
    </header>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Servicio 1: Project Management ERP/CRM */}
      <article className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-[#3574E3]/50 transition-all duration-300 hover:transform hover:scale-105">
        <div className="relative mb-6">
          <div className="w-full h-32 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-2xl overflow-hidden mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/imagen-pm-servicios.jpeg"
              alt="Project Management ERP/CRM independiente Odoo SAP NetSuite metodologías Agile SCRUM Latinoamérica Guatemala Panamá"
              width={300}
              height={128}
              className="w-full h-full object-cover"
              sizes="300px"
            />
          </div>
          {/* Efecto decorativo */}
          <div className="absolute -inset-2 bg-gradient-to-br from-[#3574E3]/20 to-[#60A5FA]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* H3 optimizado (Checklist #2) */}
        <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#60A5FA] transition-colors">
          Project Management ERP/CRM
        </h3>
        
        {/* Contenido optimizado para GEO (Checklist GEO #1) */}
        <p className="text-blue-100 mb-6 leading-relaxed">
          Ofrecemos servicios independientes de <strong>Project Management para implementaciones ERP/CRM</strong> usando 
          metodologías <strong>Agile, SCRUM y Waterfall</strong>. Lideramos y coordinamos proyectos de 
          <strong> Odoo, SAP, NetSuite y Microsoft Dynamics</strong>, garantizando entregas exitosas sin riesgos 
          para empresas en Guatemala, Panamá y toda Latinoamérica.
        </p>
        
        <div className="text-sm text-blue-200 mb-6 bg-white/5 rounded-lg p-3">
          <strong>Incluye:</strong> Planificación, coordinación, control de calidad, gestión de riesgos y supervisión de adopción tecnológica.
        </div>
        
        {/* CTA con tracking optimizado (Checklist #9) */}
        <a
          href="/servicios/project-management-erp-crm"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[44px]"
          aria-label="Ver más información sobre Project Management ERP/CRM independiente"
          data-gtm-event="servicio_pm_click"
          data-gtm-value="project_management_erp_crm"
        >
          📖 Ver más información →
        </a>
      </article>

      {/* Servicio 2: Mapeo de Procesos */}
      <article className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-[#3574E3]/50 transition-all duration-300 hover:transform hover:scale-105">
        <div className="relative mb-6">
          <div className="w-full h-32 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-2xl overflow-hidden mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/imagen-procesos-servicios.jpeg"
              alt="Mapeo procesos empresariales optimización Lean Six Sigma organizaciones Latinoamérica Guatemala Panamá"
              width={300}
              height={128}
              className="w-full h-full object-cover"
              sizes="300px"
            />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-br from-[#3574E3]/20 to-[#60A5FA]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#60A5FA] transition-colors">
          Mapeo de Procesos Empresariales
        </h3>
        
        <p className="text-blue-100 mb-6 leading-relaxed">
          Analizamos y optimizamos <strong>procesos de negocio</strong> usando 
          <strong> metodologías Lean Six Sigma</strong>, reduciendo ineficiencias y alineándolos con 
          objetivos estratégicos en organizaciones latinoamericanas.
        </p>
        
        <div className="text-sm text-blue-200 mb-6 bg-white/5 rounded-lg p-3">
          <strong>Incluye:</strong> Diagnóstico actual, mapeo AS-IS/TO-BE, identificación de mejoras y documentación de procesos.
        </div>
        
        <a
          href="/servicios/mapeo-de-procesos"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[44px]"
          aria-label="Ver más información sobre Mapeo de Procesos Empresariales"
          data-gtm-event="servicio_mapeo_click"
          data-gtm-value="mapeo_procesos"
        >
          📖 Ver más información →
        </a>
      </article>

      {/* Servicio 3: Consultoría Independiente */}
      <article className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-[#3574E3]/50 transition-all duration-300 hover:transform hover:scale-105">
        <div className="relative mb-6">
          <div className="w-full h-32 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-2xl overflow-hidden mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/imagen-erp-servicios.jpeg"
              alt="Consultoría independiente selección implementación sistemas ERP CRM neutral sin conflictos interés"
              width={300}
              height={128}
              className="w-full h-full object-cover"
              sizes="300px"
            />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-br from-[#3574E3]/20 to-[#60A5FA]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#60A5FA] transition-colors">
          Consultoría Independiente en Selección e Implementación
        </h3>
        
        <p className="text-blue-100 mb-6 leading-relaxed">
          <strong>Acompañamiento neutral</strong> en selección e implementación de 
          <strong> sistemas ERP/CRM</strong>, garantizando decisiones objetivas 
          <strong> sin conflictos de interés comerciales</strong>.
        </p>
        
        <div className="text-sm text-blue-200 mb-6 bg-white/5 rounded-lg p-3">
          <strong>Incluye:</strong> Evaluación de necesidades, análisis de opciones, selección objetiva y supervisión de implementación.
        </div>
        
        <a
          href="/servicios/consultoria-erp-crm"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[44px]"
          aria-label="Ver más información sobre Consultoría Independiente ERP/CRM"
          data-gtm-event="servicio_consultoria_click"
          data-gtm-value="consultoria_independiente"
        >
          📖 Ver más información →
        </a>
      </article>
    </div>
  </div>
</section>
     {/* MÉTRICAS - Versión limpia con H2 simple */}
<section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 overflow-hidden">
  <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-[#3574E3]/5 to-transparent rounded-full blur-2xl"></div>
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <header className="text-center mb-12">
      {/* H2 simple y limpio */}
      <h2 className="text-3xl font-bold mb-4 text-[#0F1C2A] relative">
        Nuestros Resultados en Números
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
    </header>
    
    <div className="grid md:grid-cols-4 gap-6">
      <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 hover:transform hover:scale-105 transition-all duration-300">
        <div className="text-5xl font-bold text-[#3574E3] mb-3">25+</div>
        <h3 className="font-semibold text-[#0F1C2A] mb-2">Años de Experiencia</h3>
        <p className="text-sm text-gray-600">En implementación ERP/CRM para empresas de Latinoamérica</p>
      </div>
      <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 hover:transform hover:scale-105 transition-all duration-300">
        <div className="text-5xl font-bold text-[#3574E3] mb-3">92%</div>
        <h3 className="font-semibold text-[#0F1C2A] mb-2">Cumplimiento</h3>
        <p className="text-sm text-gray-600">Proyectos entregados on-time y en presupuesto</p>
      </div>
      <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 hover:transform hover:scale-105 transition-all duration-300">
        <div className="text-5xl font-bold text-[#3574E3] mb-3">88%</div>
        <h3 className="font-semibold text-[#0F1C2A] mb-2">Adopción</h3>
        <p className="text-sm text-gray-600">Alta adopción usuaria post-implementación</p>
      </div>
      <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 hover:transform hover:scale-105 transition-all duration-300">
        <div className="text-5xl font-bold text-[#3574E3] mb-3">100%</div>
        <h3 className="font-semibold text-[#0F1C2A] mb-2">Independiente</h3>
        <p className="text-sm text-gray-600">Consultoría neutral sin conflictos de interés</p>
      </div>
    </div>
  </div>
</section>
     {/* FAQ - Optimizado SEO/GEO con Schema FAQPage */}
<section id="faq" className="py-20 bg-gradient-to-br from-[#0F1C2A] via-[#1a2332] to-[#0F1C2A] text-white overflow-hidden">
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl"></div>
  
  <div className="max-w-4xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      {/* H2 optimizado con keywords (Checklist #2) */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative">
        Preguntas Frecuentes sobre Project Management ERP/CRM Guatemala - Panamá
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-blue-100 text-lg">Resolvemos las dudas más comunes sobre implementaciones ERP/CRM y nuestros servicios</p>
    </header>

    <div className="space-y-4">
      {/* Pregunta 1 */}
      <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
        <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
          ¿Qué sistemas ERP implementa Lucy Consulting en Guatemala y Panamá?
        </summary>
        <div className="px-6 pb-6 text-blue-100 leading-relaxed">
          Especializamos en <strong className="text-white">Project Management para implementaciones de Odoo, SAP, NetSuite y Microsoft Dynamics</strong> (ERP y CRM). Somos consultores independientes sin vínculos comerciales, garantizando decisiones objetivas basadas únicamente en las necesidades de su empresa en <strong className="text-white">Guatemala, Panamá y Latinoamérica</strong>.
        </div>
      </details>

      {/* Pregunta 2 */}
      <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
        <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
          ¿Cuánto tiempo toma una implementación ERP/CRM en Latinoamérica?
        </summary>
        <div className="px-6 pb-6 text-blue-100 leading-relaxed">
          Las implementaciones varían entre <strong className="text-white">6-18 meses</strong> dependiendo del tamaño de la empresa y complejidad del proyecto. Usamos metodologías <strong className="text-white">Agile y SCRUM</strong> para entregas incrementales y control de riesgos en organizaciones de <strong className="text-white">Guatemala, Panamá y toda Centroamérica</strong>.
        </div>
      </details>

      {/* Pregunta 3 */}
      <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
        <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
          ¿Ofrecen servicios de mapeo de procesos empresariales?
        </summary>
        <div className="px-6 pb-6 text-blue-100 leading-relaxed">
          Sí, especializamos en <strong className="text-white">mapeo y optimización de procesos empresariales</strong> usando metodologías <strong className="text-white">Lean Six Sigma</strong>. Analizamos flujos de trabajo actuales, identificamos ineficiencias y diseñamos procesos optimizados para empresas en <strong className="text-white">Guatemala, Panamá y Latinoamérica</strong>.
        </div>
      </details>

      {/* Pregunta 4 */}
      <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
        <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
          ¿Ofrecen servicios de consultoría independiente en Latinoamérica?
        </summary>
        <div className="px-6 pb-6 text-blue-100 leading-relaxed">
          Sí, atendemos empresas en toda <strong className="text-white">Latinoamérica</strong>. Tenemos presencia principal en <strong className="text-white">Guatemala</strong>, secundaria en <strong className="text-white">Panamá</strong>, y experiencia trabajando remotamente con organizaciones de toda la región centroamericana.
        </div>
      </details>

      {/* Pregunta 5 */}
      <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
        <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
          ¿Qué incluye su consultoría independiente en selección de sistemas ERP/CRM?
        </summary>
        <div className="px-6 pb-6 text-blue-100 leading-relaxed">
          Incluye <strong className="text-white">análisis de necesidades, evaluación de opciones, selección objetiva, acompañamiento en implementación, gestión del cambio y soporte post-implementación</strong>. Todo sin conflictos de interés comerciales, garantizando neutralidad completa.
        </div>
      </details>
    </div>
  </div>

  {/* Schema FAQPage para SEO (Checklist GEO #2) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué sistemas ERP implementa Lucy Consulting en Guatemala y Panamá?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Especializamos en Project Management para implementaciones de Odoo, SAP, NetSuite y Microsoft Dynamics (ERP y CRM). Somos consultores independientes sin vínculos comerciales, garantizando decisiones objetivas basadas únicamente en las necesidades de su empresa en Guatemala, Panamá y Latinoamérica."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo toma una implementación ERP/CRM en Latinoamérica?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Las implementaciones varían entre 6-18 meses dependiendo del tamaño de la empresa y complejidad del proyecto. Usamos metodologías Agile y SCRUM para entregas incrementales y control de riesgos en organizaciones de Guatemala, Panamá y toda Centroamérica."
            }
          },
          {
            "@type": "Question",
            "name": "¿Ofrecen servicios de mapeo de procesos empresariales?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, especializamos en mapeo y optimización de procesos empresariales usando metodologías Lean Six Sigma. Analizamos flujos de trabajo actuales, identificamos ineficiencias y diseñamos procesos optimizados para empresas en Guatemala, Panamá y Latinoamérica."
            }
          },
          {
            "@type": "Question",
            "name": "¿Ofrecen servicios de consultoría independiente en Latinoamérica?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, atendemos empresas en toda Latinoamérica. Tenemos presencia principal en Guatemala, secundaria en Panamá, y experiencia trabajando remotamente con organizaciones de toda la región centroamericana."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué incluye su consultoría independiente en selección de sistemas ERP/CRM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Incluye análisis de necesidades, evaluación de opciones, selección objetiva, acompañamiento en implementación, gestión del cambio y soporte post-implementación. Todo sin conflictos de interés comerciales, garantizando neutralidad completa."
            }
          }
        ]
      })
    }}
  />
</section>
     {/* CONTACTO - Balance conversión + SEO con Schema LocalBusiness */}
<section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 text-gray-800">
  <div className="max-w-4xl mx-auto px-6 text-center">
    {/* H2 balanceado conversión + SEO (Checklist #2) */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1C2A] relative">
      ¿Listo para optimizar tu empresa con consultoría ERP/CRM independiente?
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
    </h2>
    
    {/* Párrafo optimizado para conversión + keywords mínimas */}
    <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
      Agenda una <strong>consultoría gratuita</strong> y descubre cómo nuestros servicios de 
      <strong> Project Management ERP/CRM, mapeo de procesos y selección independiente</strong> pueden 
      transformar tu organización.
    </p>

    {/* Datos de contacto con información para LLMs (Checklist GEO #4) */}
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">WhatsApp</h3>
        <a 
          href="https://wa.me/50245172699" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-lg hover:text-[#3574E3] transition"
          aria-label="Contactar Lucy Consulting por WhatsApp para consultoría ERP/CRM"
          data-gtm-event="contacto_whatsapp_click"
          data-gtm-value="whatsapp_directo"
        >
          +502 4517 2699
        </a>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">Email</h3>
        <a 
  href="mailto:lucyconsultinggt@gmail.com" 
  className="text-sm hover:text-[#3574E3] transition break-words"
          aria-label="Enviar email a Lucy Consulting para consultoría Project Management ERP/CRM"
          data-gtm-event="contacto_email_click"
          data-gtm-value="email_directo"
        >
          lucyconsultinggt@gmail.com
        </a>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">Cobertura</h3>
        <p className="text-lg">Guatemala - Panamá</p>
        <p className="text-sm text-gray-600">Servicios en Latinoamérica</p>
      </div>
    </div>

    {/* CTAs principales con tracking optimizado (Checklist #9) */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="https://calendly.com/mocawebpty/30min"
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition min-h-[44px]"
        aria-label="Solicitar consultoría gratuita Project Management ERP/CRM por WhatsApp"
        data-gtm-event="contacto_cta_principal"
        data-gtm-value="consultoria_gratuita_whatsapp"
      >
        📅 Agenda cita exploratoria gratuita (30min)
      </a>
  
      <a 
        href="https://www.linkedin.com/in/gladis-morales-1a891a35/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex border-2 border-[#0077B5] text-[#0077B5] px-6 py-3 rounded-full font-semibold hover:bg-[#0077B5] hover:text-white transition min-h-[44px]"
        aria-label="Conectar con Gladis Morales en LinkedIn - Especialista Project Management ERP/CRM"
        data-gtm-event="contacto_linkedin_click"
        data-gtm-value="linkedin_gladis_morales"
      >
        🔗 LinkedIn
      </a>
    </div>
  </div>

  {/* Schema LocalBusiness para SEO técnico (Checklist GEO #2) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://lucy-consulting-evdq.vercel.app/#localbusiness",
        "name": "Lucy Consulting",
        "description": "Consultoría independiente especializada en Project Management ERP/CRM, mapeo de procesos y selección de sistemas para empresas en Guatemala, Panamá y Latinoamérica.",
        "url": "https://lucy-consulting-evdq.vercel.app",
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
          "jobTitle": "Directora General y Fundadora"
        },
        "sameAs": [
          "https://www.linkedin.com/in/gladis-morales-1a891a35/"
        ],
        "serviceType": [
          "Project Management ERP/CRM",
          "Mapeo de Procesos Empresariales", 
          "Consultoría Independiente en Selección e Implementación"
        ],
        "knowsAbout": [
          "Odoo ERP", "SAP ERP", "NetSuite ERP", "Microsoft Dynamics ERP",
          "Project Management", "Business Process Mapping", "ERP Implementation"
        ]
      })
    }}
  />
</section>
     
      </main> 
    </div>
  );
}