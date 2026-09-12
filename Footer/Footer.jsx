import { SiWhatsapp, SiFacebook, SiInstagram } from 'react-icons/si'
import { HiArrowUp } from 'react-icons/hi'

const Footer = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#10b981"/>
                <path d="M10 28V18l7-6 7 4v12" stroke="#fff" strokeWidth="2.5" fill="none"/>
                <path d="M24 28V14l6-4v18" stroke="#fff" strokeWidth="2.5" fill="none"/>
                <circle cx="17" cy="12" r="2" fill="#fbbf24"/>
              </svg>
              <span>RapiditoPe</span>
            </div>
            <p className="footer-desc">Sistema para negocios. Gestión integral de inventario, facturación y reportes.</p>
          </div>

          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><button onClick={() => onNavigate('home')}>Inicio</button></li>
              <li><button onClick={() => onNavigate('contact')}>Contacto</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Funciones</h4>
            <ul>
              <li>Boletas ilimitadas</li>
              <li>Stock actualizado</li>
              <li>Reportes diarios</li>
              <li>Inventario</li>
              <li>Ventas</li>
              <li>Caja chica</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>Términos y condiciones</li>
              <li>Política de privacidad</li>
              <li>Política de cookies</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Síguenos</h4>
            <div className="footer-social">
              <a href="#"><SiFacebook size={18} /></a>
              <a href="#"><SiInstagram size={18} /></a>
              <a href="#"><SiWhatsapp size={18} /></a>
            </div>
            <button className="footer-back-top" onClick={scrollToTop}>
              <HiArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 RapiditoPe. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
