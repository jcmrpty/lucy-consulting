
export const metadata = {
  title: "Project Management ERP/CRM | Lucy Consulting",
  description:
    "Consultoría experta en Project Management ERP y CRM. Lideramos implementaciones complejas asegurando éxito, eficiencia, control financiero y adopción sin riesgos.",
  robots: "index, follow",
};

export default function ProjectManagement() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Project Management ERP/CRM",
    "provider": { "@type": "Organization", "name": "Lucy Consulting" },
    "description":
      "Gestión profesional de proyectos ERP y CRM: coordinación estratégica, gestión del cambio, supervisión de proveedores y aseguramiento de éxito en la implementación.",
    "areaServed": { "@type": "Place", "name": "Latinoamérica" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué hace un Project Manager en una implementación ERP o CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coordina todas las fases del proyecto, asegurando alineación estratégica, cumplimiento de tiempos y correcta adopción por parte de los usuarios."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es la ventaja de contratar un PM externo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un PM externo es neutral, no tiene conflictos de interés y se enfoca en asegurar que el proyecto cumpla con sus objetivos de negocio."
        }
      },
      {
        "@type": "Question",
        "name": "¿Lucy Consulting solo trabaja con ciertos ERP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Hemos trabajado con múltiples plataformas como SAP, Oracle, Microsoft Dynamics, Zoho, Odoo y más."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
      {/* HERO */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden bg-[#0F1C2A] text-white">
        <img
          src="/images/imagen-pm-servicios.jpeg"
          alt="Project Management ERP/CRM para empresas"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2A]/70 via-[#0F1C2A]/60 to-[#0F1C2A]/80"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Project Management ERP/CRM
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Lideramos implementaciones complejas asegurando alineación
            estratégica, adopción sin riesgos y entrega de valor en tiempo y
            forma.
          </p>
          <a
            href="/#contacto"
            className="mt-6 inline-block bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-6 py-3 rounded-full font-semibold text-white shadow-md hover:scale-105 transition"
          >
            Agenda una Reunión
          </a>
        </div>
      </section>

      {/* Script Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* DESCRIPCIÓN Y BENEFICIOS */}
<section className="max-w-6xl mx-auto py-16 px-6">
  <h2 className="text-3xl font-bold mb-8 text-[#0F1C2A]">
    Beneficios de contar con un Project Manager Externo
  </h2>
  <p className="mb-8 text-lg leading-relaxed text-gray-700">
    Implementar un sistema ERP o CRM es una de las decisiones más estratégicas para una empresa, pero también una de las más complejas. Un Project Manager externo especializado actúa como aliado imparcial, liderando el proceso con enfoque estratégico, coordinación efectiva y control total de riesgos.
  </p>
  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
    <div>
      <h3 className="font-semibold text-[#3574E3] mb-2">
        1. Enfoque 100 % Neutral e Independiente
      </h3>
      <p>
        Sin conflicto de intereses. Representamos tus objetivos, no los del proveedor ERP, asegurando decisiones objetivas y alineadas con tu negocio.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-[#3574E3] mb-2">
        2. Eficiencia Operativa y Cumplimiento de Tiempos
      </h3>
      <p>
        Organizamos el proyecto por fases y prioridades, manteniendo ritmo constante, evitando retrasos y optimizando el uso de recursos.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-[#3574E3] mb-2">
        3. Control Financiero y Visibilidad Ejecutiva
      </h3>
      <p>
        Supervisamos presupuestos, cronogramas y entregables. Informes claros y seguimiento estratégico para tomar decisiones ágiles e informadas.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-[#3574E3] mb-2">
        4. Gestión del Cambio Organizacional
      </h3>
      <p>
        Diseñamos e implementamos estrategias de adopción, comunicación interna y capacitación, asegurando que el sistema sea utilizado efectivamente.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-[#3574E3] mb-2">
        5. Reducción de Riesgos Técnicos y Funcionales
      </h3>
      <p>
        Anticipamos errores comunes, supervisamos pruebas, validamos la calidad del sistema y acompañamos el go-live para una transición sin sobresaltos.
      </p>
    </div>
  </div>
</section>

      {/* SERVICIOS PRESTADOS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#0F1C2A]">
            Servicios Prestados en Project Management ERP
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-[#3574E3]">
                Gestión Estratégica del Proyecto ERP
              </h3>
              <p className="mb-4">
                Definición del alcance funcional y técnico junto a los líderes
                del negocio. Planificación detallada por fases: análisis, diseño,
                configuración, pruebas, capacitación y puesta en marcha.
              </p>

              <h3 className="font-semibold mb-2 text-[#3574E3]">
                Coordinación de Stakeholders
              </h3>
              <p className="mb-4">
                Actuamos como puente entre el implementador ERP, áreas usuarias
                y la alta dirección, facilitando decisiones estratégicas.
              </p>

              <h3 className="font-semibold mb-2 text-[#3574E3]">
                Gestión del Cambio Organizacional
              </h3>
              <p className="mb-4">
                Identificación de impactos, diseño de estrategias de
                comunicación, capacitación y adopción del sistema.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-[#3574E3]">
                Gestión de Riesgos y Control de Calidad
              </h3>
              <p className="mb-4">
                Monitoreo de riesgos funcionales y técnicos, validación de datos
                y pruebas UAT para garantizar implementaciones robustas.
              </p>

              <h3 className="font-semibold mb-2 text-[#3574E3]">
                Supervisión del Proveedor ERP
              </h3>
              <p className="mb-4">
                Cumplimiento de cronogramas, hitos y niveles de servicio.
                Evaluación de desempeño y escalaciones cuando sea necesario.
              </p>

              <h3 className="font-semibold mb-2 text-[#3574E3]">
                Reporting Ejecutivo y Cierre
              </h3>
              <p className="mb-4">
                Informes claros para comités ejecutivos, go-live acompañado,
                lecciones aprendidas y plan de mejoras continuas.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* PREGUNTAS FRECUENTES */}
<section className="max-w-4xl mx-auto py-16 px-6">
  <h2 className="text-3xl font-bold mb-10 text-[#0F1C2A] text-center">
    Preguntas Frecuentes sobre Project Management ERP/CRM
  </h2>
  <div className="space-y-6">
    <details className="group border border-gray-200 rounded-lg p-4 transition">
      <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-[#0F1C2A]">
        ¿Qué diferencia hay entre contratar un PM interno y uno externo?
        <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
      </summary>
      <p className="mt-3 text-gray-700">
        Un Project Manager externo aporta imparcialidad, experiencia multiindustria y enfoque estratégico sin conflictos de interés internos.
      </p>
    </details>

    <details className="group border border-gray-200 rounded-lg p-4 transition">
      <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-[#0F1C2A]">
        ¿Lucy Consulting trabaja con cualquier tipo de ERP o CRM?
        <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
      </summary>
      <p className="mt-3 text-gray-700">
        Sí. Hemos liderado implementaciones con SAP, Oracle, Microsoft Dynamics, Zoho, Odoo y otros, adaptándonos a las necesidades del cliente.
      </p>
    </details>

    <details className="group border border-gray-200 rounded-lg p-4 transition">
      <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-[#0F1C2A]">
        ¿Qué fases del proyecto supervisa Lucy Consulting?
        <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
      </summary>
      <p className="mt-3 text-gray-700">
        Supervisamos todo el ciclo: análisis, diseño, configuración, pruebas, capacitación, go-live y mejora continua post implementación.
      </p>
    </details>

    <details className="group border border-gray-200 rounded-lg p-4 transition">
      <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-[#0F1C2A]">
        ¿Qué tipo de empresas contratan este servicio?
        <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
      </summary>
      <p className="mt-3 text-gray-700">
        Empresas medianas y grandes que buscan asegurar el éxito de su transformación digital sin improvisaciones ni sobrecostos.
      </p>
    </details>

    <details className="group border border-gray-200 rounded-lg p-4 transition">
      <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-[#0F1C2A]">
        ¿El servicio incluye gestión del cambio y capacitación?
        <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
      </summary>
      <p className="mt-3 text-gray-700">
        Sí. Diseñamos estrategias de adopción, capacitamos usuarios y acompañamos el cambio organizacional para maximizar el retorno del sistema.
      </p>
    </details>
  </div>
</section>
      {/* CTA FINAL */}
      <section className="bg-[#0F1C2A] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para asegurar el éxito de tu proyecto ERP/CRM?
        </h2>
        <p className="mb-6 text-blue-100">
          Agenda una reunión con nuestro equipo y transforma tu implementación en un proyecto exitoso.
        </p>
        <a
          href="/#contacto"
          className="inline-block bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-8 py-3 rounded-full font-semibold text-white shadow-md hover:scale-105 transition"
        >
          Agenda una Reunión
        </a>
      </section>
    </div>
  );
}
