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
              <img src="/img/footer-logo.png" alt="RapiditoPe" className="footer-logo-img" />
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
