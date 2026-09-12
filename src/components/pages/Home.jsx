import { useState, useEffect } from 'react'
import { HiOutlineCheckCircle, HiArrowRight, HiMail, HiPhone, HiClock, HiOutlineArrowRight, HiOutlineQuestionMarkCircle, HiGlobeAlt, HiTrendingUp, HiLockClosed, HiLightBulb, HiRefresh, HiClipboardCheck, HiCurrencyDollar, HiShieldCheck, HiDocumentText } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'

const Home = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Mensaje enviado! Te contactaremos pronto.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  useEffect(() => {
    let observer
    const setup = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }
    requestAnimationFrame(() => requestAnimationFrame(setup))
    return () => { if (observer) observer.disconnect() }
  }, [])

  const contactItems = [
    { icon: <SiWhatsapp size={16} />, label: 'WhatsApp', value: '+51 968 716 224', link: 'https://wa.me/51968716224' },
    { icon: <HiMail size={16} />, label: 'Email', value: 'hola@rapidito.pe', link: 'mailto:hola@rapidito.pe' },
    { icon: <HiPhone size={16} />, label: 'Teléfono', value: '+01 123 4567', link: 'tel:+011234567' },
  ]
  const heroFeatures = [
    { icon: <HiClock size={22} />, title: 'Boletas ilimitadas', desc: 'Emite todas las boletas que necesites de forma rápida.', color: '#108501', bg: '#e6fbe9' },
    { icon: <HiGlobeAlt size={22} />, title: 'Stock actualizado', desc: 'Control en tiempo real de tu inventario desde cualquier lugar.', color: '#f59e0b', bg: '#fef3c7' },
    { icon: <HiTrendingUp size={22} />, title: 'Reportes de ganancia diaria', desc: 'Toma decisiones con datos reales y precisos.', color: '#3b82f6', bg: '#dbeafe' },
    { icon: <HiLockClosed size={22} />, title: 'Seguro y confiable', desc: 'Trabajamos con una empresa de ciberseguridad.', color: '#108501', bg: '#e6fbe9' },
  ]

  const featuresGrid = [
    { icon: <HiClipboardCheck size={22} />, title: 'Boletas ilimitadas', desc: 'Emite todas las boletas que necesites de forma rápida.', color: '#108501' },
    { icon: <HiGlobeAlt size={22} />, title: 'Stock actualizado', desc: 'Control en tiempo real de tu inventario desde cualquier lugar.', color: '#f59e0b' },
    { icon: <HiTrendingUp size={22} />, title: 'Reportes diarios', desc: 'Toma decisiones con datos reales y precisos.', color: '#3b82f6' },
    { icon: <HiLightBulb size={22} />, title: 'Ventas', desc: 'Gestiona tus ventas y clientes fácilmente.', color: '#108501' },
    { icon: <HiRefresh size={22} />, title: 'Inventario', desc: 'Control total de tus productos y stock.', color: '#f59e0b' },
    { icon: <HiLockClosed size={22} />, title: 'Compras', desc: 'Registra y controla tus compras a proveedores.', color: '#3b82f6' },
    { icon: <HiCurrencyDollar size={22} />, title: 'Caja chica', desc: 'Controla los gastos menores de tu negocio.', color: '#108501' },
    { icon: <HiShieldCheck size={22} />, title: 'Seguro y confiable', desc: 'Tu información siempre protegida y segura.', color: '#3b82f6' },
  ]

  const benefits = [
    { icon: <HiClock size={22} />, title: 'Ahorra tiempo', desc: 'Automatiza procesos y optimiza tareas diarias.' },
    { icon: <HiGlobeAlt size={22} />, title: 'Accede desde cualquier lugar', desc: 'Utiliza el sistema desde tu celular, tablet o computadora.' },
    { icon: <HiTrendingUp size={22} />, title: 'Más ventas', desc: 'Mejores controles que te ayudan a vender más.' },
    { icon: <HiLockClosed size={22} />, title: 'Seguridad garantizada', desc: 'Tu información está protegida con altos estándares de seguridad.' },
    { icon: <HiLightBulb size={22} />, title: 'Decisiones inteligentes', desc: 'Reportes en tiempo real para tomar mejores decisiones.' },
    { icon: <HiRefresh size={22} />, title: 'Respaldo automático', desc: 'Respaldos diarios para que nunca pierdas tu información.' },
  ]

  const plans = [
    { name: 'Básico', desc: 'Ideal para pequeños negocios', price: '29', features: ['Boletas ilimitadas', 'Control de stock', 'Reportes básicos', 'Soporte estándar'], featured: false },
    { name: 'Pro', desc: 'Para negocios en crecimiento', price: '59', features: ['Todo lo del plan Básico', 'Reportes avanzados', 'Caja chica', 'Soporte prioritario'], featured: true },
    { name: 'Empresarial', desc: 'Para grandes negocios', price: '99', features: ['Todo lo del plan Pro', 'Múltiples usuarios', 'Integraciones API', 'Soporte 24/7'], featured: false },
  ]

  const stats = [
    { value: '+1,200', label: 'Negocios confían en nosotros' },
    { value: '+50,000', label: 'Boletas emitidas diariamente' },
    { value: '99.9%', label: 'Disponibilidad del sistema' },
    { value: '24/7', label: 'Soporte técnico especializado' },
  ]

  return (
    <>
      {/* HERO */}
      <section id="hero" className="hero-section">
        <div className="hero-left">
          <div className="hero-top-row">
            <div className="hero-text-content">
              <span className="hero-eyebrow animate-fade-in-left delay-1">SISTEMA INTEGRAL PARA NEGOCIOS</span>
              <h1 className="hero-title animate-fade-in-left delay-2">
                Todo lo que tu negocio necesita,{' '}
                <span className="hero-highlight">en un solo lugar.</span>
              </h1>
              <p className="hero-subtitle animate-fade-in-left delay-3">
                Vende más, controla tu inventario y toma mejores decisiones desde cualquier dispositivo, fácil, rápido y seguro.
              </p>
            </div>
            <div className="hero-mobile-image">
              <picture>
                <source media="(max-width: 480px)" srcSet="/img/FONDO1.png" />
                <img src="/img/FONDO.png" alt="RapiditoPe Dashboard" />
              </picture>
            </div>
          </div>
          <div className="hero-features-grid animate-fade-in-up delay-4">
            {heroFeatures.map((f, i) => (
              <div key={i} className={`hero-feature-card animate-scale-in delay-${i + 4}`}>
                <div className="hero-feature-icon" style={{background: f.bg || `${f.color}12`, color: f.color}}>{f.icon}</div>
                <h4 className="hero-feature-title">{f.title}</h4>
                <p className="hero-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="hero-ctas animate-fade-in-up delay-8">
            <button className="hero-btn-primary">
              Solicitar demostración <HiArrowRight size={16} />
            </button>
            <a href="https://wa.me/51968716224" target="_blank" rel="noopener noreferrer" className="hero-whatsapp-link">
              <SiWhatsapp size={16} /> o contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FUNCIONES */}
      <section id="funciones" className="features-section">
        <div className="container">
          <div className="features-header reveal">
            <span className="features-eyebrow">FUNCIONES</span>
            <h2>Todo lo que necesitas para gestionar tu negocio</h2>
            <p>Un sistema completo, simple y poderoso.</p>
          </div>
          <div className="features-grid">
            {featuresGrid.map((f, i) => (
              <div key={i} className={`feature-card reveal delay-stagger-${i + 1}`}>
                <div className="feature-card-icon" style={{background: `${f.color}12`, color: f.color}}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="benefits-section">
        <div className="container">
          <div className="benefits-header reveal">
            <span className="benefits-eyebrow">BENEFICIOS PARA TU NEGOCIO</span>
            <h2>Más control, más ventas, más crecimiento</h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className={`benefit-item reveal delay-stagger-${i + 1}`}>
                <div className="benefit-icon">
                  <span style={{color: '#108501'}}>{b.icon}</span>
                </div>
                <div className="benefit-text">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="pricing-section-home">
        <div className="container">
          <div className="pricing-header reveal">
            <span className="pricing-eyebrow">PLANES QUE SE ADAPTAN A TI</span>
            <h2>Elige el plan ideal para tu negocio</h2>
          </div>
          <div className="pricing-grid-home">
            {plans.map((plan, i) => (
              <div key={i} className={`pricing-card-home ${plan.featured ? 'featured' : ''} reveal delay-stagger-${i + 1}`}>
                {plan.featured && <span className="pricing-badge">Más popular</span>}
                <h3>{plan.name}</h3>
                <p className="pricing-card-desc">{plan.desc}</p>
                <div className="pricing-price-home">
                  <span className="pricing-currency">S/</span>
                  <span className="pricing-amount">{plan.price}</span>
                  <span className="pricing-period">/mes</span>
                </div>
                <ul className="pricing-features-home">
                  {plan.features.map((feat, j) => (
                    <li key={j}>
                      <HiOutlineCheckCircle size={18} className="pricing-check" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`pricing-btn ${plan.featured ? 'pricing-btn-primary' : 'pricing-btn-outline'}`}>
                  Seleccionar plan
                </button>
              </div>
            ))}
          </div>
          <p className="pricing-note reveal">
            <HiOutlineCheckCircle size={18} style={{color: '#108501', marginRight: 8, verticalAlign: 'middle'}} />
            Todos los planes incluyen actualizaciones y respaldo automático.
          </p>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <span className="about-eyebrow">NOSOTROS</span>
              <h2>Un aliado tecnológico para tu negocio</h2>
              <p>RapiditoPe es un sistema integral para negocios que permite controlar tu inventario, ventas y reportes desde cualquier dispositivo. Nuestro compromiso es ayudarte a crecer con tecnología simple, segura y eficiente.</p>
              <div className="about-stats">
                {stats.map((s, i) => (
                  <div key={i} className="about-stat-item">
                    <span className="about-stat-value">{s.value}</span>
                    <span className="about-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image reveal">
              <img src="/img/Grupo.png" alt="Equipo RapiditoPe" className="about-team-img" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="home-contact-section">
        <div className="container">
          <div className="home-contact-grid">
            <div className="home-contact-info reveal">
              <span className="home-contact-eyebrow">CONTÁCTANOS</span>
              <h2>Estamos aquí para ayudarte</h2>
              <p className="home-contact-subtitle">Escríbenos y te respondemos lo antes posible.</p>
              <div className="home-contact-details">
                {contactItems.map((item, i) => (
                  <div key={i} className="home-contact-item">
                    <div className="home-contact-icon">{item.icon}</div>
                    <div className="home-contact-text">
                      <h4>{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="home-contact-form-wrapper reveal">
              <form onSubmit={handleSubmit} className="home-contact-form">
                <div className="home-form-row-3">
                  <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Ingresa tu nombre" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Ingresa tu email" required />
                  </div>
                  <div className="form-group">
                    <label>Asunto</label>
                    <select name="subject" value={formData.subject} onChange={handleInputChange} required>
                      <option value="">¿En qué podemos ayudarte?</option>
                      <option value="ventas">Consulta sobre ventas</option>
                      <option value="soporte">Soporte técnico</option>
                      <option value="demo">Solicitar demostración</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Mensaje</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Escribe tu mensaje..." rows="3" required />
                </div>
                <button type="submit" className="home-submit-btn">
                  Enviar mensaje <HiOutlineArrowRight size={18} />
                </button>
              </form>
            </div>

            <div className="home-contact-support reveal">
              <div className="home-support-card">
                <div className="home-support-icon">
                  <HiOutlineQuestionMarkCircle size={40} />
                </div>
                <h4>Soporte técnico siempre contigo</h4>
                <p>Te ayudamos a resolver cualquier duda o problema que tengas.</p>
                <a href="https://wa.me/51968716224?text=Hola%20necesito%20soporte%20técnico" target="_blank" rel="noopener noreferrer" className="home-support-btn">
                  Contactar soporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
