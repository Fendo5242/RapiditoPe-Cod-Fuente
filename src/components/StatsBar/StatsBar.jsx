import { Users, FileCog, ShieldCheck, Headset } from 'lucide-react'

const StatsBar = () => {
  const stats = [
    { icon: <Users size={34} strokeWidth={1.75} />, value: '+1,200', label: 'Negocios confían en nosotros', valueColor: '#0f172a' },
    { icon: <FileCog size={34} strokeWidth={1.75} />, value: '+50,000', label: 'Boletas emitidas diariamente', valueColor: '#0f172a' },
    { icon: <ShieldCheck size={34} strokeWidth={1.75} />, value: '100% seguro', label: 'Certificados de seguridad', valueColor: '#0f172a' },
    { icon: <Headset size={34} strokeWidth={1.75} />, value: 'Soporte 24/7', label: 'Siempre a tu lado', valueColor: '#16a34a' },
  ]

  return (
    <section className="stats-bar">
      <div className="stats-bar-container">
        {stats.map((s, i) => (
          <div key={i} className="stats-bar-item">
            <div className="stats-bar-icon">{s.icon}</div>
            <div className="stats-bar-text">
              <span className="stats-bar-value" style={{ color: s.valueColor }}>{s.value}</span>
              <span className="stats-bar-label">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar
