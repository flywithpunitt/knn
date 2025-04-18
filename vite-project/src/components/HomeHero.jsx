import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HomeHero = () => {
  const services = [
    { name: 'Search Arbitrage', path: '/services#search-arbitrage' },
    { name: 'Lead Generation', path: '/services#lead-generation' },
    { name: 'Affiliate Marketing', path: '/services#affiliate-marketing' },
    { name: 'E-commerce', path: '/services#ecommerce' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1A2F]/50 to-[#020617]"></div>
      </div>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-l from-teal-500/20 to-cyan-500/20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-12 sm:space-y-16"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                KNN SYNDICATE
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Redefining digital performance marketing through innovation in search arbitrage, lead generation, affiliate marketing, and e-commerce.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="group relative overflow-hidden rounded-2xl bg-[#0A1A2F]/50 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 transition-all duration-300 hover:bg-[#0A1A2F]/70 hover:border-gray-700 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="relative text-base sm:text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-300">
                  {service.name}
                </h3>
              </Link>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeHero 