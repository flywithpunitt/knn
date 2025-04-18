import { useEffect } from 'react'

const Hero = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.gradient-card')
      const mouseX = e.clientX
      const mouseY = e.clientY

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = mouseX - rect.left
        const y = mouseY - rect.top

        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen w-full bg-[#020617] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Dark radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A1A2F] via-[#020617] to-[#020617]" />
        
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-blue-500/5 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-teal-500/10" />
        
        {/* Animated glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              KNN
            </span>
            <span className="text-white ml-4">SYNDICATE</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
            Redefining digital performance marketing through innovation in search
            arbitrage, lead generation, affiliate marketing, and e-commerce.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Search Arbitrage', 'Lead Generation', 'Affiliate Marketing', 'E-commerce'].map((service) => (
              <div
                key={service}
                className="group relative px-6 py-8 bg-[#0A1A2F]/40 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:bg-[#0A1A2F]/60 border border-gray-800/50 hover:border-gray-700/50"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="relative text-xl font-semibold text-white mb-2">
                  {service}
                </h3>
                <div className="relative h-1 w-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm">Explore More</span>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 