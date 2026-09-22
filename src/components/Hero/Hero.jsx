import { HiArrowRight, HiOutlineDocumentText, HiOutlineClipboardCheck, HiOutlineChartBar } from 'react-icons/hi'
import StatsBar from '../StatsBar/StatsBar'

const Hero = ({ onNavigate }) => {
  const features = [
    { icon: <HiOutlineDocumentText size={20} />, title: 'Emite boletas y facturas electrónicas*', subtitle: 'Integrado con SUNAT*' },
    { icon: <HiOutlineClipboardCheck size={20} />, title: 'Controla tu stock en tiempo real', subtitle: 'Compras, ventas y alertas de inventario.' },
    { icon: <HiOutlineChartBar size={20} />, title: 'Conoce la rentabilidad de tu negocio', subtitle: 'Reportes claros y en un solo lugar.' },
  ]

  return (
    <section id="hero" className="hero-v2">
      <div className="hero-v2-overlay"></div>
      <div className="hero-v2-container">
        <div className="hero-v2-left">
          <h1 className="hero-v2-title">
            Facturación <span className="hero-v2-highlight">simple y rápida</span>
          </h1>
          <p className="hero-v2-subtitle">
            Controla tus ventas, controla tu inventario, emite boletas, facturas y más, desde cualquier dispositivo.
          </p>

          <div className="hero-v2-features">
            {features.map((f, i) => (
              <div key={i} className="hero-v2-feature">
                <div className="hero-v2-feature-icon">{f.icon}</div>
                <div>
                  <strong>{f.title}</strong>
                  <p>{f.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-v2-buttons">
            <button className="hero-v2-btn-primary" onClick={() => onNavigate('login')}>
              Comienza ahora <HiArrowRight size={18} />
            </button>
            <button className="hero-v2-btn-outline" onClick={() => {
              document.getElementById('funciones')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Conoce más
            </button>
          </div>

          <p className="hero-v2-disclaimer">*Condicionado a que el negocio proporcione información.</p>
        </div>
      </div>

      <div className="hero-v2-stats">
        <StatsBar />
      </div>
    </section>
  )
}

export default Hero
