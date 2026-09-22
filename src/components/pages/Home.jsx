import { useState, useEffect } from 'react'
import { HiOutlineCheckCircle, HiArrowRight, HiMail, HiPhone, HiOutlineArrowRight, HiOutlineQuestionMarkCircle, HiGlobeAlt, HiTrendingUp, HiLockClosed, HiLightBulb, HiRefresh, HiClipboardCheck, HiCurrencyDollar, HiShieldCheck, HiOutlineUsers, HiOutlineEye, HiOutlineCog, HiOutlineStar, HiOutlineSupport, HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineLockClosed, HiOutlineShieldCheck, HiOutlineTrendingUp } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'
import { ShoppingCart, Package, FileText, Coins, BarChart3, CreditCard, Users, Truck, Settings, UploadCloud, MousePointerClick, ShieldCheck, PiggyBank, Headset, TrendingUp, MonitorSmartphone, ReceiptText, CalendarDays, CircleCheck, ThumbsUp, Tag } from 'lucide-react'
import Hero from '../Hero/Hero'
import BusinessTypes from '../BusinessTypes/BusinessTypes'
import NosotrosBlock from './NosotrosBlock'

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

  const featuresGrid = [
    { icon: <ShoppingCart size={22} />, title: 'Ventas', desc: 'Registra tus ventas de forma rápida, emite boletas y facturas electrónicas desde cualquier dispositivo.', color: '#2563eb', image: '/img/Ventas.jpg' },
    { icon: <Package size={22} />, title: 'Inventario', desc: 'Controla tu stock en tiempo real, con alertas y reportes. Escanea códigos de barras desde tu celular.', color: '#16a34a', image: '/img/Inventario.jpg' },
    { icon: <FileText size={22} />, title: 'Compras', desc: 'Registra tus compras, controla proveedores y actualiza tu inventario automáticamente.', color: '#2563eb', image: '/img/Compras.jpg' },
    { icon: <Coins size={22} />, title: 'Caja', desc: 'Realiza la apertura y cierre de caja, controla tus ingresos y egresos con total seguridad.', color: '#16a34a', image: '/img/Caja.jpg' },
    { icon: <BarChart3 size={22} />, title: 'Reportes', desc: 'Conoce la rentabilidad de tu negocio con reportes claros y en tiempo real. Toma mejores decisiones.', color: '#2563eb', image: '/img/Reportes.jpg' },
    { icon: <CreditCard size={22} />, title: 'Múltiples medios de pago', desc: 'Registra los pagos realizados de las ventas.', color: '#16a34a', image: '/img/Pago.jpg' },
    { icon: <Users size={22} />, title: 'Clientes', desc: 'Controla las ventas al crédito y sus pagos.', color: '#2563eb', image: '/img/FONDO.png' },
    { icon: <Truck size={22} />, title: 'Proveedores', desc: 'Gestiona tus proveedores y mantén un histórico de tus compras de forma organizada.', color: '#16a34a', image: '/img/Proveedores.jpg' },
    { icon: <Settings size={22} />, title: 'Configuración', desc: 'Personaliza tus funciones.', color: '#2563eb', image: '/img/Configuracion.jpg' },
    { icon: <UploadCloud size={22} />, title: 'Integración con SUNAT', desc: 'Emite y envía tus comprobantes electrónicos de forma automática y segura.', color: '#16a34a', image: '/img/Sunat.jpg' },
  ]

  const benefits = [
    { icon: <MousePointerClick size={26} />, title: 'Fácil de usar', desc: 'Interfaz intuitiva y amigable para que empieces a trabajar desde el primer día, sin necesidad de conocimientos técnicos.', color: '#2563eb' },
    { icon: <ShieldCheck size={26} />, title: 'Seguro y confiable', desc: 'Tu información siempre protegida con altos estándares de seguridad y respaldo en la nube.', color: '#16a34a' },
    { icon: <PiggyBank size={26} />, title: 'Precio justo', desc: 'Planes accesibles pensados para pequeños negocios. Obtén más por menos y haz crecer tu negocio.', color: '#2563eb' },
    { icon: <Headset size={26} />, title: 'Soporte 24/7', desc: 'Siempre contigo. Nuestro equipo te brinda asistencia en todo momento, cuando lo necesites.', color: '#16a34a' },
    { icon: <TrendingUp size={26} />, title: 'Haz crecer tu negocio', desc: 'Controla tus ventas, clientes e inventario y toma mejores decisiones.', color: '#16a34a' },
    { icon: <MonitorSmartphone size={26} />, title: 'Desde cualquier dispositivo', desc: 'Accede desde tu celular, tablet o computadora, en cualquier momento y lugar.', color: '#2563eb' },
    { icon: <ReceiptText size={26} />, title: 'Facturas y boletas electrónicas', desc: 'Emite comprobantes válidos ante SUNAT de forma rápida y sencilla.', color: '#16a34a' },
    { icon: <Package size={26} />, title: 'Control de inventario', desc: 'Conoce tu stock en tiempo real, recibe alertas y evita quiebres de productos.', color: '#2563eb' },
  ]

  const plans = [
    {
      name: 'Plan Mensual',
      desc: 'Todo lo que necesitas, sin compromiso',
      badge: null,
      price: '19.90',
      period: '/mes',
      regularPrice: '35.50',
      accent: '#2563eb',
      accentBg: '#eff6ff',
      features: [
        'Resumen de ventas diarias y mensuales',
        'Ventas e inventario ilimitados',
        'Emisión de boletas y facturas (SUNAT) ilimitadas',
        'Control de productos y stock ilimitado',
        'Control de caja e reportes ilimitados',
        'Reportes en Excel (ventas, compras, cometas y más)',
        'Usuarios ilimitados',
        'Soporte activo',
        'Todas las funciones incluidas',
      ],
      featured: false,
      buttonStyle: 'outline',
    },
    {
      name: 'Plan Anual',
      desc: 'Ahorra más, crece sin límites',
      badge: 'MÁS CONVENIENTE',
      price: '230',
      period: '/año',
      regularPrice: '399.50',
      accent: '#16a34a',
      accentBg: '#f0fdf4',
      features: [
        'Resumen de ventas diarias y mensuales',
        'Ventas e inventario ilimitados',
        'Emisión de boletas y facturas (SUNAT) ilimitadas',
        'Control de productos y stock ilimitado',
        'Control de caja e reportes ilimitados',
        'Reportes en Excel (ventas, compras, cometas y más)',
        'Usuarios ilimitados',
        'Soporte activo',
        'Todas las funciones incluidas',
      ],
      featured: true,
      buttonStyle: 'primary',
    },
  ]

  const pricingBenefits = [
    { icon: <ThumbsUp size={22} />, title: 'Todo incluido en tu plan', desc: 'Sin costos ocultos.' },
    { icon: <ShieldCheck size={22} />, title: 'Tu información protegida', desc: 'En servidores certificados y con ciberseguridad.' },
    { icon: <Headset size={22} />, title: 'Soporte activo', desc: 'Siempre contigo, cuando lo necesites.' },
    { icon: <BarChart3 size={22} />, title: 'Listo para crecer', desc: 'Ideal para bodegas, minimarkets, farmacias, restaurantes y más.' },
  ]

  const reportItems = [
    { icon: <BarChart3 size={34} />, title: 'Resumen de ventas diarias y mensuales', color: '#1f1f70' },
    { icon: (<svg width="34" height="34" viewBox="0 0 32 32" fill="none"><rect x="4" y="2" width="24" height="28" rx="3" fill="#217346" /><path d="M12 11l8 10M20 11l-8 10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" /></svg>), title: 'Reportes en Excel (ventas, compras, cometas, entre otros)', color: '#1f1f70' },
    { icon: <Users size={34} />, title: 'Control de usuarios y permisos', color: '#1f1f70' },
    { icon: <Package size={34} />, title: 'Inventario y stock en tiempo real', color: '#1f1f70' },
    { icon: <FileText size={34} />, title: 'Histórico de ventas y movimientos', color: '#1f1f70' },
  ]

  return (
    <>
      <Hero onNavigate={onNavigate} />
      <BusinessTypes />

      {/* FUNCIONES */}
      <section id="funciones" className="features-section">
        <div className="container">
          <div className="features-header reveal">
            <h2>Todo lo que tu negocio necesita, <span className="text-green">en un mismo lugar</span></h2>
            <p>Sistema seguro, confiable y fácil de utilizar sin límites.</p>
          </div>
          <div className="features-grid-v2">
            {featuresGrid.map((f, i) => (
              <div key={i} className={`feature-card-v2 reveal delay-stagger-${i + 1}`}>
                <div className="feature-card-v2-image">
                  <img src={f.image} alt={f.title} />
                  <div className="feature-card-v2-icon" style={{color: f.color}}>
                    {f.icon}
                  </div>
                </div>
                <div className="feature-card-v2-content">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CONFIANZA */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-content reveal">
            <div className="trust-image-wrap">
              <img src="/img/FONDO-2.png" alt="RapiditoPe" className="trust-image" />
            </div>
            <div className="trust-text">
              <h2>Tu negocio en un espacio<br /><span className="text-green">seguro y confiable.</span></h2>
              <p>Somos una empresa formal que tiene como Socio estratégico principal a una empresa de Ciberseguridad con Certificados ISO 27001 - ISO 9001.</p>
            </div>
            <div className="trust-buttons">
              <button className="trust-btn-primary" onClick={() => onNavigate('login')}>
                Comienza ahora <HiArrowRight size={18} />
              </button>
              <button className="trust-btn-outline" onClick={() => {
                document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Ver planes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="benefits-section-v2">
        <div className="benefits-bg-shape"></div>
        <div className="container">
          <div className="benefits-header-v2 reveal">
            <h2>Beneficios que <span className="text-green">impulsan tu negocio</span></h2>
            <p>Una solución pensada para que trabajes más fácil, seguro y sin complicaciones.</p>
          </div>
          <div className="benefits-grid-v2">
            {benefits.map((b, i) => (
              <div key={i} className={`benefit-card-v2 reveal delay-stagger-${i + 1}`}>
                <div className="benefit-card-v2-icon" style={{background: `${b.color}15`, color: b.color}}>
                  {b.icon}
                </div>
                <div className="benefit-card-v2-text">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="pricing-section-v2">
        <div className="pricing-bg-image"></div>
        <div className="container">
          <div className="pricing-header-v2 reveal">
            <h2>Un plan con <span className="text-blue">todo ilimitado</span> y <span className="text-green">soporte técnico activo.</span></h2>
            <p>Tu negocio más simple, más rápido. Elige el plan que mejor se adapte a ti.</p>
          </div>

          <div className="pricing-layout-v2">
            <div className="pricing-left-promo reveal">
              <div className="pricing-left-card">
                <span>Tecnología</span>
                <span>para negocios</span>
                <span>reales</span>
              </div>
            </div>

            <div className="pricing-cards-v2">
              {plans.map((plan, i) => (
                <div key={i} className={`pricing-card-v2 ${plan.featured ? 'featured' : ''} reveal delay-stagger-${i + 1}`}>
                  {plan.badge && <span className="pricing-badge-v2">{plan.badge}</span>}
                  <div className="pricing-card-v2-header">
                    <div className="pricing-card-v2-icon" style={{background: plan.accentBg, color: plan.accent}}>
                      <CalendarDays size={28} />
                    </div>
                    <div>
                      <h3>{plan.name}</h3>
                      <p>{plan.desc}</p>
                    </div>
                  </div>
                  <span className="pricing-promo-badge">PROMOCIÓN</span>
                  <div className="pricing-price-v2">
                    <span className="pricing-currency-v2">S/</span>
                    <span className="pricing-amount-v2">{plan.price}</span>
                    <span className="pricing-period-v2">{plan.period}</span>
                  </div>
                  <p className="pricing-regular-price">Precio regular: <s>S/ {plan.regularPrice}</s></p>
                  <ul className="pricing-features-v2">
                    {plan.features.map((feat, j) => (
                      <li key={j}>
                        <CircleCheck size={16} className="pricing-check-v2" fill="#16a34a" color="#fff" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className={`pricing-btn-v2 ${plan.buttonStyle === 'primary' ? 'btn-primary' : 'btn-outline'}`}>
                    Comienza ahora
                  </button>
                </div>
              ))}
            </div>

            <div className="pricing-right-benefits">
              <p className="pricing-handwritten">Tu negocio más simple, más rápido.</p>
              {pricingBenefits.map((b, i) => (
                <div key={i} className="pricing-benefit-item">
                  <div className="pricing-benefit-icon">{b.icon}</div>
                  <div>
                    <strong>{b.title}</strong>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pricing-promo-banner reveal">
            <span className="promo-line"></span>
            <Tag size={20} className="promo-icon" />
            <span>¡PROMOCIÓN VÁLIDA HASTA EL 31 DE OCTUBRE DEL 2026!</span>
            <span className="promo-line"></span>
          </div>
        </div>
      </section>

      {/* REPORTES */}
      <section className="pricing-reports">
        <div className="container">
          <div className="pricing-reports-grid">
            <div className="pricing-reports-intro">
              <h2>Reportes que te dan el control de tu negocio</h2>
              <p>Visualiza la información de tu negocio de forma simple y en tiempo real. Exporta tus reportes en Excel y toma mejores decisiones.</p>
            </div>
            {reportItems.map((r, i) => (
              <div key={i} className="pricing-report-item">
                <div className="pricing-report-icon" style={{color: r.color}}>{r.icon}</div>
                <span>{r.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <NosotrosBlock />

      {/* CONTACTO */}
      <section id="contacto" className="home-contact-section">
        <div className="container">
          <div className="home-contact-grid">
            <div className="home-contact-info">
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

            <div className="home-contact-form-wrapper">
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

            <div className="home-contact-support">
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
