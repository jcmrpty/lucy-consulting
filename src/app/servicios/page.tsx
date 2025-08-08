import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Servicios() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Lucy Consulting",
        "url": "https://www.lucyconsulting.com",
        "logo": "https://www.lucyconsulting.com/images/lucy-consulting-logo.png",
        "description": "Consultoría especializada en Project Management ERP/CRM y optimización de procesos para empresas en Latinoamérica",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "PA",
          "addressRegion": "Panamá"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+507-1234-5678",
          "contactType": "customer service",
          "email": "info@lucyconsulting.com"
        },
        "sameAs": [
          "https://linkedin.com/company/lucy-consulting"
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Project Management ERP/CRM",
        "provider": { "@type": "Organization", "name": "Lucy Consulting" },
        "description": "Servicio especializado de gestión de proyectos para implementaciones ERP y CRM. Incluye planificación estratégica, gestión del cambio, coordinación de stakeholders y control de calidad.",
        "areaServed": {
          "@type": "Place",
          "name": "Latinoamérica"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Elaboración y Mapeo de Procesos Empresariales",
        "provider": { "@type": "Organization", "name": "Lucy Consulting" },
        "description": "Análisis, documentación y optimización de procesos de negocio usando metodologías Lean Six Sigma y BPMN.",
        "areaServed": {
          "@type": "Place", 
          "name": "Latinoamérica"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Consultoría Independiente ERP/CRM",
        "provider": { "@type": "Organization", "name": "Lucy Consulting" },
        "description": "Acompañamiento neutral para selección e implementación de sistemas ERP y CRM con total independencia de proveedores.",
        "areaServed": {
          "@type": "Place",
          "name": "Latinoamérica"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué diferencia a Lucy Consulting de otras consultoras en Project Management ERP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lucy Consulting es completamente independiente y neutral. No vendemos software ni tenemos compromisos con proveedores específicos, permitiendo decisiones objetivas basadas únicamente en las necesidades del cliente."
        }
      },
      {
        "@type": "Question", 
        "name": "¿Lucy Consulting trabaja con empresas medianas o solo con grandes corporaciones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con empresas medianas (50-500 empleados) y grandes corporaciones, adaptando nuestros servicios al tamaño y complejidad de cada organización."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo dura un proyecto típico de implementación ERP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mapeo de procesos: 2-4 meses. Implementación ERP completa: 8-18 meses. Implementación CRM: 4-8 meses. La duración depende del alcance y complejidad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen servicios remotos o requieren presencia física?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos ambas modalidades. El 70% de servicios se ejecutan remotamente. Para actividades críticas como workshops y go-live recomendamos presencia física."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de seguimiento post-implementación ofrecen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Incluimos período de estabilización de 3-6 meses con soporte para incidencias, optimizaciones y servicios de mejora continua."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.lucyconsulting.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://www.lucyconsulting.com/servicios"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101D2B] text-white font-sans">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Servicios de Consultoría ERP/CRM | Project Management y Mapeo de Procesos | Lucy Consulting</title>
        <meta
          name="description"
          content="Servicios especializados en Project Management ERP/CRM, mapeo de procesos empresariales y consultoría independiente. Transformación digital exitosa para empresas en Latinoamérica."
        />
        <meta name="keywords" content="project management ERP, consultoría CRM, mapeo procesos, implementación ERP, consultor independiente, transformación digital, Lucy Consulting, Panamá" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.lucyconsulting.com/servicios" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Servicios de Consultoría ERP/CRM | Lucy Consulting" />
        <meta property="og:description" content="Project Management especializado en ERP/CRM, mapeo de procesos y consultoría independiente para empresas en Latinoamérica" />
        <meta property="og:url" content="https://www.lucyconsulting.com/servicios" />
        <meta property="og:site_name" content="Lucy Consulting" />
        <meta property="og:image" content="https://www.lucyconsulting.com/images/lucy-consulting-servicios-og.jpg" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios de Consultoría ERP/CRM | Lucy Consulting" />
        <meta name="twitter:description" content="Project Management especializado en ERP/CRM y mapeo de procesos para empresas en Latinoamérica" />
        <meta name="twitter:image" content="https://www.lucyconsulting.com/images/lucy-consulting-servicios-twitter.jpg" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-[#0F1C2A]/90 backdrop-blur-md shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16" role="navigation" aria-label="Navegación principal">
          <h1 className="text-2xl font-bold text-[#3574E3] tracking-wide">
            <Link href="/" aria-label="Lucy Consulting - Inicio">Lucy Consulting</Link>
          </h1>

          <div className="hidden md:flex space-x-6 text-white/90 text-sm font-medium">
            <Link href="/#quienes-somos" className="hover:text-[#3574E3] transition">Quiénes Somos</Link>
            <Link href="/servicios" className="hover:text-[#3574E3] transition text-[#3574E3]" aria-current="page">Servicios</Link>
            <Link href="/#valores" className="hover:text-[#3574E3] transition">Valores</Link>
            <a href="#faq" className="hover:text-[#3574E3] transition">FAQ</a>
            <a href="#contacto" className="hover:text-[#3574E3] transition">Contacto</a>
          </div>

          <a
            href="#contacto"
            className="hidden md:inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-5 py-2 rounded-full font-semibold text-white shadow-md hover:scale-105 transition"
            aria-label="Agendar consultoría gratuita"
          >
            Agenda una Reunión
          </a>
        </nav>
      </header>

      {/* HERO */}
      <main>
        <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/project-management-erp-crm-consulting-hero.jpg"
              alt="Equipo de consultores especializados en Project Management ERP y CRM"
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2A]/60 via-[#0F1C2A]/50 to-[#0F1C2A]/70"></div>
          </div>

          <div className="relative z-10 max-w-4xl px-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Servicios Especializados en <span className="text-[#3574E3]">Project Management ERP/CRM</span>
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Consultoría independiente especializada en Project Management para implementaciones ERP/CRM, 
              mapeo y optimización de procesos empresariales para empresas en Latinoamérica.
            </p>
          </div>
        </section>

        {/* SERVICIOS PRINCIPALES */}
      <section id="servicios" className="relative w-full py-20 bg-white text-gray-800">
  <div className="max-w-7xl mx-auto px-6">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1C2A]">
        Nuestros Tres Servicios Principales de Consultoría
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
        Lucy Consulting ofrece tres líneas de servicio complementarias diseñadas para asegurar 
        el éxito completo de proyectos de transformación digital y optimización operativa 
        en empresas medianas y grandes de Latinoamérica.
      </p>
    </header>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Servicio 1 */}
      <article className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <div className="relative w-full h-48">
          <Image
            src="/images/imagen-pm-servicios.jpeg"
            alt="Consultor Project Manager liderando implementación ERP"
            fill
            className="object-cover object-center rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-between p-6 grow">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A]">
              Project Management ERP/CRM Especializado
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lideramos implementaciones completas de sistemas ERP y CRM desde planificación 
              hasta go-live exitoso. Incluye gestión estratégica, coordinación de stakeholders, 
              gestión del cambio organizacional y control de riesgos.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="#contacto"
              className="inline-block border border-[#3574E3] text-[#3574E3] font-medium px-4 py-2 rounded-full hover:bg-[#3574E3] hover:text-white transition text-center w-full"
              aria-label="Información Project Management ERP/CRM"
            >
              Más información sobre Project Management
            </a>
          </div>
        </div>
      </article>

      {/* Servicio 2 */}
      <article className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <div className="relative w-full h-48">
          <Image
            src="/images/imagen-procesos-servicios.jpeg"
            alt="Consultor mapeando procesos empresariales"
            fill
            className="object-cover object-center rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-between p-6 grow">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A]">
              Elaboración y Mapeo de Procesos Empresariales
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Análisis integral y optimización de procesos mediante metodologías Lean Six Sigma. 
              Incluye levantamiento AS-IS, diseño TO-BE optimizado e implementación de mejoras 
              para operaciones más ágiles.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="#contacto"
              className="inline-block border border-[#3574E3] text-[#3574E3] font-medium px-4 py-2 rounded-full hover:bg-[#3574E3] hover:text-white transition text-center w-full"
              aria-label="Información Mapeo de Procesos"
            >
              Más información sobre Mapeo de Procesos
            </a>
          </div>
        </div>
      </article>

      {/* Servicio 3 */}
      <article className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <div className="relative w-full h-48">
          <Image
            src="/images/imagen-erp-servicios.jpeg"
            alt="Consultor independiente ERP/CRM analizando proveedores"
            fill
            className="object-cover object-center rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-between p-6 grow">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#0F1C2A]">
              Consultoría Independiente ERP/CRM
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Acompañamiento completamente neutral para selección e implementación. 
              Sin vínculos comerciales con proveedores, garantizamos decisiones objetivas 
              basadas exclusivamente en necesidades del cliente.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="#contacto"
              className="inline-block border border-[#3574E3] text-[#3574E3] font-medium px-4 py-2 rounded-full hover:bg-[#3574E3] hover:text-white transition text-center w-full"
              aria-label="Información Consultoría Independiente"
            >
              Más información sobre Consultoría Independiente
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

        {/* PREGUNTAS FRECUENTES */}
        <section id="faq" className="relative w-full py-20 bg-[#0F1C2A] text-white">
          <div className="max-w-4xl mx-auto px-6">
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#60A5FA]">
                Preguntas Frecuentes sobre Nuestros Servicios
              </h2>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Resolvemos las dudas más comunes sobre nuestra metodología de trabajo, experiencia 
                en implementaciones ERP/CRM y modalidades de servicio en Latinoamérica.
              </p>
            </header>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group border border-white/20 rounded-lg p-4 transition bg-white/5 backdrop-blur-sm">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-white list-none">
                  <span>¿Qué diferencia a Lucy Consulting de otras consultoras en Project Management ERP?</span>
                  <span className="ml-2 transition-transform group-open:rotate-180 text-[#60A5FA] text-xl">▼</span>
                </summary>
                <div className="mt-4 text-blue-100 leading-relaxed">
                  <p className="mb-3">
                    <strong>Lucy Consulting se diferencia por ser completamente independiente y neutral.</strong> 
                    No vendemos software ERP ni CRM, ni tenemos compromisos comerciales con proveedores 
                    como SAP, Oracle, Microsoft o cualquier otro.
                  </p>
                  <p>
                    Esta independencia total nos permite actuar exclusivamente en beneficio de nuestros clientes, 
                    tomando decisiones objetivas basadas únicamente en sus necesidades reales de negocio.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group border border-white/20 rounded-lg p-4 transition bg-white/5 backdrop-blur-sm">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-white list-none">
                  <span>¿Lucy Consulting trabaja con empresas medianas o solo con grandes corporaciones?</span>
                  <span className="ml-2 transition-transform group-open:rotate-180 text-[#60A5FA] text-xl">▼</span>
                </summary>
                <div className="mt-4 text-blue-100 leading-relaxed">
                  <p className="mb-3">
                    <strong>Trabajamos tanto con empresas medianas (50-500 empleados) como con grandes corporaciones (500+ empleados)</strong> 
                    que buscan profesionalizar sus procesos e implementaciones tecnológicas.
                  </p>
                  <p>
                    Para empresas medianas ofrecemos enfoques ágiles optimizando recursos. 
                    Para grandes corporaciones desarrollamos metodologías robustas con governance formal.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group border border-white/20 rounded-lg p-4 transition bg-white/5 backdrop-blur-sm">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-white list-none">
                  <span>¿Cuánto tiempo dura un proyecto típico de implementación ERP?</span>
                  <span className="ml-2 transition-transform group-open:rotate-180 text-[#60A5FA] text-xl">▼</span>
                </summary>
                <div className="mt-4 text-blue-100 leading-relaxed">
                  <p className="mb-3">La duración varía según el tipo y alcance:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Mapeo de procesos empresariales:</strong> 2-4 meses</li>
                    <li><strong>Implementación ERP completa:</strong> 8-18 meses</li>
                    <li><strong>Implementación CRM:</strong> 4-8 meses</li>
                    <li><strong>Consultoría de selección:</strong> 3-6 meses</li>
                  </ul>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group border border-white/20 rounded-lg p-4 transition bg-white/5 backdrop-blur-sm">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-white list-none">
                  <span>¿Ofrecen servicios remotos o requieren presencia física?</span>
                  <span className="ml-2 transition-transform group-open:rotate-180 text-[#60A5FA] text-xl">▼</span>
                </summary>
                <div className="mt-4 text-blue-100 leading-relaxed">
                  <p className="mb-3">
                    <strong>Ofrecemos ambas modalidades.</strong> El 70% de servicios se ejecutan remotamente 
                    con excelentes resultados usando herramientas de colaboración digital.
                  </p>
                  <p>
                    Para workshops críticos, capacitaciones presenciales y go-live recomendamos 
                    presencia física para maximizar efectividad.
                  </p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group border border-white/20 rounded-lg p-4 transition bg-white/5 backdrop-blur-sm">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-white list-none">
                  <span>¿Qué tipo de seguimiento post-implementación ofrecen?</span>
                  <span className="ml-2 transition-transform group-open:rotate-180 text-[#60A5FA] text-xl">▼</span>
                </summary>
                <div className="mt-4 text-blue-100 leading-relaxed">
                  <p className="mb-3">
                    <strong>Incluimos período de estabilización post-implementación de 3-6 meses.</strong> 
                    Durante este tiempo ofrecemos:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Soporte para resolver incidencias y ajustes menores</li>
                    <li>Optimización de configuraciones basada en uso real</li>
                    <li>Seguimiento de adopción y mejora continua</li>
                    <li>Revisiones trimestrales de performance</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* INFORMACIÓN DE CONTACTO VISIBLE */}
        <section className="py-12 bg-gray-50 text-gray-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-6 text-[#0F1C2A]">Información de Contacto</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-[#3574E3] mb-2">Teléfono</h3>
                <p className="text-lg">+507-1234-5678</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#3574E3] mb-2">Email</h3>
                <p className="text-lg">info@lucyconsulting.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#3574E3] mb-2">Ubicación</h3>
                <p className="text-lg">Panamá, Centroamérica</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="relative w-full py-20 bg-white text-gray-800 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1C2A]">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Agenda una reunión gratuita y descubre cómo nuestros servicios pueden 
              impulsar el éxito de tu próximo proyecto de transformación digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+50712345678"
                className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition"
                aria-label="Llamar para agendar consultoría gratuita"
              >
                Llamar Ahora: +507-1234-5678
              </a>
              <a
                href="mailto:info@lucyconsulting.com"
                className="inline-flex border border-[#3574E3] text-[#3574E3] px-6 py-3 rounded-full font-semibold hover:bg-[#3574E3] hover:text-white transition"
                aria-label="Enviar email de consulta"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0F1C2A] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-100">
            © 2024 Lucy Consulting. Consultoría especializada en Project Management ERP/CRM 
            y optimización de procesos para empresas en Latinoamérica.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/servicios" className="text-blue-200 hover:text-white transition">Servicios</Link>
            <a href="#contacto" className="text-blue-200 hover:text-white transition">Contacto</a>
            <Link href="/privacy" className="text-blue-200 hover:text-white transition">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}