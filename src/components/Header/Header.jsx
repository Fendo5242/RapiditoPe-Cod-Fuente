import { useState, useEffect, useCallback } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'

const Header = ({ currentModule, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (currentModule !== 'home') return

    const sectionIds = ['hero', 'funciones', 'beneficios', 'precios', 'nosotros', 'contacto']
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0, rootMargin: '-80px 0px -60% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [currentModule])

  const navItems = [
    { name: 'Inicio', sectionId: 'hero' },
    { name: 'Funciones', sectionId: 'funciones' },
    { name: 'Beneficios', sectionId: 'beneficios' },
    { name: 'Precios', sectionId: 'precios' },
    { name: 'Nosotros', sectionId: 'nosotros' },
    { name: 'Contacto', sectionId: 'contacto' },
  ]

  const handleNavClick = useCallback((item) => {
    setIsMobileMenuOpen(false)
    if (item.module) {
      onNavigate(item.module)
    } else if (item.sectionId) {
      if (currentModule !== 'home') {
        onNavigate('home')
        setTimeout(() => {
          document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [currentModule, onNavigate])

  const isActive = (item) => {
    if (item.module) return currentModule === item.module
    if (item.sectionId && currentModule === 'home') return activeSection === item.sectionId
    return false
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo" onClick={() => onNavigate('home')} style={{cursor:'pointer'}}>
          <img src="/img/navbar-logo.png" alt="RapiditoPe" className="header-logo-img" />
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-logo">
            <img src="/img/navbar-logo.png" alt="RapiditoPe" onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false) }} style={{cursor:'pointer'}} />
          </div>
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`nav-link ${isActive(item) ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </button>
          ))}
          <div className="mobile-menu-actions">
            <a href="https://wa.me/51968716224" target="_blank" rel="noopener noreferrer" className="mobile-whatsapp-btn">
              <SiWhatsapp size={18} />
              <span>+51 968 716 224</span>
            </a>
            <button className="mobile-login-btn" onClick={() => { onNavigate('login'); setIsMobileMenuOpen(false) }}>
              Iniciar Sesión
            </button>
          </div>
        </nav>

        <div className="header-right">
          <a href="https://wa.me/51968716224" target="_blank" rel="noopener noreferrer" className="header-whatsapp">
            <SiWhatsapp size={18} />
            <div>
              <span className="whatsapp-label">Contactanos</span>
              <span className="whatsapp-number">+51 968 716 224</span>
            </div>
          </a>
          <button className="header-login-btn" onClick={() => onNavigate('login')}>
            Iniciar Sesion
          </button>
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
