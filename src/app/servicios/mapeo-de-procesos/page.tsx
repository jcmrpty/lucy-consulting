import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

// ✅ METADATA optimizada para Mapeo de Procesos
export const metadata: Metadata = {
  title: 'Mapeo de Procesos Empresariales | Consultoría Lean Six Sigma Guatemala',
  description: 'Consultoría independiente en mapeo y optimización de procesos empresariales. Metodologías Lean Six Sigma en Guatemala y Panamá. +25 años optimizando empresas en Centroamérica.',
  
  keywords: [
    'mapeo de procesos empresariales',
    'consultoría Lean Six Sigma',
    'optimización procesos Guatemala',
    'mapeo procesos Panamá',
    'consultoría procesos Centroamérica',
    'automatización procesos empresas',
    'metodologías Lean Six Sigma',
    'optimización empresas Latinoamérica'
  ],
  
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: 'https://lucy-consulting-evdq.vercel.app/servicios/mapeo-de-procesos',
  },
  
  openGraph: {
    title: 'Mapeo de Procesos Empresariales | Consultoría Lean Six Sigma Centroamérica',
    description: 'Especialistas en mapeo y optimización de procesos empresariales. Metodologías Lean Six Sigma para empresas en Guatemala y Panamá.',
    url: 'https://lucy-consulting-evdq.vercel.app/servicios/mapeo-de-procesos',
    type: 'website',
    images: [
      {
        url: 'https://lucy-consulting-evdq.vercel.app/images/mapeo-procesos-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mapeo procesos empresariales consultoría Lean Six Sigma Guatemala Panamá Centroamérica'
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Mapeo de Procesos Empresariales | Consultoría Lean Six Sigma Guatemala',
    description: 'Consultoría independiente en optimización de procesos. Metodologías Lean Six Sigma en Guatemala y Panamá.',
  },
}

export default function MapeoProcesosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101D2B] text-white font-sans">
      {/* MAIN wrapper semántico */}
      <main>
        
        {/* ✅ SECCIÓN 1: HERO - COMPLETADA */}
        <section className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-crm.jpeg"
              alt="Mapeo procesos empresariales consultoría Lean Six Sigma metodologías optimización Guatemala Panamá Centroamérica"
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2A]/60 via-[#0F1C2A]/50 to-[#0F1C2A]/70"></div>
          </div>

          <div className="relative z-10 max-w-6xl px-6">
            {/* H1 optimizado para Mapeo de Procesos */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#3574E3] block mb-2">
                Mapeo de Procesos Empresariales
              </span>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl block mb-2">
                Consultoría Especializada Lean Six Sigma
              </span>
              <span className="text-[#60A5FA] text-xl md:text-3xl lg:text-4xl block">

              </span>
            </h1>
            
            {/* Párrafo optimizado específico para Mapeo */}
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Analizamos y optimizamos <strong>procesos empresariales</strong> usando metodologías 
              <strong> Lean Six Sigma</strong>. Identificamos ineficiencias, reducimos costos operativos 
              y mejoramos productividad para <strong>empresas en Latinoamérica</strong>.
            </p>
            
            {/* CTAs Hero específicos para Mapeo */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/mocawebpty/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white text-lg shadow-lg hover:scale-105 transition duration-200 min-h-[44px] min-w-[44px]"
                aria-label="Agendar consultoría mapeo procesos empresariales Guatemala Panamá"
                data-gtm-event="mapeo_hero_calendly_click"
                data-gtm-value="consultoria_mapeo_gratuita"
              >
                📅 Agenda cita exploratoria gratuita (30min)
              </a>
             
            </div>
          </div>
        </section>
{/* ✅ SECCIÓN 2: ¿QUÉ INCLUYE NUESTRO SERVICIO MAPEO? - COMPLETADA */}
<section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F1C2A] relative">
        ¿Qué incluye nuestra consultoría en mapeo de procesos empresariales en Latinoamérica?
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
        Servicios especializados en <strong className="text-[#3574E3]">optimización de procesos</strong> usando 
        <strong className="text-[#0F1C2A]"> metodologías Lean Six Sigma</strong>
      </p>
    </header>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      
      {/* Servicio 1: Diagnóstico As-Is */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🔍</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Diagnóstico de Procesos Actuales (As-Is)
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Realizamos <strong>mapeo de procesos</strong> detallado mediante entrevistas, observación directa y análisis de datos para empresas guatemaltecas. Identificamos cuellos de botella, redundancias y riesgos operativos usando <strong>metodologías Lean Six Sigma</strong>. Nuestra <strong>consultoría independiente</strong> se especializa en <strong>optimización de procesos</strong> para <strong>empresas en Guatemala</strong> y <strong>Latinoamérica</strong>.
        </p>
      </article>

      {/* Servicio 2: Diseño To-Be */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">⚙️</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Diseño de Procesos Optimizados (To-Be)
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Diseñamos nuevos procesos empresariales eliminando desperdicios e ineficiencias identificadas en el diagnóstico. Creamos <strong>estandarización y documentación</strong> completa mediante diagramas BPMN, flujogramas y políticas operativas. Aplicamos <strong>metodologías Lean Six Sigma</strong> para garantizar <strong>optimización de procesos</strong> sostenible en <strong>empresas guatemaltecas</strong>.
        </p>
      </article>

      {/* Servicio 3: Transformación Digital */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🚀</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Preparación para Transformaciones Digitales
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Adaptamos procesos empresariales existentes a soluciones tecnológicas como ERP, RPA, CRM y BPM. Brindamos soporte especializado en definición de requerimientos funcionales y análisis de impacto. Facilitamos la <strong>automatización de procesos</strong> para <strong>empresas en Guatemala</strong> durante su <strong>transformación digital</strong>.
        </p>
      </article>

      {/* Servicio 4: Capacitación */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">🎓</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Capacitación y Gestión del Cambio
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Formamos líderes y equipos operativos sobre nuevos procesos optimizados y mejores prácticas de trabajo. Implementamos <strong>gestión del cambio organizacional</strong> especializada para garantizar adopción exitosa. Nuestra <strong>asesoría tecnológica</strong> asegura transiciones suaves en <strong>organizaciones de Latinoamérica</strong>.
        </p>
      </article>

      {/* Servicio 5: Mejora Continua */}
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/80 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-2xl font-bold">📈</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A] group-hover:text-[#3574E3] transition-colors">
          Medición de Impacto y Mejora Continua
        </h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Definimos métricas de desempeño y establecemos mecanismos de monitoreo para procesos optimizados. Proporcionamos recomendaciones para ajustes, escalamiento de mejoras y evolución continua. Garantizamos <strong>mejora continua</strong> sostenible usando <strong>Lean Six Sigma</strong> en <strong>empresas guatemaltecas</strong>.
        </p>
      </article>

    </div>
  </div>
</section>
       {/* ✅ SECCIÓN 3: CASOS DE ÉXITO MAPEO - COMPLETADA */}
<section className="py-20 bg-gradient-to-br from-[#0F1C2A] via-[#1a2332] to-[#0F1C2A] text-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative">
        Casos de Éxito en Mapeo de Procesos - Guatemala y Panamá
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
        Resultados reales de <strong className="text-white">optimización de procesos</strong> con 
        <strong className="text-white"> metodologías Lean Six Sigma</strong>
      </p>
    </header>

    <div className="grid lg:grid-cols-2 gap-12">
      
      {/* Caso 1: Agencia de Carga Guatemala */}
      <article className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 hover:border-[#3574E3]/50 transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mr-4">
            <span className="text-white text-2xl font-bold">🚛</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Agencia de Carga - Guatemala</h3>
            <p className="text-[#60A5FA] font-semibold">Mapeo de procesos y optimización logística - 5 meses</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Situación:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Agencia de carga guatemalteca</strong> con 80 empleados enfrentaba tiempos excesivos en despacho de mercancías, documentación manual y falta de trazabilidad en operaciones logísticas. Procesos desorganizados generaban retrasos, quejas de clientes y sobrecostos operativos en el corredor logístico centroamericano.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Nuestro rol:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Consultoría independiente</strong> especializada en <strong className="text-white">mapeo de procesos</strong> logísticos. Realizamos diagnóstico As-Is completo, identificamos cuellos de botella críticos y diseñamos procesos To-Be optimizados. Aplicamos <strong className="text-white">metodologías Lean Six Sigma</strong> para <strong className="text-white">optimización de procesos</strong> en <strong className="text-white">empresas guatemaltecas</strong> del sector logístico.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#3574E3] mb-3">Resultados:</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Reducción 45% en tiempos de despacho</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Eliminación de 8 pasos innecesarios en documentación</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Mejora 60% en trazabilidad de mercancías</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Ahorro anual de $42,000 USD en costos operativos</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* Caso 2: Holding Empresarial Panamá */}
      <article className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 hover:border-[#3574E3]/50 transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3574E3] to-[#60A5FA] rounded-xl flex items-center justify-center mr-4">
            <span className="text-white text-2xl font-bold">🏢</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Holding Empresarial - Panamá</h3>
            <p className="text-[#60A5FA] font-semibold">Mapeo procesos corporativos multi-división - 7 meses</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Situación:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Holding panameño</strong> con 3 divisiones de negocio (financiera, inmobiliaria, comercial) operaba con procesos fragmentados, duplicidad de funciones administrativas y falta de estandarización entre divisiones. Sin <strong className="text-white">automatización de procesos</strong> ni métricas unificadas de desempeño corporativo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-3">Nuestro rol:</h4>
            <p className="text-blue-100 leading-relaxed text-justify">
              <strong className="text-white">Asesoría tecnológica</strong> en <strong className="text-white">mapeo de procesos empresariales</strong> transversales. Diagnosticamos procesos en las 3 divisiones, identificamos sinergias operativas y diseñamos modelo de procesos compartidos. <strong className="text-white">Consultoría Lean Six Sigma</strong> para <strong className="text-white">empresas en Panamá</strong> con estructura multi-negocio.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-[#3574E3] mb-3">Resultados:</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Reducción 35% en costos administrativos compartidos</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Estandarización de 12 procesos críticos entre divisiones</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>Mejora 70% en reporting ejecutivo consolidado</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3574E3] mr-2 mt-1">✓</span>
                <span>ROI del 240% en primer año de implementación</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
{/* ✅ SECCIÓN 4: FAQ MAPEO - COMPLETADA */}
<section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#3574E3]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#60A5FA]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="max-w-4xl mx-auto px-6 relative z-10">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F1C2A] relative">
        Preguntas Frecuentes sobre Mapeo de Procesos Empresariales en Latinoamérica
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
        Resolvemos las dudas más comunes sobre <strong className="text-[#3574E3]">optimización de procesos</strong> y 
        <strong className="text-[#0F1C2A]"> metodologías Lean Six Sigma</strong>
      </p>
    </header>

    <div className="space-y-4">
      
      {/* Pregunta 1 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Cuáles son los beneficios del mapeo de procesos para empresas?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          El <strong className="text-[#0F1C2A]">mapeo de procesos</strong> ofrece múltiples beneficios: <strong className="text-[#0F1C2A]">A)</strong> Reducción de tiempos, costos y errores operativos mediante <strong className="text-[#0F1C2A]">optimización de procesos</strong>. <strong className="text-[#0F1C2A]">B)</strong> Mayor claridad en roles, responsabilidades y flujos de trabajo usando <strong className="text-[#0F1C2A]">metodologías Lean Six Sigma</strong>. <strong className="text-[#0F1C2A]">C)</strong> Preparación estructurada para <strong className="text-[#0F1C2A]">automatización de procesos</strong> o certificaciones de calidad. <strong className="text-[#0F1C2A]">D)</strong> Mejora en experiencia del cliente y calidad del servicio. <strong className="text-[#0F1C2A]">E)</strong> Fomento de cultura organizacional orientada a eficiencia y <strong className="text-[#0F1C2A]">mejora continua</strong> en <strong className="text-[#0F1C2A]">empresas de Latinoamérica</strong>.
        </div>
      </details>

      {/* Pregunta 2 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Cuánto tiempo toma un proyecto de mapeo de procesos?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Los proyectos de <strong className="text-[#0F1C2A]">mapeo de procesos</strong> varían entre 3-8 meses dependiendo de la complejidad organizacional y número de procesos a analizar. Aplicamos <strong className="text-[#0F1C2A]">metodologías Lean Six Sigma</strong> con fases estructuradas: diagnóstico As-Is (4-6 semanas), diseño To-Be (6-8 semanas), implementación (8-12 semanas) y seguimiento. La <strong className="text-[#0F1C2A]">consultoría independiente</strong> garantiza <strong className="text-[#0F1C2A]">optimización de procesos</strong> eficiente en <strong className="text-[#0F1C2A]">organizaciones centroamericanas</strong>.
        </div>
      </details>

      {/* Pregunta 3 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Qué metodologías usan para optimización de procesos?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Utilizamos <strong className="text-[#0F1C2A]">metodologías Lean Six Sigma</strong> reconocidas internacionalmente, adaptadas al contexto latinoamericano. Incluimos técnicas de mapeo BPMN, análisis de valor agregado, identificación de desperdicios (mudas), diseño de flujos optimizados y métricas de desempeño. Nuestra <strong className="text-[#0F1C2A]">asesoría tecnológica</strong> combina mejores prácticas globales con realidades operativas locales para <strong className="text-[#0F1C2A]">automatización de procesos</strong> efectiva en <strong className="text-[#0F1C2A]">empresas de Guatemala</strong> y la región.
        </div>
      </details>

      {/* Pregunta 4 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿El mapeo de procesos prepara para transformación digital?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Absolutamente. El <strong className="text-[#0F1C2A]">mapeo de procesos empresariales</strong> es fundamental para <strong className="text-[#0F1C2A]">transformación digital</strong> exitosa. Identificamos procesos candidatos para <strong className="text-[#0F1C2A]">automatización</strong>, definimos requerimientos funcionales para sistemas ERP/CRM y preparamos a las organizaciones para adopción tecnológica. La <strong className="text-[#0F1C2A]">consultoría Lean Six Sigma</strong> asegura que los procesos estén optimizados antes de implementar soluciones digitales en <strong className="text-[#0F1C2A]">empresas de Latinoamérica</strong>.
        </div>
      </details>

      {/* Pregunta 5 */}
      <details className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden group hover:bg-white/80 hover:shadow-xl transition-all duration-300">
        <summary className="p-6 cursor-pointer font-semibold text-[#0F1C2A] text-lg hover:text-[#3574E3] transition-colors">
          ¿Qué sectores se benefician más del mapeo de procesos?
        </summary>
        <div className="px-6 pb-6 text-gray-700 leading-relaxed text-justify">
          Todos los sectores se benefician del <strong className="text-[#0F1C2A]">mapeo de procesos</strong>, especialmente manufactura, servicios financieros, logística, retail y agroindustria. Las empresas en estos sectores obtienen mayor impacto por la complejidad de sus operaciones. Nuestra <strong className="text-[#0F1C2A]">consultoría independiente</strong> tiene experiencia comprobada en <strong className="text-[#0F1C2A]">optimización de procesos</strong> para diversos sectores, aplicando <strong className="text-[#0F1C2A]">metodologías Lean Six Sigma</strong> adaptadas a cada industria en <strong className="text-[#0F1C2A]">Guatemala</strong> y <strong className="text-[#0F1C2A]">Latinoamérica</strong>.
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
            "name": "¿Cuáles son los beneficios del mapeo de procesos para empresas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El mapeo de procesos ofrece múltiples beneficios: A) Reducción de tiempos, costos y errores operativos mediante optimización de procesos. B) Mayor claridad en roles, responsabilidades y flujos de trabajo usando metodologías Lean Six Sigma. C) Preparación estructurada para automatización de procesos o certificaciones de calidad. D) Mejora en experiencia del cliente y calidad del servicio. E) Fomento de cultura organizacional orientada a eficiencia y mejora continua en empresas de Latinoamérica."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo toma un proyecto de mapeo de procesos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los proyectos de mapeo de procesos varían entre 3-8 meses dependiendo de la complejidad organizacional y número de procesos a analizar. Aplicamos metodologías Lean Six Sigma con fases estructuradas: diagnóstico As-Is, diseño To-Be, implementación y seguimiento. La consultoría independiente garantiza optimización de procesos eficiente en organizaciones centroamericanas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué metodologías usan para optimización de procesos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Utilizamos metodologías Lean Six Sigma reconocidas internacionalmente, adaptadas al contexto latinoamericano. Incluimos técnicas de mapeo BPMN, análisis de valor agregado, identificación de desperdicios, diseño de flujos optimizados y métricas de desempeño. Nuestra asesoría tecnológica combina mejores prácticas globales con realidades operativas locales para automatización de procesos efectiva."
            }
          },
          {
            "@type": "Question",
            "name": "¿El mapeo de procesos prepara para transformación digital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutamente. El mapeo de procesos empresariales es fundamental para transformación digital exitosa. Identificamos procesos candidatos para automatización, definimos requerimientos funcionales para sistemas ERP/CRM y preparamos a las organizaciones para adopción tecnológica. La consultoría Lean Six Sigma asegura que los procesos estén optimizados antes de implementar soluciones digitales."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué sectores se benefician más del mapeo de procesos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Todos los sectores se benefician del mapeo de procesos, especialmente manufactura, servicios financieros, logística, retail y agroindustria. Nuestra consultoría independiente tiene experiencia comprobada en optimización de procesos para diversos sectores, aplicando metodologías Lean Six Sigma adaptadas a cada industria en Guatemala y Latinoamérica."
            }
          }
        ]
      })
    }}
  />
</section>

      {/* ✅ SECCIÓN 5: CTA FINAL MAPEO - COMPLETADA */}
<section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 text-gray-800">
  <div className="max-w-4xl mx-auto px-6 text-center">
    {/* H2 optimizado para conversión + SEO */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1C2A] relative">
      ¿Listo para optimizar tus procesos empresariales con metodologías Lean Six Sigma?
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full"></div>
    </h2>
    
    {/* Párrafo optimizado para conversión + keywords */}
    <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
      Agenda una <strong>consultoría gratuita</strong> y descubre cómo nuestro 
      <strong> mapeo de procesos especializado</strong> puede reducir costos, eliminar desperdicios 
      y preparar tu <strong> empresa en Guatemala</strong> para la <strong>transformación digital</strong> en <strong>Latinoamérica</strong>.
    </p>

    {/* Datos de contacto con información para LLMs */}
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">WhatsApp</h3>
        <a 
          href="https://wa.me/50245172699?text=Hola%2C%20me%20interesa%20una%20consultor%C3%ADa%20sobre%20mapeo%20de%20procesos%20empresariales" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-lg hover:text-[#3574E3] transition"
          aria-label="Contactar Lucy Consulting por WhatsApp para mapeo de procesos"
          data-gtm-event="mapeo_contacto_whatsapp_click"
          data-gtm-value="whatsapp_mapeo_directo"
        >
          +502 4517 2699
        </a>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">Email</h3>
        <a 
          href="mailto:lucyconsultinggt@gmail.com?subject=Consultoría Mapeo de Procesos Empresariales" 
          className="text-sm hover:text-[#3574E3] transition break-words"
          aria-label="Enviar email a Lucy Consulting para mapeo de procesos"
          data-gtm-event="mapeo_contacto_email_click"
          data-gtm-value="email_mapeo_directo"
        >
          lucyconsultinggt@gmail.com
        </a>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <h3 className="font-semibold text-[#3574E3] mb-2">Cobertura</h3>
        <p className="text-lg">Guatemala - Panamá</p>
        <p className="text-sm text-gray-600">Mapeo de procesos en Latinoamérica</p>
      </div>
    </div>

    {/* CTAs principales con tracking optimizado */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="https://calendly.com/mocawebpty/30min"
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition min-h-[44px] justify-center items-center"
        aria-label="Agendar consultoría gratuita mapeo de procesos empresariales"
        data-gtm-event="mapeo_cta_principal"
        data-gtm-value="consultoria_gratuita_mapeo"
      >
        📅 Agenda cita exploratoria gratuita (30min)
      </a>
      
      <a 
        href="https://www.linkedin.com/in/gladis-morales-1a891a35/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex border-2 border-[#0077B5] text-[#0077B5] px-6 py-3 rounded-full font-semibold hover:bg-[#0077B5] hover:text-white transition min-h-[44px] justify-center items-center"
        aria-label="Conectar con Gladis Morales en LinkedIn - Mapeo de Procesos"
        data-gtm-event="mapeo_contacto_linkedin_click"
        data-gtm-value="linkedin_mapeo_gladis"
      >
        🔗 LinkedIn
      </a>
    </div>
  </div>

  {/* Schema LocalBusiness específico para Mapeo de Procesos */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://lucy-consulting-evdq.vercel.app/servicios/mapeo-de-procesos#localbusiness",
        "name": "Lucy Consulting - Mapeo de Procesos Empresariales",
        "description": "Consultoría independiente especializada en mapeo y optimización de procesos empresariales usando metodologías Lean Six Sigma en empresas de Guatemala, Panamá y Latinoamérica.",
        "url": "https://lucy-consulting-evdq.vercel.app/servicios/mapeo-de-procesos",
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
          "jobTitle": "Especialista Lean Six Sigma"
        },
        "sameAs": [
          "https://www.linkedin.com/in/gladis-morales-1a891a35/"
        ],
        "serviceType": [
          "Mapeo de Procesos Empresariales",
          "Optimización de Procesos", 
          "Metodologías Lean Six Sigma",
          "Consultoría en Automatización de Procesos"
        ],
        "knowsAbout": [
          "Lean Six Sigma", "Mapeo de Procesos", "BPMN", "Optimización Empresarial",
          "Automatización de Procesos", "Mejora Continua", "Transformación Digital"
        ]
      })
    }}
  />
</section>

      </main>
    </div>
  )
}