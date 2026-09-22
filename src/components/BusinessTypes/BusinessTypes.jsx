import { Package, UtensilsCrossed, Pill, ShoppingBag, Stethoscope } from 'lucide-react'

const BusinessTypes = () => {
  const types = [
    { icon: <Package size={22} strokeWidth={2} />, name: 'Bodegas y minimarkets', image: '/img/FONDO.png' },
    { icon: <UtensilsCrossed size={22} strokeWidth={2} />, name: 'Restaurantes y cafeterías', image: '/img/FONDO.png' },
    { icon: <Pill size={22} strokeWidth={2} />, name: 'Farmacias y boticas', image: '/img/FONDO.png' },
    { icon: <ShoppingBag size={22} strokeWidth={2} />, name: 'Tiendas y retail', image: '/img/FONDO.png' },
    { icon: <Stethoscope size={22} strokeWidth={2} />, name: 'Consultorios y clínicas', image: '/img/FONDO.png' },
  ]

  return (
    <section className="business-types-section">
      <div className="container">
        <div className="business-types-header">
          <h2>Una solución para cada tipo de negocio</h2>
          <p>RapiditoPe se adapta a tu rubro, con funciones específicas que impulsan tu crecimiento.</p>
        </div>
        <div className="business-types-grid">
          {types.map((type, i) => (
            <div key={i} className="business-type-card">
              <div className="business-type-image">
                <img src={type.image} alt={type.name} />
                <div className="business-type-overlay">
                  <div className="business-type-icon">{type.icon}</div>
                  <span className="business-type-name">{type.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessTypes
