import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'

const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <HiArrowUp size={20} />
    </button>
  )
}

export default ScrollToTop
