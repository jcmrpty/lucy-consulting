import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lucy Consulting",
    "url": "https://www.lucyconsulting.com",
    "logo": "https://www.lucyconsulting.com/images/lucy-consulting-logo.png",
    "description": "Consultoría independiente especializada en Project Management ERP/CRM y optimización de procesos para empresas de Centroamérica y Latinoamérica",
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
    "founder": {
      "@type": "Person",
      "name": "Gladis Morales",
      "jobTitle": "Directora General",
      "description": "Licenciada en Administración de Sistemas de Información y Maestría en Administración de la Confiabilidad. Más de 25 años de experiencia en comercialización de ERPs y CRMs."
    },
    "sameAs": [
      "https://linkedin.com/company/lucy-consulting"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Centroamérica y Latinoamérica"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Project Management ERP/CRM",
        "description": "Lideramos implementaciones de ERP y CRM asegurando alineación estratégica, gestión del cambio y entregas sin riesgos",
        "provider": { "@type": "Organization", "name": "Lucy Consulting" }
      },
      {
        "@type": "Service", 
        "name": "Elaboración y Mapeo de Procesos",
        "description": "Analizamos y optimizamos procesos de negocio, reduciendo ineficiencias y alineándolos con los objetivos estratégicos",
        "provider": { "@type": "Organization", "name": "Lucy Consulting" }
      },
      {
        "@type": "Service",
        "name": "Consultor Independiente ERP/CRM", 
        "description": "Acompañamiento neutral en la selección e implementación de sistemas ERP o CRM, garantizando decisiones objetivas",
        "provider": { "@type": "Organization", "name": "Lucy Consulting" }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101D2B] text-white font-sans">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lucy Consulting | Project Management ERP/CRM & Optimización de Procesos | Centroamérica</title>
        <meta
          name="description"
          content="Consultoría independiente especializada en Project Management ERP/CRM y optimización de procesos para empresas de Centroamérica y Latinoamérica. Transformación digital exitosa con más de 25 años de experiencia."
        />
        <meta name="keywords" content="consultoría ERP, project management CRM, optimización procesos, transformación digital, Centroamérica, Latinoamérica, Lucy Consulting, Gladis Morales" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.lucyconsulting.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucy Consulting | Consultoría ERP/CRM & Optimización de Procesos" />
        <meta property="og:description" content="Transformación digital exitosa para empresas de Latinoamérica. Especialistas en Project Management ERP/CRM, optimización de procesos y consultoría independiente." />
        <meta property="og:url" content="https://www.lucyconsulting.com" />
        <meta property="og:site_name" content="Lucy Consulting" />
        <meta property="og:image" content="https://www.lucyconsulting.com/images/lucy-consulting-home-og.jpg" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucy Consulting | Consultoría ERP/CRM & Optimización de Procesos" />
        <meta name="twitter:description" content="Transformación digital exitosa con más de 25 años de experiencia en Latinoamérica" />
        <meta name="twitter:image" content="https://www.lucyconsulting.com/images/lucy-consulting-home-twitter.jpg" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </Head>

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-[#0F1C2A]/90 backdrop-blur-md shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16" role="navigation" aria-label="Navegación principal">
          <h1 className="text-2xl font-bold text-[#3574E3] tracking-wide">
            <Link href="/" aria-label="Lucy Consulting - Inicio">Lucy Consulting</Link>
          </h1>

          <div className="hidden md:flex space-x-6 text-white/90 text-sm font-medium">
            <a href="#quienes-somos" className="hover:text-[#3574E3] transition">Quiénes Somos</a>
            <Link href="/servicios" className="hover:text-[#3574E3] transition">Servicios</Link>
            <a href="#valores" className="hover:text-[#3574E3] transition">Valores</a>
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
        <section className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/digital-transformation-consulting-hero.jpg"
              alt="Consultoría de transformación digital con equipo especializado en ERP y CRM"
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2A]/60 via-[#0F1C2A]/50 to-[#0F1C2A]/70"></div>
          </div>

          <div className="relative z-10 max-w-5xl px-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#3574E3]">Project Management ERP/CRM</span>
              <br />
              <span className="text-white">& Optimización de Procesos</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Consultoría independiente para implementaciones ERP y CRM en empresas de Latinoamérica, 
              optimizando procesos, asegurando proyectos exitosos y una adopción tecnológica sin riesgos.
            </p>
            <a
              href="#contacto"
              className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-4 rounded-full font-semibold text-white text-lg shadow-lg hover:scale-105 transition"
              aria-label="Agendar reunión de consultoría"
            >
              Agenda una Reunión
            </a>
          </div>
        </section>

       {/* QUIÉNES SOMOS */}
<section id="quienes-somos" className="relative w-full py-20 bg-white text-gray-800">
  <div className="max-w-7xl mx-auto px-6">
    <header className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1C2A]">
        Quiénes Somos
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
        En <strong>Lucy Consulting</strong> lideramos proyectos de transformación digital con un enfoque especializado en <strong>Project Management</strong>, <strong>ERP/CRM</strong> y <strong>mapeo de procesos</strong>, asegurando eficiencia, control y resultados concretos.
      </p>
    </header>
  </div>
