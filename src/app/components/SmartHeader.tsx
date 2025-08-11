'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function SmartHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const isHome = pathname === '/'
  const isServicePage = pathname?.startsWith('/servicios/')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Función de navegación inteligente
  const handleNavigation = (section: string) => {
    closeMenu()

    if (isHome) {
      // Si estamos en home, hacer scroll directo
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Si estamos en otra página
      if (section === 'quienes-somos' || section === 'servicios' || section === 'contacto') {
        // Estas secciones están solo en home
        window.location.href = `/#${section}`
      } else {
        // FAQ y casos-exito están en cada página
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  // Cerrar menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F1C2A]/90 backdrop-blur-md shadow-lg">
      <nav 
        className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16" 
        role="navigation" 
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-[#3574E3] tracking-wide">
          <Link 
            href="/" 
            aria-label="Lucy Consulting - Consultoría independiente Project Management ERP/CRM Centroamérica"
          >
            Lucy Consulting
          </Link>
        </div>

        {/* Navegación Desktop */}
        <div className="hidden md:flex space-x-6 text-white/90 text-sm font-medium">
          <button 
            onClick={() => handleNavigation('quienes-somos')}
            className="hover:text-[#3574E3] transition duration-200 cursor-pointer"
            aria-label="Información sobre Lucy Consulting"
          >
            Quiénes Somos
          </button>
          <button 
            onClick={() => handleNavigation('servicios')}
            className="hover:text-[#3574E3] transition duration-200 cursor-pointer"
            aria-label="Servicios de Project Management ERP/CRM"
          >
            Servicios
          </button>
          
          {/* Mostrar "Casos de Éxito" solo si NO estamos en home */}
          {!isHome && (
            <button 
              onClick={() => handleNavigation('casos-exito')}
              className="hover:text-[#3574E3] transition duration-200 cursor-pointer"
              aria-label="Casos de éxito en implementación ERP/CRM"
            >
              Casos de Éxito
            </button>
          )}
          
          <button 
            onClick={() => handleNavigation('faq')}
            className="hover:text-[#3574E3] transition duration-200 cursor-pointer"
            aria-label="Preguntas frecuentes sobre consultoría ERP/CRM"
          >
            FAQ
          </button>
          <button 
            onClick={() => handleNavigation('contacto')}
            className="hover:text-[#3574E3] transition duration-200 cursor-pointer"
            aria-label="Contactar para consultoría en Guatemala y Panamá"
          >
            Contacto
          </button>
        </div>

        {/* CTA Header */}
        <a
          href="https://wa.me/50245172699?text=Hola%2C%20me%20interesa%20una%20consultor%C3%ADa%20sobre%20implementaci%C3%B3n%20ERP%2FCRM"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-5 py-2 rounded-full font-semibold text-white shadow-md hover:scale-105 transition duration-200"
          aria-label="Contactar por WhatsApp para consultoría Project Management ERP/CRM"
          data-gtm-event="header_whatsapp_click"
        >
          💬 WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Abrir menú móvil"
          data-gtm-event="mobile_menu_toggle"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú Móvil */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0F1C2A]/95 backdrop-blur-md ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-4 space-y-4 border-t border-white/20">
          <button 
            onClick={() => handleNavigation('quienes-somos')}
            className="block w-full text-left text-white/90 hover:text-[#3574E3] transition duration-200 py-3 text-sm font-medium"
          >
            Quiénes Somos
          </button>
          <button 
            onClick={() => handleNavigation('servicios')}
            className="block w-full text-left text-white/90 hover:text-[#3574E3] transition duration-200 py-3 text-sm font-medium"
          >
            Servicios
          </button>
          
          {/* Mostrar "Casos de Éxito" solo si NO estamos en home */}
          {!isHome && (
            <button 
              onClick={() => handleNavigation('casos-exito')}
              className="block w-full text-left text-white/90 hover:text-[#3574E3] transition duration-200 py-3 text-sm font-medium"
            >
              Casos de Éxito
            </button>
          )}
          
          <button 
            onClick={() => handleNavigation('faq')}
            className="block w-full text-left text-white/90 hover:text-[#3574E3] transition duration-200 py-3 text-sm font-medium"
          >
            FAQ
          </button>
          <button 
            onClick={() => handleNavigation('contacto')}
            className="block w-full text-left text-white/90 hover:text-[#3574E3] transition duration-200 py-3 text-sm font-medium"
          >
            Contacto
          </button>
          
          {/* WhatsApp móvil */}
          <a
            href="https://wa.me/50245172699?text=Hola%2C%20me%20interesa%20una%20consultor%C3%ADa%20sobre%20implementaci%C3%B3n%20ERP%2FCRM"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-[#3574E3] to-[#60A5FA] px-4 py-3 rounded-lg font-semibold text-white text-center mt-4"
            onClick={closeMenu}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}