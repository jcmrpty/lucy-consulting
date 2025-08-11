import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

// ✅ METADATA optimizada para Consultoría ERP/CRM
export const metadata: Metadata = {
  title: 'Consultoría Independiente ERP/CRM | Selección Sistemas Guatemala',
  description: 'Consultoría independiente en selección e implementación de sistemas ERP/CRM. Asesoría neutral Odoo, SAP, NetSuite en Guatemala y Panamá. +25 años en consultoría empresarial Centroamérica.',
  
  keywords: [
    'consultoría independiente ERP CRM',
    'selección sistemas ERP Guatemala',
    'asesoría ERP CRM Panamá',
    'consultoría neutral ERP',
    'selección software empresarial',
    'consultoría ERP CRM Centroamérica',
    'asesoría tecnológica independiente',
    'consultor ERP CRM Latinoamérica'
  ],
  
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: 'https://lucy-consulting-evdq.vercel.app/servicios/consultoria-erp-crm',
  },
  
  openGraph: {
    title: 'Consultoría Independiente ERP/CRM | Selección Sistemas Centroamérica',
    description: 'Especialistas en consultoría independiente para selección e implementación de sistemas ERP/CRM. Asesoría neutral en Guatemala y Panamá.',
    url: 'https://lucy-consulting-evdq.vercel.app/servicios/consultoria-erp-crm',
    type: 'website',
    images: [
      {
        url: 'https://lucy-consulting-evdq.vercel.app/images/consultoria-erp-crm-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Consultoría independiente ERP CRM selección sistemas Guatemala Panamá Centroamérica'
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Consultoría Independiente ERP/CRM | Selección Sistemas Guatemala',
    description: 'Consultoría independiente en selección ERP/CRM. Asesoría neutral Odoo, SAP, NetSuite en Guatemala y Panamá.',
  },
}

export default function ConsultoriaErpCrmPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101D2B] text-white font-sans">
      {/* MAIN wrapper semántico */}
      <main>
        
        {/* ✅ SECCIÓN 1: HERO - COMPLETADA */}
        <section className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-crm.jpeg"
              alt="Consultoría independiente ERP CRM selección sistemas empresariales asesoría neutral Guatemala Panamá Centroamérica"
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2A]/60 via-[#0F1C2A]/50 to-[#0F1C2A]/70"></div>
          </div>

          <div className="relative z-10 max-w-6xl px-6">
            {/* H1 optimizado para Consultoría ERP/CRM */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#3574E3] block mb-2">
                Consultoría Independiente ERP/CRM
              </span>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl block mb-2">
                Selección e Implementación de Sistemas
              </span>
              <span className="text-[#60A5FA] text-xl md:text-3xl lg:text-4xl block">
                Asesoría Neutral en Guatemala y Panamá
              </span>
            </h1>
            
            {/* Párrafo optimizado específico para Consultoría */}
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Brindamos <strong>asesoría tecnológica independiente</strong> en selección e implementación de 
              <strong> sistemas ERP/CRM</strong>.
            </p>
            
            {/* CTAs Hero específicos para Consultoría */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/mocawebpty/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white text-lg shadow-lg hover:scale-105 transition duration-200 min-h-[44px] min-w-[44px]"
                aria-label="Agendar consultoría independiente ERP CRM Guatemala Panamá"
                data-gtm-event="consultoria_hero_calendly_click"
                data-gtm-value="consultoria_independiente_gratuita"
              >
                📅 Agenda consultoria exploratoria gratuita (30min)
              </a>
          
            </div>
          </div>
        </section>
{/* ✅ SECCIÓN 2: SERVICIOS CONSULTORÍA ERP/CRM - COMPLETADA */}
<section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F1C2A] relative">
        ¿Qué incluye nuestra consultoría independiente en selección ERP/CRM en Latinoamérica?
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
        <strong className="text-[#3574E3]">Asesoría neutral especializada</strong> sin 
        <strong className="text-[#0F1C2A]"> conflictos de interés comerciales</strong>
      </p>
    </header>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      
      {/* Servicio 1: Análisis de Necesidades */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">📋</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Análisis de Necesidades y Requerimientos
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Evaluamos necesidades específicas de su <strong>empresa en Latinoamérica</strong> mediante análisis detallado de procesos actuales, identificación de gaps tecnológicos y definición de requerimientos funcionales. <strong>Consultoría independiente</strong> especializada en <strong>selección sistemas ERP</strong> sin sesgo comercial hacia proveedores específicos, garantizando <strong>asesoría neutral</strong> para <strong>organizaciones centroamericanas</strong>.
        </p>
      </article>

      {/* Servicio 2: Investigación de Mercado */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🔍</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Investigación de Mercado y Proveedores
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Realizamos investigación exhaustiva del mercado de <strong>sistemas ERP/CRM</strong> disponibles en <strong>Centroamérica</strong>, evaluando capacidades, costos, soporte local y casos de éxito. <strong>Asesoría tecnológica</strong> neutral analizando opciones de <strong>software empresarial</strong> disponibles para <strong>empresas guatemaltecas</strong> y organizaciones en <strong>Latinoamérica</strong>.
        </p>
      </article>

      {/* Servicio 3: Evaluación Técnica */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">⚖️</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Evaluación Técnica y Comparativa
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Desarrollamos matriz comparativa objetiva entre opciones de <strong>ERP/CRM</strong> evaluando funcionalidad, escalabilidad, integración y TCO (costo total de propiedad). <strong>Consultoría neutral ERP</strong> proporcionando análisis técnico detallado para <strong>selección software empresarial</strong> en <strong>empresas de Guatemala y Panamá</strong>.
        </p>
      </article>

      {/* Servicio 4: Acompañamiento en Selección */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🤝</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Acompañamiento en Proceso de Selección
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Facilitamos proceso de selección estructurado incluyendo RFP (solicitud de propuestas), evaluación de demos, negociación de contratos y due diligence de proveedores. <strong>Asesoría independiente</strong> garantizando decisiones informadas en <strong>selección ERP CRM</strong> para <strong>organizaciones centroamericanas</strong>.
        </p>
      </article>

      {/* Servicio 5: Supervisión de Implementación */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">👁️</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Supervisión de Implementación
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Supervisamos proceso de implementación asegurando cumplimiento de cronogramas, entregables y calidad acordados con el proveedor seleccionado. <strong>Consultoría independiente ERP CRM</strong> durante fase de implementación protegiendo intereses del cliente en <strong>empresas de Latinoamérica</strong>.
        </p>
      </article>

      {/* Servicio 6: Gestión del Cambio */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🔄</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Gestión del Cambio y Adopción
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Diseñamos estrategia de <strong>gestión del cambio organizacional</strong> para garantizar adopción exitosa del <strong>sistema ERP/CRM</strong> seleccionado. Incluye capacitación de usuarios, comunicación organizacional y seguimiento post-implementación para <strong>empresas en Guatemala</strong> y la región.
        </p>
      </article>

    </div>
  </div>
</section>
        {/* ✅ SECCIÓN 3: CASOS DE ÉXITO CONSULTORÍA - COMPLETADA */}
<section id="casos-exito" className="py-20 bg-gradient-to-br from-[#0F1C2A] via-[#1a2332] to-[#0F1C2A] text-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative">
        Casos de Éxito en Consultoría Independiente ERP/CRM - Guatemala y Colombia
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
        Resultados reales de <strong className="text-white">asesoría neutral</strong> en 
        <strong className="text-white"> selección e implementación de sistemas</strong>
      </p>
    </header>

    <div className="grid lg:grid-cols-2 gap-12">
      
      {/* Caso 1: Exportadora de Flores Colombia */}
      <article className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 hover:border-[#3574E3]/50 transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mr-4">
            <span className="text-white text-2xl font-bold">🌸</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Exportadora de Flores - Colombia</h3>
            <p className="text-[#60A5FA] font-semibold">Consultoría independiente y selección ERP Odoo - 8 meses</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Situación:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              Exportadora colombiana de flores con 120 empleados necesitaba <strong className="text-white">selección ERP</strong> para manejar operaciones complejas de cultivo, procesamiento y exportación internacional. Sin claridad sobre opciones disponibles en el mercado y preocupación por recomendaciones sesgadas de consultoras con vínculos comerciales.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Nuestro rol:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Consultoría independiente ERP CRM</strong> realizando análisis exhaustivo de necesidades, investigación de mercado neutral y evaluación técnica objetiva. <strong className="text-white">Asesoría tecnológica</strong> imparcial comparando 5 opciones de <strong className="text-white">software empresarial</strong> sin conflictos de interés. Acompañamiento completo en <strong className="text-white">selección sistemas ERP</strong> para <strong className="text-white">empresas de Latinoamérica</strong>.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#3574E3] mb-3">Resultados:</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Selección objetiva de Odoo ERP tras análisis neutral</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Ahorro 30% vs propuesta inicial por asesoría independiente</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Implementación exitosa en tiempo y presupuesto</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>ROI del 190% en 18 meses post-implementación</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* Caso 2: Fábrica de Puertas Guatemala */}
      <article className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 hover:border-[#3574E3]/50 transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mr-4">
            <span className="text-white text-2xl font-bold">🚪</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Fábrica de Puertas de Madera - Guatemala</h3>
            <p className="text-[#60A5FA] font-semibold">Consultoría selección CRM NetSuite - 6 meses</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Situación:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Empresa guatemalteca</strong> fabricante de puertas de madera con 85 empleados requería <strong className="text-white">selección CRM</strong> para mejorar gestión de ventas, seguimiento de clientes y control de inventarios. Múltiples propuestas comerciales confusas y falta de criterios objetivos para tomar decisión informada.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Nuestro rol:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Asesoría independiente</strong> especializada en <strong className="text-white">selección software empresarial</strong> para sector manufacturero. Desarrollamos matriz comparativa neutral evaluando 4 opciones de <strong className="text-white">sistemas CRM</strong> disponibles en <strong className="text-white">Centroamérica</strong>. <strong className="text-white">Consultoría neutral ERP</strong> garantizando decisión basada únicamente en necesidades reales de la <strong className="text-white">organización guatemalteca</strong>.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#3574E3] mb-3">Resultados:</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Selección fundamentada de NetSuite CRM</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Reducción 25% en tiempo de ciclo de ventas</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Mejora 45% en seguimiento de oportunidades</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Incremento 20% en satisfacción del cliente</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
{/* ✅ SECCIÓN 4: FAQ CONSULTORÍA INDEPENDIENTE - COMPLETADA */}
<section id="faq" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="max-w-4xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F1C2A] relative">
        Preguntas Frecuentes sobre Consultoría Independiente ERP/CRM en Latinoamérica
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
        Resolvemos las dudas más comunes sobre <strong className="text-[#3574E3]">asesoría neutral</strong> en 
        <strong className="text-[#0F1C2A]"> selección de sistemas empresariales</strong>
      </p>
    </header>

    <div className="space-y-4">
      
      {/* Pregunta 1 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Qué ventajas tiene una consultoría independiente vs consultoras con vínculos comerciales?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          La <strong className="text-[#0F1C2A]">consultoría independiente ERP CRM</strong> ofrece <strong className="text-[#0F1C2A]">asesoría neutral</strong> sin conflictos de interés comerciales. No recibimos comisiones de proveedores, garantizando recomendaciones objetivas basadas únicamente en necesidades reales de su empresa. Las <strong className="text-[#0F1C2A]">organizaciones en Guatemala</strong> y <strong className="text-[#0F1C2A]">Latinoamérica</strong> obtienen <strong className="text-[#0F1C2A]">selección sistemas ERP</strong> imparcial, mejor negociación de precios y decisiones informadas sin presión comercial de consultoras vinculadas a proveedores específicos.
        </div>
      </details>

      {/* Pregunta 2 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Cómo funciona el proceso de selección independiente de sistemas ERP/CRM?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Nuestro proceso de <strong className="text-[#0F1C2A]">selección ERP CRM</strong> incluye 6 fases estructuradas: análisis de necesidades, investigación de mercado, evaluación técnica comparativa, acompañamiento en selección, supervisión de implementación y gestión del cambio. <strong className="text-[#0F1C2A]">Asesoría tecnológica</strong> neutral usando metodologías probadas para <strong className="text-[#0F1C2A]">empresas en Centroamérica</strong>. La <strong className="text-[#0F1C2A]">consultoría independiente</strong> garantiza transparencia total y documentación detallada en cada etapa del proceso.
        </div>
      </details>

      {/* Pregunta 3 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Qué criterios usan para evaluar y comparar sistemas ERP/CRM?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Evaluamos <strong className="text-[#0F1C2A]">software empresarial</strong> usando matriz comparativa objetiva considerando: funcionalidad específica del sector, escalabilidad, facilidad de uso, capacidad de integración, TCO (costo total de propiedad), soporte local en <strong className="text-[#0F1C2A]">Centroamérica</strong> y referencias verificables. <strong className="text-[#0F1C2A]">Consultoría neutral ERP</strong> analizando tanto soluciones globales como opciones regionales disponibles para <strong className="text-[#0F1C2A]">empresas guatemaltecas</strong> y organizaciones en <strong className="text-[#0F1C2A]">Latinoamérica</strong>.
        </div>
      </details>

      {/* Pregunta 4 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Acompañan durante la implementación del sistema seleccionado?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Sí, nuestra <strong className="text-[#0F1C2A]">asesoría independiente</strong> incluye supervisión durante implementación para proteger intereses del cliente. Monitoreamos cumplimiento de cronogramas, calidad de entregables, gestión de riesgos y adherencia a especificaciones acordadas. <strong className="text-[#0F1C2A]">Consultoría independiente ERP CRM</strong> asegurando que el proveedor seleccionado cumpla compromisos contractuales durante <strong className="text-[#0F1C2A]">transformación digital</strong> de <strong className="text-[#0F1C2A]">empresas en Guatemala</strong> y la región.
        </div>
      </details>

      {/* Pregunta 5 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Cuánto tiempo toma un proyecto completo de consultoría independiente?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Los proyectos de <strong className="text-[#0F1C2A]">consultoría independiente</strong> varían entre 4-10 meses dependiendo de complejidad organizacional y alcance del <strong className="text-[#0F1C2A]">sistema ERP/CRM</strong>. Típicamente: análisis inicial (4-6 semanas), selección (6-8 semanas), implementación supervisada (12-24 semanas) y seguimiento (4-8 semanas). <strong className="text-[#0F1C2A]">Asesoría tecnológica</strong> eficiente para <strong className="text-[#0F1C2A]">organizaciones centroamericanas</strong> garantizando <strong className="text-[#0F1C2A]">selección software empresarial</strong> óptima sin dilaciones innecesarias.
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
            "name": "¿Qué ventajas tiene una consultoría independiente vs consultoras con vínculos comerciales?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La consultoría independiente ERP CRM ofrece asesoría neutral sin conflictos de interés comerciales. No recibimos comisiones de proveedores, garantizando recomendaciones objetivas basadas únicamente en necesidades reales de su empresa. Las organizaciones en Guatemala y Latinoamérica obtienen selección sistemas ERP imparcial, mejor negociación de precios y decisiones informadas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo funciona el proceso de selección independiente de sistemas ERP/CRM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestro proceso de selección ERP CRM incluye 6 fases estructuradas: análisis de necesidades, investigación de mercado, evaluación técnica comparativa, acompañamiento en selección, supervisión de implementación y gestión del cambio. Asesoría tecnológica neutral usando metodologías probadas para empresas en Centroamérica."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué criterios usan para evaluar y comparar sistemas ERP/CRM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evaluamos software empresarial usando matriz comparativa objetiva considerando: funcionalidad específica del sector, escalabilidad, facilidad de uso, capacidad de integración, TCO, soporte local en Centroamérica y referencias verificables. Consultoría neutral ERP analizando tanto soluciones globales como opciones regionales."
            }
          },
          {
            "@type": "Question",
            "name": "¿Acompañan durante la implementación del sistema seleccionado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, nuestra asesoría independiente incluye supervisión durante implementación para proteger intereses del cliente. Monitoreamos cumplimiento de cronogramas, calidad de entregables, gestión de riesgos y adherencia a especificaciones acordadas durante transformación digital."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo toma un proyecto completo de consultoría independiente?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los proyectos de consultoría independiente varían entre 4-10 meses dependiendo de complejidad organizacional y alcance del sistema ERP/CRM. Incluye análisis inicial, selección, implementación supervisada y seguimiento. Asesoría tecnológica eficiente garantizando selección software empresarial óptima."
            }
          }
        ]
      })
    }}
  />
</section>

    {/* ✅ SECCIÓN 5: CTA FINAL CONSULTORÍA - COMPLETADA */}
<section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 text-gray-800">
  <div className="max-w-4xl mx-auto px-6 text-center">
    {/* H2 optimizado para conversión + SEO */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1C2A] relative">
      ¿Necesitas asesoría neutral para seleccionar el sistema ERP/CRM ideal?
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
    </h2>
    
    {/* Párrafo optimizado para conversión + keywords */}
    <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
      Agenda una <strong>consultoría independiente gratuita</strong> y descubre cómo nuestra 
      <strong> asesoría neutral</strong> puede ayudarte a seleccionar el <strong>sistema ERP/CRM perfecto</strong> 
      para tu <strong> empresa en Guatemala</strong> sin conflictos comerciales en <strong>Latinoamérica</strong>.
    </p>

    {/* Datos de contacto con información para LLMs */}
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">WhatsApp</h3>
        <a 
          href="https://wa.me/50245172699?text=Hola%2C%20me%20interesa%20una%20consultor%C3%ADa%20independiente%20sobre%20selecci%C3%B3n%20ERP%2FCRM" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-lg hover:text-[#3574E3] transition"
          aria-label="Contactar Lucy Consulting por WhatsApp para consultoría independiente ERP/CRM"
          data-gtm-event="consultoria_contacto_whatsapp_click"
          data-gtm-value="whatsapp_consultoria_directo"
        >
          +502 4517 2699
        </a>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">Email</h3>
        <a 
          href="mailto:lucyconsultinggt@gmail.com?subject=Consultoría Independiente ERP/CRM" 
          className="text-sm hover:text-[#3574E3] transition break-words"
          aria-label="Enviar email a Lucy Consulting para consultoría independiente"
          data-gtm-event="consultoria_contacto_email_click"
          data-gtm-value="email_consultoria_directo"
        >
          lucyconsultinggt@gmail.com
        </a>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">Cobertura</h3>
        <p className="text-lg">Guatemala - Panamá</p>
        <p className="text-sm text-gray-600">Consultoría independiente en Latinoamérica</p>
      </div>
    </div>

    {/* CTAs principales con tracking optimizado */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="https://calendly.com/mocawebpty/30min"
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition min-h-[44px] justify-center items-center"
        aria-label="Agendar consultoría independiente gratuita ERP/CRM"
        data-gtm-event="consultoria_cta_principal"
        data-gtm-value="consultoria_independiente_gratuita"
      >
        📅 Agenda consultoria exploratoria gratuita (30min)
      </a>
      
      <a 
        href="https://www.linkedin.com/in/gladis-morales-1a891a35/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex border-2 border-[#0077B5] text-[#0077B5] px-6 py-3 rounded-full font-semibold hover:bg-[#0077B5] hover:text-white transition min-h-[44px] justify-center items-center"
        aria-label="Conectar con Gladis Morales en LinkedIn - Consultoría Independiente ERP/CRM"
        data-gtm-event="consultoria_contacto_linkedin_click"
        data-gtm-value="linkedin_consultoria_gladis"
      >
        🔗 LinkedIn
      </a>
    </div>
  </div>

  {/* Schema LocalBusiness específico para Consultoría Independiente */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://lucy-consulting-evdq.vercel.app/servicios/consultoria-erp-crm#localbusiness",
        "name": "Lucy Consulting - Consultoría Independiente ERP/CRM",
        "description": "Consultoría independiente especializada en selección e implementación de sistemas ERP/CRM. Asesoría neutral sin conflictos comerciales en empresas de Guatemala, Panamá y Latinoamérica.",
        "url": "https://lucy-consulting-evdq.vercel.app/servicios/consultoria-erp-crm",
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
          "jobTitle": "Consultora Independiente ERP/CRM Senior"
        },
        "sameAs": [
          "https://www.linkedin.com/in/gladis-morales-1a891a35/"
        ],
        "serviceType": [
          "Consultoría Independiente ERP/CRM",
          "Selección de Sistemas Empresariales", 
          "Asesoría Neutral en Software",
          "Evaluación Técnica de ERP/CRM"
        ],
        "knowsAbout": [
          "Odoo ERP", "SAP ERP", "NetSuite ERP", "Microsoft Dynamics ERP",
          "Selección ERP", "Consultoría Independiente", "Asesoría Neutral"
        ]
      })
    }}
  />
</section>

      </main>
    </div>
  )
}