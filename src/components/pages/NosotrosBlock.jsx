import { HiCog, HiUsers, HiChartBar, HiShieldCheck, HiStar, HiSupport, HiEye, HiLockClosed, HiGlobeAlt, HiCheckCircle, HiOutlineCloud, HiOutlineDesktopComputer, HiOutlineClock, HiOutlineServer, HiArrowRight, HiAcademicCap } from 'react-icons/hi'
import { Target } from 'lucide-react'

const NosotrosBlock = () => {
  const values = [
    { icon: <HiCog size={40} />, title: ['Innovación', 'constante'] },
    { icon: <HiUsers size={40} />, title: ['Enfoque', 'en el cliente'] },
    { icon: <HiChartBar size={40} />, title: ['Resultados', 'reales'] },
    { icon: <HiShieldCheck size={40} />, title: ['Confianza', 'y seguridad'] },
  ]

  const certifications = [
    { icon: <HiGlobeAlt size={24} />, name: 'ISO 27001', desc: 'Seguridad de la información' },
    { icon: <HiAcademicCap size={24} />, name: 'ISO 9001', desc: 'Gestión de la calidad' },
    { icon: <HiOutlineServer size={24} />, name: 'Fortinet Partner', desc: 'Soluciones de seguridad' },
  ]

  const securityFeatures = [
    'Monitoreo y prevención de amenazas',
    'Protección de datos',
    'Cumplimiento de normativas internacionales',
    'Infraestructura segura y confiable',
  ]

  const whyUs = [
    { icon: <HiStar size={36} />, title: ['Experiencia', 'y conocimiento'] },
    { icon: <HiUsers size={36} />, title: ['Equipo', 'especializado'] },
    { icon: <HiCog size={36} />, title: ['Soluciones', 'a la medida'] },
    { icon: <HiSupport size={36} />, title: ['Soporte', 'técnico activo'] },
    { icon: <HiChartBar size={36} />, title: ['Enfoque en la', 'rentabilidad de tu negocio'] },
  ]

  return (
    <>
      {/* HERO - CAJA 1: cambiar imagen de fondo en CSS (.about-hero-bg) */}
      <section id="nosotros" className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-left">
              <h1>Tecnología que<br /><span className="text-green">simplifica tu negocio</span></h1>
              <div className="about-hero-title-line"></div>
              <div className="about-hero-values">
                {values.map((v, i) => (
                  <div key={i} className="about-value-item">
                    <div className="about-value-icon">{v.icon}</div>
                    <span>
                      {v.title.map((line, j) => (
                        <span key={j} style={{ display: 'block' }}>{line}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-hero-right">
              <img src="/img/FONDO.png" alt="RapiditoPe Dashboard" />
              <p className="about-handwritten">Pequeñas<br />ideas,<br />grandes<br />negocios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS + MISIÓN/VISIÓN */}
      <section className="about-who-section">
        <div className="container">
          <div className="about-who-grid">
            <div className="about-who-card">
              <div className="about-who-body">
                <div className="about-who-icon">
                  <HiUsers size={48} />
                </div>
                <div>
                  <h2>¿Quiénes somos?</h2>
                  <p>Somos especialistas en desarrollo de software e implementación de soluciones tecnológicas para todo tipo de negocios.</p>
                </div>
              </div>
            </div>
            <div className="about-mission-vision">
              <div className="about-mv-card">
                <div className="about-mv-icon">
                  <Target size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3>Nuestra misión</h3>
                  <p>Apoyamos a los pequeños empresarios a crecer, brindándoles soluciones tecnológicas accesibles, simples y seguras que les permitan gestionar su negocio con mayor control, ahorrar tiempo y alcanzar sus objetivos.</p>
                </div>
              </div>
              <div className="about-mv-card">
                <div className="about-mv-icon">
                  <HiEye size={28} />
                </div>
                <div>
                  <h3>Nuestra visión</h3>
                  <p>Ser la empresa líder en el desarrollo de soluciones tecnológicas para negocios en el Perú y Latinoamérica, reconocida por nuestra innovación, cercanía con el cliente y compromiso con la excelencia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIBERSEGURIDAD - CAJA 3: cambiar imagen de fondo en CSS (.about-cyber-bg) */}
      <section className="about-cyber-section">
        <div className="about-cyber-bg"></div>
        <div className="about-cyber-overlay"></div>
        <div className="container">
          <div className="about-cyber-grid">
            <div className="about-cyber-left">
              <span className="about-cyber-badge">NUESTRO SOCIO ESTRATÉGICO</span>
              <h2>Ciberseguridad<br />para tu tranquilidad</h2>
              <p>Contamos con un socio estratégico, una empresa líder en ciberseguridad con más de 10 años en el mercado, con certificaciones internacionales, que garantiza la protección de tu información, infraestructura tecnológica y continuidad de tu negocio.</p>
            </div>
            <div className="about-cyber-center">
              <div className="about-cyber-shield">
                <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 4L72 16V42C72 64 58 80 40 86C22 80 8 64 8 42V16L40 4Z" fill="rgba(45,212,191,0.12)" stroke="#5eead4" strokeWidth="2.5"/>
                  <rect x="30" y="40" width="20" height="18" rx="3" stroke="#5eead4" strokeWidth="2.5"/>
                  <path d="M34 40V34C34 29.6 37.6 26 42 26C46.4 26 50 29.6 50 34V40" stroke="#5eead4" strokeWidth="2.5"/>
                  <circle cx="40" cy="48" r="2.5" fill="#5eead4"/>
                </svg>
              </div>
              <div className="about-cyber-label about-cyber-label-tl">
                <div className="about-cyber-label-icon"><HiLockClosed size={22} /></div>
                <span>Protección<br />de datos</span>
              </div>
              <div className="about-cyber-label about-cyber-label-tr">
                <div className="about-cyber-label-icon"><HiOutlineCloud size={22} /></div>
                <span>Infraestructura<br />segura</span>
              </div>
              <div className="about-cyber-label about-cyber-label-bl">
                <div className="about-cyber-label-icon"><HiOutlineClock size={22} /></div>
                <span>Monitoreo<br />24/7</span>
              </div>
              <div className="about-cyber-label about-cyber-label-br">
                <div className="about-cyber-label-icon"><HiOutlineDesktopComputer size={22} /></div>
                <span>Continuidad<br />de negocio</span>
              </div>
            </div>
            <div className="about-cyber-right">
              <div className="about-certs-card">
                <h3>Certificaciones y estándares</h3>
                <div className="about-certs-list">
                  {certifications.map((c, i) => (
                    <div key={i} className="about-cert-item">
                      <div className="about-cert-icon">{c.icon}</div>
                      <div>
                        <strong>{c.name}</strong>
                        <p>{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="about-cyber-features">
                  {securityFeatures.map((f, i) => (
                    <li key={i}>
                      <HiCheckCircle size={16} className="text-green" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="about-why-section">
        <div className="container">
          <div className="about-why-top">
            <div className="about-why-main">
              <h2>¿Por qué elegir <span className="text-green">INNOVACORE</span>?</h2>
              <div className="about-why-grid">
                {whyUs.map((item, i) => (
                  <div key={i} className="about-why-item">
                    <div className="about-why-icon">{item.icon}</div>
                    <span>
                      {item.title.map((line, j) => (
                        <span key={j} style={{ display: 'block' }}>{line}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-why-quote">
              <p>“Más que tecnología, creamos oportunidades para tu negocio.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="about-cta-section">
        <div className="about-cta-bg"></div>
        <div className="about-cta-overlay"></div>
        <div className="container">
          <div className="about-cta-content">
            <div className="about-cta-text">
              <h2>Juntos construimos<br />negocios más sólidos</h2>
            </div>
            <div className="about-cta-divider"></div>
            <div className="about-cta-desc">
              <p>Tecnología, seguridad y experiencia<br />al servicio de tu crecimiento.</p>
            </div>
            <div className="about-cta-action">
              <button className="about-cta-btn" onClick={() => {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Contáctanos <HiArrowRight size={18} />
              </button>
              <span className="about-cta-btn-underline"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NosotrosBlock