</section>

{/* NUESTRO EQUIPO ESPECIALIZADO */}
<section className="relative w-full py-20 bg-[#0F1C2A] text-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-white">
          Nuestro Enfoque Especializado
        </h3>
        <p className="text-blue-100 mb-6 leading-relaxed">
          Nos especializamos en <strong>Project Management para ERP/CRM</strong>, <strong>optimización de procesos</strong> 
          y <strong>consultoría independiente</strong> para implementaciones tecnológicas, asegurando una 
          <strong> adopción eficiente y sin riesgos</strong>.
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-blue-100">Enfoque estratégico en cada implementación</span>
          </div>
          <div className="flex items-start">
            <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-blue-100">Resultados tangibles y medibles</span>
          </div>
          <div className="flex items-start">
            <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-blue-100">Adopción tecnológica sin riesgos</span>
          </div>
          <div className="flex items-start">
            <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-blue-100">Especialización regional en Latinoamérica</span>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/erp_implementation.webp"
          alt="Equipo de Lucy Consulting desarrollando estrategia de transformación digital"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </div>
</section>

   {/* DIRECTORA GENERAL */} 
<section className="relative w-full py-20 bg-gray-50 text-gray-800">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Imagen */}
      <div className="order-2 lg:order-1">
        <Image
          src="/images/foto-lucy.jpg"
          alt="Gladis Morales, Directora General de Lucy Consulting, especialista en ERP y CRM"
          width={300}
          height={400}
          className="rounded-2xl shadow-lg mx-auto"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Texto */}
      <div className="order-1 lg:order-2">
        <h2 className="text-3xl font-bold mb-4 text-[#0F1C2A]">
          Gladis Morales – Directora General
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          Licenciada en Administración de Sistemas de Información y Maestría en Administración de la Confiabilidad.
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="w-2 h-2 bg-[#3574E3] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700">Más de <strong>25 años</strong> de experiencia en comercialización de ERPs y CRMs.</span>
          </div>
          <div className="flex items-start">
            <span className="w-2 h-2 bg-[#3574E3] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700"><strong>6 años</strong> liderando Project Management de proyectos tecnológicos.</span>
          </div>
          <div className="flex items-start">
            <span className="w-2 h-2 bg-[#3574E3] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700"><strong>5 años</strong> como consultora independiente en levantamiento de procesos.</span>
          </div>
          <div className="flex items-start">
            <span className="w-2 h-2 bg-[#3574E3] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700">Certificada en <strong>SCRUM Foundation</strong> y <strong>White Belt Lean Six Sigma</strong>.</span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Su liderazgo combina visión estratégica, experiencia técnica y enfoque práctico, 
          acompañando a cada cliente hacia el éxito en su transformación digital.
        </p>

        {/* Botón LinkedIn centrado */}
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/juan-carlos-morales-7324a441/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#005983] text-white px-4 py-2 rounded-full shadow transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.5-2.2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-8.6c0-2-.1-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V24h-4V8z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* SERVICIOS */}
        <section className="relative w-full py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <header className="text-center mb-16">
             
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F1C2A]">
                Nuestros Servicios
              </h2>
            </header>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Servicio 1 */}
              <article className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#0F1C2A]">Project Management ERP/CRM</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lideramos implementaciones de ERP y CRM asegurando alineación estratégica, 
                  gestión del cambio y entregas sin riesgos.
                </p>
                <Link
                  href="/servicios/project-management-erp-crm"
                  className="inline-flex text-[#3574E3] font-semibold hover:text-[#60A5FA] transition"
                  aria-label="Más información sobre Project Management ERP/CRM"
                >
                  Más información sobre Project Management ERP/CRM →
                </Link>
              </article>

              {/* Servicio 2 */}
              <article className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#0F1C2A]">Elaboración y Mapeo de Procesos</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Analizamos y optimizamos procesos de negocio, reduciendo ineficiencias y alineándolos 
                  con los objetivos estratégicos para lograr operaciones más ágiles y escalables.
                </p>
                <Link
                  href="/servicios/mapeo-procesos"
                  className="inline-flex text-[#3574E3] font-semibold hover:text-[#60A5FA] transition"
                  aria-label="Más información sobre Mapeo de Procesos"
                >
                  Más información sobre Mapeo de Procesos →
                </Link>
              </article>

              {/* Servicio 3 */}
              <article className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3574E3] to-[#60A5FA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#0F1C2A]">Consultor Independiente ERP/CRM</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Acompañamiento neutral en la selección e implementación de sistemas ERP o CRM, 
                  garantizando decisiones objetivas, eficiencia y control financiero.
                </p>
                <Link
                  href="/servicios/consultoria-independiente"
                  className="inline-flex text-[#3574E3] font-semibold hover:text-[#60A5FA] transition"
                  aria-label="Más información sobre Consultoría"
                >
                  Más información sobre Consultoría →
                </Link>
              </article>
            </div>
          </div>
        </section>

{/* MÉTRICAS DE ÉXITO */}
<section className="py-20 bg-[#0F1C2A] text-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8">
      <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
        <div className="text-4xl font-bold text-[#60A5FA] mb-2">25+</div>
        <h3 className="font-semibold text-white mb-2">Años de Experiencia</h3>
        <p className="text-sm text-blue-100">En comercialización e implementación ERP/CRM</p>
      </div>
      <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
        <div className="text-4xl font-bold text-[#60A5FA] mb-2">92%</div>
        <h3 className="font-semibold text-white mb-2">Cumplimiento</h3>
        <p className="text-sm text-blue-100">Proyectos entregados on-time y en presupuesto</p>
      </div>
      <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
        <div className="text-4xl font-bold text-[#60A5FA] mb-2">85%</div>
        <h3 className="font-semibold text-white mb-2">Adopción</h3>
        <p className="text-sm text-blue-100">Alta adopción usuaria post-implementación</p>
      </div>
      <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
        <div className="text-4xl font-bold text-[#60A5FA] mb-2">100%</div>
        <h3 className="font-semibold text-white mb-2">Independiente</h3>
        <p className="text-sm text-blue-100">Consultoría neutral sin conflictos de interés</p>
      </div>
    </div>
  </div>
</section>

       {/* INFORMACIÓN DE CONTACTO VISIBLE */}
<section className="py-12 bg-gray-50 text-gray-800">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-2xl font-bold mb-6 text-[#0F1C2A]">Información de Contacto</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {/* Teléfono */}
      <div>
        <h3 className="font-semibold text-[#3574E3] mb-2">Teléfono</h3>
        <p className="text-lg">+502 4527 2699</p>
      </div>

      {/* Email + LinkedIn */}
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-[#3574E3] mb-2">Email</h3>
        <p className="text-lg mb-4">info@lucyconsulting.com</p>
        <a
          href="https://www.linkedin.com/in/juan-carlos-morales-7324a441/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#005983] text-white px-4 py-2 rounded-full shadow transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.5-2.2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-8.6c0-2-.1-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V24h-4V8z"/>
          </svg>
          LinkedIn
        </a>
      </div>

      {/* Ubicación */}
      <div>
        <h3 className="font-semibold text-[#3574E3] mb-2">Ubicación</h3>
        <p className="text-lg">Guatemala - Panamá</p>
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
              Agenda una consultoría gratuita y descubre cómo podemos acompañarte hacia el éxito 
              en tu próximo proyecto de transformación digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+50712345678"
                className="inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition"
                aria-label="Llamar para consultoría gratuita"
              >
                Llamar Ahora: +507-1234-5678
              </a>
              <a
                href="mailto:info@lucyconsulting.com?subject=Consultoría Transformación Digital"
                className="inline-flex border border-[#3574E3] text-[#3574E3] px-6 py-3 rounded-full font-semibold hover:bg-[#3574E3] hover:text-white transition"
                aria-label="Email sobre consultoría transformación digital"
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
            © 2024 Lucy Consulting. Especialistas en Project Management ERP/CRM 
            y consultoría de implementación para empresas en Latinoamérica.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/servicios" className="text-blue-200 hover:text-white transition">Todos los Servicios</Link>
            <Link href="/servicios/project-management-erp-crm" className="text-blue-200 hover:text-white transition">Project Management</Link>
            <Link href="/servicios/mapeo-procesos" className="text-blue-200 hover:text-white transition">Mapeo de Procesos</Link>
            <Link href="/servicios/consultoria-independiente" className="text-blue-200 hover:text-white transition">Consultoría Independiente</Link>
            <a href="#contacto" className="text-blue-200 hover:text-white transition">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}