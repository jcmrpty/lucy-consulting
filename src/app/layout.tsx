import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmartHeader from './components/SmartHeader'

const inter = Inter({ subsets: ['latin'] })

// ✅ METADATA API NEXT.JS 15 - Aplicando checklist SEO completo
export const metadata: Metadata = {
  // Meta básicos optimizados (Checklist #1)
  title: 'Project Management ERP/CRM | Guatemala Panamá',
  description: 'Consultoría independiente ERP/CRM en Centroamérica. Implementación Odoo, SAP, NetSuite en Guatemala y Panamá. +25 años experiencia transformando empresas.',
  
  // Keywords estratégicas
  keywords: [
    'Project Management ERP/CRM',
    'consultoría independiente Centroamérica', 
    'implementación Odoo Guatemala',
    'SAP NetSuite Panamá',
    'consultoría ERP CRM Guatemala',
    'transformación digital Centroamérica',
    'metodologías Agile SCRUM',
    'mapeo optimización procesos empresas',
    'Lucy Consulting Guatemala'
  ],
  
  // Robots y canonical (Checklist #1)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://lucy-consulting-evdq.vercel.app',
  },
  
  // Open Graph optimizado (Checklist #1)
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://lucy-consulting-evdq.vercel.app',
    siteName: 'Lucy Consulting',
    title: 'Project Management ERP/CRM | Consultoría Independiente Centroamérica',
    description: 'Consultoría independiente en implementación ERP/CRM para empresas medianas y grandes. Odoo, SAP, NetSuite, Microsoft Dynamics. +25 años transformando empresas en Guatemala y Panamá.',
    images: [
      {
        url: 'https://lucy-consulting-evdq.vercel.app/images/lucy-consulting-home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Lucy Consulting - Project Management ERP/CRM Guatemala Centroamérica'
      }
    ],
  },
  
  // Twitter Cards optimizado (Checklist #1)
  twitter: {
    card: 'summary_large_image',
    title: 'Project Management ERP/CRM | Consultoría Independiente Guatemala',
    description: 'Consultoría independiente en implementación Odoo, SAP, NetSuite en Guatemala y Panamá. +25 años de experiencia en transformación digital.',
    images: ['https://lucy-consulting-evdq.vercel.app/images/lucy-consulting-home-twitter.jpg'],
  },
  
  // Meta adicionales para LLMs (Checklist #1)
  authors: [{ name: 'Lucy Consulting - Gladis Morales' }],
  creator: 'Lucy Consulting',
  publisher: 'Lucy Consulting',
  
  // Verificación y otras metas
  verification: {
    google: 'tu-google-verification-code',
    yandex: 'tu-yandex-verification-code',
  },
  
  // Favicon (Checklist #1)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Meta para geo-targeting (Checklist GEO)
  other: {
    'geo.region': 'GT-PA',
    'geo.placename': 'Guatemala, Panamá',
    'geo.position': '14.6349;-90.5069',
    'ICBM': '14.6349, -90.5069',
    'coverage': 'Worldwide',
    'target': 'Business',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'theme-color': '#3574E3',
    'msapplication-TileColor': '#3574E3',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Schema.org Organization optimizado (Checklist GEO #2)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lucy Consulting",
    "alternateName": "Lucy Consulting Guatemala",
    "url": "https://lucy-consulting-evdq.vercel.app",
    "logo": "https://lucy-consulting-evdq.vercel.app/images/lucy-consulting-logo.png",
    "description": "Consultoría independiente especializada en Project Management ERP/CRM (Odoo, SAP, NetSuite, Microsoft Dynamics) y optimización de procesos para empresas medianas y grandes en Centroamérica.",
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
        "name": "Centroamérica"
      },
      {
        "@type": "Place",
        "name": "Latinoamérica"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+502-4517-2699",
      "contactType": "customer service",
      "email": "lucyconsultinggt@gmail.com",
      "availableLanguage": "Spanish",
      "areaServed": "GT,PA,CR,HN,NI,SV"
    },
    "founder": {
      "@type": "Person",
      "name": "Gladis Morales",
      "jobTitle": "Directora General y Fundadora",
      "description": "Licenciada en Administración de Sistemas de Información y Maestría en Administración de la Confiabilidad. Más de 25 años de experiencia en implementación de ERPs y CRMs en Centroamérica.",
      "hasCredential": [
        "SCRUM Foundation",
        "White Belt Lean Six Sigma"
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/in/gladis-morales-1a891a35/"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Centroamérica y Latinoamérica"
    },
    "knowsAbout": [
      "Odoo ERP",
      "Odoo CRM", 
      "SAP ERP",
      "SAP CRM",
      "NetSuite ERP",
      "NetSuite CRM",
      "Microsoft Dynamics ERP",
      "Microsoft Dynamics CRM",
      "Project Management",
      "Business Process Mapping",
      "Digital Transformation",
      "Agile",
      "SCRUM",
      "Lean Six Sigma"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Consultoría ERP/CRM",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Management ERP/CRM",
            "description": "Lideramos implementaciones de Odoo, SAP, NetSuite y Microsoft Dynamics usando metodologías Agile, SCRUM y Waterfall"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mapeo de Procesos",
            "description": "Analizamos y optimizamos procesos de negocio usando metodologías Lean Six Sigma"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría Independiente",
            "description": "Acompañamiento neutral en selección e implementación de sistemas ERP/CRM"
          }
        }
      ]
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Schema.org structured data (Checklist GEO #2) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
         {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1X1E9VY6MW"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1X1E9VY6MW');
          `
        }} />
        
        {/* Preconnect para optimización (Checklist #7) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Header inteligente como Client Component */}
        <SmartHeader />

        {/* MAIN content wrapper (Checklist GEO #6) */}
        <main>
          {children}
        </main>

        {/* FOOTER con datos de contacto visibles (Checklist GEO #4) */}
        <footer className="bg-[#0F1C2A] text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Información de la empresa */}
              <div>
                <h3 className="text-xl font-bold text-[#3574E3] mb-4">Lucy Consulting</h3>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  Consultoría independiente especializada en Project Management ERP/CRM para 
                  empresas en Latinoamérica. +25 años de experiencia 
                  transformando empresas.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/gladis-morales-1a891a35/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-200 hover:text-white transition"
                    aria-label="LinkedIn Gladis Morales Lucy Consulting"
                    data-gtm-event="footer_linkedin_click"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://wa.me/50245172699" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-200 hover:text-white transition"
                    aria-label="WhatsApp consultoría ERP/CRM Guatemala"
                    data-gtm-event="footer_whatsapp_click"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Servicios con enlaces internos (Checklist #10) */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Servicios especializados</h4>
                <ul className="space-y-2 text-blue-200">
                  <li>
                    <a 
                      href="/servicios/project-management-erp-crm" 
                      className="hover:text-white transition"
                      aria-label="Project Management ERP/CRM Odoo SAP NetSuite"
                    >
                      Project Management ERP/CRM
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/servicios/mapeo-de-procesos" 
                      className="hover:text-white transition"
                      aria-label="Mapeo optimización procesos empresas Guatemala"
                    >
                      Mapeo de Procesos
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/servicios/consultoria-erp-crm" 
                      className="hover:text-white transition"
                      aria-label="Consultoría independiente selección ERP CRM"
                    >
                      Consultoría Independiente
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contacto con datos visibles en texto real (Checklist GEO #4) */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Contacto directo</h4>
                <div className="space-y-2 text-blue-200">
                  <p>
                    📞 <a 
                      href="tel:+50245172699" 
                      className="hover:text-white transition"
                      aria-label="Llamar Lucy Consulting Guatemala"
                      data-gtm-event="footer_phone_click"
                    >
                      +502 4517 2699
                    </a>
                  </p>
                  <p>
                    ✉️ <a 
                      href="mailto:lucyconsultinggt@gmail.com" 
                      className="hover:text-white transition"
                      aria-label="Email consultoría ERP CRM Guatemala"
                      data-gtm-event="footer_email_click"
                    >
                      lucyconsultinggt@gmail.com
                    </a>
                  </p>
                  <p>📍 Guatemala - Panamá</p>
                  <p>🌎 Servicios en toda Centroamérica</p>
                </div>
              </div>
            </div>

            {/* Copyright con keywords para LLMs */}
            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-blue-100">
                © 2024 Lucy Consulting. Especialistas en Project Management ERP/CRM para empresas en Latinoamérica. +25 años de experiencia en consultoría independiente.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}