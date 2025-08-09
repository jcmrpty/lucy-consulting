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
        Odoo, SAP, NetSuite - Latinoamérica
      </span>
    </h1>
    
    {/* Párrafo optimizado 25-50 palabras (Checklist correcto) */}
    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
      Consultoría independiente en implementación ERP/CRM para empresas medianas y grandes. 
      Especializados en <strong>Odoo, SAP, NetSuite y Microsoft Dynamics</strong> con 
      metodologías <strong>Agile y SCRUM</strong> en Guatemala, Panamá y Latinoamérica.
    </p>
    
    {/* CTAs Hero con tracking GA4/GTM (Checklist #9) */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="https://wa.me/50245172699?text=Hola%2C%20necesito%20consultor%C3%ADa%20para%20implementaci%C3%B3n%20ERP%2FCRM%20en%20Latinoam%C3%A9rica"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white text-lg shadow-lg hover:scale-105 transition duration-200 min-h-[44px] min-w-[44px]"
        aria-label="Contactar por WhatsApp para consultoría Project Management ERP/CRM en Latinoamérica"
        data-gtm-event="hero_whatsapp_click"
        data-gtm-value="consultoria_gratuita"
      >
        💬 Consultoría Gratuita por WhatsApp
      </a>
      <a
        href="tel:+50245172699"
        className="inline-flex border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0F1C2A] transition duration-200 min-h-[44px] min-w-[44px]"
        aria-label="Llamar a Lucy Consulting Guatemala para consultoría ERP/CRM"
        data-gtm-event="hero_phone_click"
        data-gtm-value="llamada_directa"
      >
        📞 +502 4517 2699
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
        Quiénes Somos
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
              para empresas medianas y grandes en <strong>Guatemala, Panamá</strong> y Latinoamerica.
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
      {/* SERVICIOS */}
      <section id="servicios" className="relative w-full py-20 bg-gradient-to-br from-[#0F1C2A] via-[#1a2332] to-[#0F1C2A] text-white overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative">
              Nuestros Servicios Especializados
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
            </h2>
            <p className="text-blue-100 max-w-4xl mx-auto text-lg leading-relaxed">
              Consultoría independiente en <strong className="text-white">Microsoft Dynamics, SAP, NetSuite y Odoo</strong> 
              para empresas medianas y grandes en Latinoamérica
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Servicio 1: Project Management */}
            <article className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-[#3574E3]/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative mb-6">
                <div className="w-full h-32 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-2xl overflow-hidden mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/images/imagen-pm-servicios.jpeg"
                    alt="Icono Project Management ERP/CRM"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                    sizes="300px"
                  />
                </div>
                {/* Efecto decorativo */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[#3574E3]/20 to-[#60A5FA]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#60A5FA] transition-colors">
                Project Management ERP/CRM
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Lideramos implementaciones de <strong>Microsoft Dynamics, SAP, NetSuite y Odoo</strong> usando 
                metodologías <strong>Agile, SCRUM y Waterfall</strong>. Garantizamos entregas exitosas sin riesgos.
              </p>
              <div className="text-sm text-blue-200 mb-6 bg-white/5 rounded-lg p-3">
                <strong>Incluye:</strong> Planificación, ejecución, control de calidad, gestión de riesgos y adopción tecnológica.
              </div>
              <a
                 href="/servicios/project-management-erp-crm"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  aria-label="Ver más sobre Project Management ERP/CRM"
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
                    alt="Icono Mapeo de Procesos"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-[#3574E3]/20 to-[#60A5FA]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#60A5FA] transition-colors">
                Elaboración y Mapeo de Procesos
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Analizamos y optimizamos procesos de negocio usando <strong>metodologías Lean Six Sigma</strong>, 
                reduciendo ineficiencias y alineándolos con objetivos estratégicos.
              </p>
              <div className="text-sm text-blue-200 mb-6 bg-white/5 rounded-lg p-3">
                <strong>Incluye:</strong> Diagnóstico actual, mapeo AS-IS/TO-BE, identificación de mejoras y documentación.
              </div>
              <a
               
  href="/servicios/mapeo-de-procesos"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  aria-label="Ver más sobre Mapeo de Procesos"
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
                    alt="Icono Consultoría Independiente ERP/CRM"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-[#3574E3]/20 to-[#60A5FA]/20 rounded-3xl blur-xl opacity-opacity-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#60A5FA] transition-colors">
                Consultoría en Selección e Implementación
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Acompañamiento neutral en selección e implementación de <strong>sistemas ERP/CRM</strong>, 
                garantizando decisiones objetivas sin conflictos de interés.
              </p>
              <div className="text-sm text-blue-200 mb-6 bg-white/5 rounded-lg p-3">
                <strong>Incluye:</strong> Evaluación de necesidades, análisis de opciones, selección objetiva y supervisión.
              </div>
              <a
               href="/servicios/consultoria-erp-crm"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  aria-label="Ver más sobre Consultoría Independiente"
>
  📖 Ver más información →
</a>
            </article>
          </div>
        </div>
      </section>
      {/* MÉTRICAS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-[#3574E3]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0F1C2A] relative">
              Nuestros Resultados en Números
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Métricas reales de nuestras implementaciones ERP/CRM en empresas de Latinoamérica</p>
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
     {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-br from-[#0F1C2A] via-[#1a2332] to-[#0F1C2A] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative">
              Preguntas Frecuentes
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
            </h2>
            <p className="text-blue-100 text-lg">Resolvemos las dudas más comunes sobre implementaciones ERP/CRM y nuestros servicios</p>
          </header>

          <div className="space-y-4">
            <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
                ¿Qué sistemas ERP y CRM implementa Lucy Consulting?
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Implementamos <strong className="text-white">Microsoft Dynamics, SAP, NetSuite y Odoo</strong> (ERP y CRM). Somos consultores independientes sin vínculos comerciales, garantizando decisiones objetivas basadas únicamente en las necesidades de su empresa.
              </div>
            </details>

            <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
                ¿Cuánto tiempo toma una implementación ERP/CRM?
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Las implementaciones varían entre <strong className="text-white">6-18 meses</strong> dependiendo del tamaño de la empresa y complejidad. Usamos metodologías <strong className="text-white">Agile y SCRUM</strong> para entregas incrementales y control de riesgos.
              </div>
            </details>

            <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
                ¿Trabajan con empresas fuera de Guatemala?
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Sí, atendemos empresas en toda <strong className="text-white">Latinoamérica</strong>. Presencia principal en <strong className="text-white">Guatemala</strong>, secundaria en <strong className="text-white">Panamá</strong>, y experiencia trabajando remotamente con empresas de toda la región.
              </div>
            </details>

            <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
                ¿Qué metodologías de Project Management utilizan?
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Utilizamos <strong className="text-white">Agile, SCRUM y Waterfall</strong> según las necesidades del proyecto. Certificados en <strong className="text-white">SCRUM Foundation</strong> y aplicamos principios <strong className="text-white">Lean Six Sigma</strong> para optimización.
              </div>
            </details>

            <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden group hover:bg-white/15 hover:border-[#3574E3]/50 transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-white text-lg hover:text-[#60A5FA] transition">
                ¿Qué incluye la consultoría independiente?
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Incluye <strong className="text-white">análisis de necesidades, evaluación de opciones, selección objetiva, acompañamiento en implementación, gestión del cambio y soporte post-implementación</strong>. Todo sin conflictos de interés comerciales.
              </div>
            </details>
          </div>
        </div>
      </section>
     {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 text-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1C2A] relative">
            ¿Listo para transformar tu empresa con ERP/CRM?
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Agenda una <strong>consultoría gratuita</strong> y descubre cómo podemos acompañarte hacia el éxito en tu próximo proyecto de <strong>implementación ERP/CRM</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
              <h3 className="font-semibold text-[#3574E3] mb-2">WhatsApp</h3>
              <a href="https://wa.me/50245172699" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#3574E3] transition">+502 4517 2699</a>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
              <h3 className="font-semibold text-[#3574E3] mb-2">Email</h3>
              <a href="mailto:lucyconsultinggt@gmail.com" className="text-lg hover:text-[#3574E3] transition">lucyconsultinggt@gmail.com</a>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
              <h3 className="font-semibold text-[#3574E3] mb-2">Cobertura</h3>
              <p className="text-lg">Guatemala - Panamá</p>
              <p className="text-sm text-gray-600">Servicios en Latinoamérica</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/50245172699?text=Hola%2C%20necesito%20una%20consultoría%20gratuita%20para%20implementación%20ERP%2FCRM" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              💬 Consultoría Gratuita por WhatsApp
            </a>
            <a 
              href="tel:+50245172699" 
              className="inline-flex border-2 border-[#3574E3] text-[#3574E3] px-6 py-3 rounded-full font-semibold hover:bg-[#3574E3] hover:text-white transition"
            >
              📞 +502 4517 2699
            </a>
            <a 
              href="https://www.linkedin.com/in/gladis-morales-1a891a35/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex border-2 border-[#0077B5] text-[#0077B5] px-6 py-3 rounded-full font-semibold hover:bg-[#0077B5] hover:text-white transition"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F1C2A] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#3574E3] mb-4">Lucy Consulting</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Consultoría independiente especializada en Project Management ERP/CRM para empresas medianas y grandes en Latinoamérica. +25 años de experiencia.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/gladis-morales-1a891a35/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-200 hover:text-white transition"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://wa.me/50245172699" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-200 hover:text-white transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Servicios</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/servicios/project-management-erp-crm" className="hover:text-white transition">Project Management ERP/CRM</a></li>
                <li><a href="/servicios/mapeo-de-procesos" className="hover:text-white transition">Mapeo de Procesos</a></li>
                <li><a href="/servicios/consultoria-erp-crm" className="hover:text-white transition">Consultoría Independiente</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contacto</h4>
              <div className="space-y-2 text-blue-200">
                <p>📞 <a href="tel:+50245172699" className="hover:text-white transition">+502 4517 2699</a></p>
                <p>✉️ <a href="mailto:lucyconsultinggt@gmail.com" className="hover:text-white transition">lucyconsultinggt@gmail.com</a></p>
                <p>📍 Guatemala - Panamá</p>
                <p>🌎 Servicios en Latinoamérica</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-blue-100">
              © 2024 Lucy Consulting. Especialistas en Project Management ERP/CRM (Microsoft Dynamics, SAP, NetSuite, Odoo) 
              para empresas en Latinoamérica. Consultoría independiente con +25 años de experiencia.
            </p>
          </div>
        </div>
      </footer>
      </main> 
    </div>
  );
}