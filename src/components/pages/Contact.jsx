import { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiOutlineArrowRight, HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Mensaje enviado! Te contactaremos pronto.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactItems = [
    { icon: <SiWhatsapp size={20} />, label: 'WhatsApp', value: '+51 968 716 224', link: 'https://wa.me/51968716224' },
    { icon: <HiMail size={20} />, label: 'Email', value: 'hola@rapidito.pe', link: 'mailto:hola@rapidito.pe' },
    { icon: <HiPhone size={20} />, label: 'Teléfono', value: '+01 123 4567', link: 'tel:+011234567' },
    { icon: <HiClock size={20} />, label: 'Horario', value: 'Lunes a Viernes 9:00AM - 6:00PM', link: null },
  ]

  return (
    <div className="page-module">
      <section className="page-hero page-hero-contact">
        <div className="container">
          <div className="page-hero-content animate-fade-in-up">
            <span className="badge">Contacto</span>
            <h1>Estamos aquí para ayudarte</h1>
            <p>Escríbenos y te respondemos lo antes posible.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info animate-fade-in-left">
              <h2>Información de Contacto</h2>
              <p>Estamos listos para ayudarte. Comunícate con nosotros por cualquiera de estos medios.</p>
              <div className="contact-details">
                {contactItems.map((item, i) => (
                  <div key={i} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-text">
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

              <div className="support-contact-card animate-fade-in-up">
                <HiOutlineQuestionMarkCircle size={32} className="support-contact-icon" />
                <div>
                  <h4>Soporte técnico siempre contigo</h4>
                  <p>¿Necesitas ayuda? Nuestro equipo está disponible 24/7.</p>
                </div>
                <a href="https://wa.me/51968716224?text=Hola%20necesito%20soporte%20técnico" target="_blank" rel="noopener noreferrer" className="support-contact-btn">
                  Contactar soporte
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper animate-fade-in-right">
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Envíanos un mensaje</h3>
                <div className="form-group">
                  <label>Nombre completo *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Tu nombre completo" required />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="tu@email.com" required />
                </div>
                <div className="form-group">
                  <label>Asunto *</label>
                  <select name="subject" value={formData.subject} onChange={handleInputChange} required>
                    <option value="">Selecciona un asunto</option>
                    <option value="ventas">Consulta sobre ventas</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="demo">Solicitar demostración</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Mensaje *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Escribe tu mensaje aquí..." rows="5" required />
                </div>
                <button type="submit" className="submit-btn">
                  Enviar mensaje <HiOutlineArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9766024305675!2d-77.0428!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c41d0c757703%3A0xa0b7c5133d5a54e4!2sLima%2C%20Peru!5e0!3m2!1ses!2s!4v1700000000000!5m2!1ses!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Rapidito.pe"
          />
        </div>
      </section>
    </div>
  )
}

export default Contact
