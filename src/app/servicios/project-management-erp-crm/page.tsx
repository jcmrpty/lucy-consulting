import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ProjectManagementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101D2B] text-white font-sans">
      <Head>
        <title>Project Management ERP/CRM | Lucy Consulting Guatemala</title>
        <meta
          name="description"
          content="Especialistas en Project Management para implementaciones ERP/CRM. Microsoft Dynamics, SAP, NetSuite, Odoo. Metodologías Agile, SCRUM y Waterfall."
        />
      </Head>

      {/* Header básico */}
      <header className="bg-[#0F1C2A] py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#3574E3]">
            Lucy Consulting
          </Link>
          <Link 
            href="/"
            className="text-blue-200 hover:text-white transition"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#3574E3]">
            Project Management ERP/CRM
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Lideramos implementaciones de <strong>Microsoft Dynamics, SAP, NetSuite y Odoo</strong> 
            usando metodologías <strong>Agile, SCRUM y Waterfall</strong> para garantizar 
            entregas exitosas sin riesgos.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              ¿Qué incluye nuestro servicio?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3"></span>
                  <span>Planificación estratégica del proyecto</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3"></span>
                  <span>Ejecución con metodologías probadas</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3"></span>
                  <span>Control de calidad continuo</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3"></span>
                  <span>Gestión de riesgos y mitigación</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3"></span>
                  <span>Capacitación y adopción tecnológica</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 mr-3"></span>
                  <span>Soporte post-implementación</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50245172699?text=Me%20interesa%20el%20servicio%20de%20Project%20Management%20ERP%2FCRM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gradient-to-r from-[#25D366] to-[#1DA851] px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              💬 Consultar por WhatsApp
            </a>
            <a
              href="tel:+50245172699"
              className="inline-flex border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0F1C2A] transition"
            >
              📞 +502 4517 2699
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}