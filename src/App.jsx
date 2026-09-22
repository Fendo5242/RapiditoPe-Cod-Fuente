import { useState, useEffect } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from './components/Header/Header'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const [currentModule, setCurrentModule] = useState('home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentModule])

  const renderModule = () => {
    switch (currentModule) {
      case 'home':
        return <Home onNavigate={setCurrentModule} />
      case 'contact':
        return <Contact />
      case 'login':
        return <Login onNavigate={setCurrentModule} />
      default:
        return <Home onNavigate={setCurrentModule} />
    }
  }

  const titles = {
    home: 'Rapidito.pe | Sistema Integral para Negocios',
    contact: 'Contacto | Rapidito.pe',
    login: 'Iniciar Sesion | Rapidito.pe'
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{titles[currentModule] || titles.home}</title>
        <meta name="description" content="Sistema integral SaaS para negocios en Perú." />
      </Helmet>
      <Header currentModule={currentModule} onNavigate={setCurrentModule} />
      <main key={currentModule}>
        {renderModule()}
      </main>
      {currentModule !== 'login' && <Footer onNavigate={setCurrentModule} />}
      <ScrollToTop />
    </HelmetProvider>
  )
}

export default App
