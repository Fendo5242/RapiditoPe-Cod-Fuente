import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'

const Header = ({ currentModule, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'Inicio', module: 'home' },
    { name: 'Funciones', id: 'funciones' },
    { name: 'Beneficios', id: 'beneficios' },
    { name: 'Precios', id: 'precios' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Contacto', module: 'contact' },
  ]

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false)
    if (item.module) {
      onNavigate(item.module)
    } else if (item.id) {
      if (currentModule !== 'home') {
        onNavigate('home')
        setTimeout(() => {
          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo" onClick={() => onNavigate('home')} style={{cursor:'pointer'}}>
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#10b981"/>
            <path d="M10 28V18l7-6 7 4v12" stroke="#fff" strokeWidth="2.5" fill="none"/>
            <path d="M24 28V14l6-4v18" stroke="#fff" strokeWidth="2.5" fill="none"/>
            <circle cx="17" cy="12" r="2" fill="#fbbf24"/>
          </svg>
          <div>
            <span className="logo-text">RapiditoPe</span>
            <span className="logo-sub">Sistema para negocios</span>
          </div>
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`nav-link ${currentModule === item.module ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="header-right">
          <a href="https://wa.me/51968716224" target="_blank" rel="noopener noreferrer" className="header-whatsapp">
            <SiWhatsapp size={18} />
            <div>
              <span className="whatsapp-label">Contáctanos</span>
              <span className="whatsapp-number">+51 968 716 224</span>
            </div>
          </a>
          <button className="header-login-btn" onClick={() => onNavigate('home')}>Login</button>
        </div>

        <button className="header-hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && <div className="header-overlay" onClick={() => setIsMobileMenuOpen(false)} />}
    </header>
  )
}

export default Header
