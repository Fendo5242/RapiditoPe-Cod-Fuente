import { useState } from 'react'
import { HiUser, HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'
import { FiHeadphones } from 'react-icons/fi'

const Login = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    acceptTerms: false,
  })

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', loginData)
    alert('Sesion iniciada correctamente!')
  }

  return (
    <div className="login-page">
      <div className="login-page-left">
        <div className="login-left-overlay" />

        <div className="login-hero-content">
          <span className="login-hero-badge">SISTEMA INTEGRAL PARA NEGOCIOS</span>
          <h1>
            Todo lo que tu negocio necesita, <span>en un solo lugar.</span>
          </h1>
          <p>
            Vende más, controla tu inventario y toma mejores decisiones desde cualquier dispositivo, fácil, rápido y seguro.
          </p>

          <div className="login-features-grid">
            <div className="login-feature-card">
              <div className="login-feature-icon login-icon-green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
              </div>
              <h4>Boletas ilimitadas</h4>
              <p>Emite todas las que necesites</p>
            </div>
            <div className="login-feature-card">
              <div className="login-feature-icon login-icon-orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4>Stock actualizado</h4>
              <p>Control en tiempo real de tu inventario</p>
            </div>
            <div className="login-feature-card">
              <div className="login-feature-icon login-icon-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 5-9"/></svg>
              </div>
              <h4>Reportes diarios</h4>
              <p>Toma decisiones con datos reales</p>
            </div>
            <div className="login-feature-card">
              <div className="login-feature-icon login-icon-teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <h4>Seguro y confiable</h4>
              <p>Protección de extremo a extremo</p>
            </div>
          </div>
        </div>

        <div className="login-support-bar">
          <div className="support-item">
            <span className="support-icon"><FiHeadphones size={20} /></span>
            <div>
              <strong>Soporte técnico siempre contigo</strong>
              <p>Estamos para ayudarte cuando lo necesites.</p>
            </div>
          </div>
          <div className="support-item">
            <span className="support-icon support-icon-whatsapp"><SiWhatsapp size={20} /></span>
            <div>
              <strong>Contactanos por WhatsApp</strong>
              <p>+51 968 716 224</p>
            </div>
          </div>
        </div>
      </div>

      <div className="login-page-right">
        <div className="login-form-card">
          <div className="login-form-logo">
            <img src="/img/logo.png" alt="RapiditoPe" />
          </div>
          <h2 className="login-form-brand">RapiditoPe</h2>
          <h3>Bienvenido de vuelta</h3>
          <p className="login-form-subtitle">Ingresa a tu cuenta para continuar</p>

          <form onSubmit={handleLoginSubmit} className="login-page-form">
            <div className="form-group">
              <label>Email o usuario</label>
              <div className="input-wrapper">
                <HiUser className="input-icon" />
                <input
                  type="text"
                  name="email"
                  placeholder="EJEMPLO@NEGOCIO.COM"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <div className="input-wrapper">
                <HiLockClosed className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-options-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                />
                <span>Recordarme</span>
              </label>
              <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
            </div>

            <label className="checkbox-label terms-checkbox">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={loginData.acceptTerms}
                onChange={handleLoginChange}
                required
              />
              <span>Acepto los <a href="#" className="terms-link">Términos y Condiciones</a></span>
            </label>

            <button type="submit" className="login-page-submit">
              <HiLockClosed size={18} />
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
