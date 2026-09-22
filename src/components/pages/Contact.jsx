import { HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineGlobeAlt } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'

const Contact = ({ onNavigate }) => {
  const features = [
    { icon: <HiOutlineGlobeAlt size={20} />, text: 'Controla tus ventas' },
    { icon: <HiOutlineShieldCheck size={20} />, text: 'Gestiona tu inventario' },
    { icon: <HiOutlineDocumentText size={20} />, text: 'Emite boletas y facturas' },
    { icon: <HiOutlineCheckCircle size={20} />, text: 'Accede desde cualquier dispositivo' },
  ]

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img src="/img/FONDO.png" alt="Oficina" />
        </div>
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <div className="contact-hero-content">
            <span className="contact-hero-badge">CONTÁCTANOS</span>
            <h1>Estamos aquí<br /><span className="text-green">para ayudarte</span></h1>
            <p>Escríbenos y te respondemos lo antes posible.</p>
          </div>
          <div className="contact-hero-right">
            <p className="contact-handwritten">Tu negocio<br />en buenas manos</p>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="contact-bottom">
        <div className="container">
          <div className="contact-bottom-grid">
            <div className="contact-bottom-left">
              <span className="contact-bottom-label">SOLUCIONES TECNOLÓGICAS</span>
              <h2><span className="text-blue">PARA TU NEGOCIO</span></h2>
              <p>Sistemas de facturación, control de inventario, ventas, reportes y más. Todo en un solo lugar.</p>
              <button className="contact-btn-green" onClick={() => onNavigate('home')}>
                Ir a inicio <HiOutlineArrowRight size={18} />
              </button>
            </div>

            <div className="contact-bottom-center">
              <img src="/img/FONDO.png" alt="RapiditoPe Dashboard" className="contact-bottom-image" />
            </div>

            <div className="contact-bottom-right">
              <div className="contact-features-list">
                {features.map((f, i) => (
                  <div key={i} className="contact-feature-item">
                    <div className="contact-feature-icon">{f.icon}</div>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/51968716224" target="_blank" rel="noopener noreferrer" className="contact-whatsapp-btn">
                <SiWhatsapp size={24} />
                <div>
                  <strong>Contactar</strong>
                  <span>+51 968 716 224</span>
                </div>
                <HiOutlineArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
