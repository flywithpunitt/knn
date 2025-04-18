import { motion } from 'framer-motion'

const HomeServices = () => {
  const services = [
    {
      title: "Search Arbitrage Excellence",
      description: "Leading the search arbitrage industry with proprietary technology and advanced algorithms that consistently deliver exceptional results.",
      features: [
        "Proprietary Bidding Algorithm",
        "Real-time Analytics Dashboard",
        "Advanced Traffic Quality Scoring",
        "Multi-Channel Optimization",
        "Automated Campaign Management"
      ],
      additionalFeatures: [
        "Global Market Coverage",
        "24/7 Performance Monitoring",
        "Advanced Trend Recognition",
        "Automated Bid Optimization",
        "Custom Reporting Solutions"
      ]
    },
    {
      title: "Lead Generation Mastery",
      description: "Delivering premium quality leads at scale across multiple verticals with advanced verification and distribution systems.",
      features: [
        "Advanced Lead Scoring",
        "Real-time Verification",
        "Multi-Channel Distribution",
        "Custom Integration APIs",
        "Fraud Prevention System"
      ],
      additionalFeatures: [
        "Real-time Lead Distribution",
        "Custom Distribution Rules",
        "Advanced Fraud Prevention",
        "Multi-vertical Support",
        "Advanced Quality Control"
      ]
    },
    {
      title: "Affiliate Marketing Empire",
      description: "Operating one of the largest affiliate networks globally with industry-leading technology and partner support systems.",
      features: [
        "Global Partner Network",
        "Advanced Security",
        "Partner Support",
        "Real-time Performance Tracking",
        "Custom Payout Structure"
      ],
      additionalFeatures: [
        "Real-time Performance Tracking",
        "Custom Payout Structure",
        "Advanced Reporting Tools",
        "Automated Payment System",
        "Dedicated Partner Support"
      ]
    },
    {
      title: "E-commerce Excellence",
      description: "Operating a network of successful E-commerce brands with advanced technology and global fulfillment capabilities.",
      features: [
        "Global Fulfillment Network",
        "Inventory Management System",
        "Customer Service Platform",
        "Analytics Dashboard",
        "Marketing Automation Tools"
      ],
      additionalFeatures: [
        "Custom ERP System",
        "Automated Fulfillment",
        "AI-Powered Analytics",
        "Multiple Warehouses",
        "Real-time Analytics"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <div className="relative">
      {services.map((service, index) => (
        <section 
          key={service.title}
          className={`min-h-[100svh] relative flex items-center py-16 sm:py-20 lg:py-24 ${
            index % 2 === 0 
              ? 'bg-gradient-to-br from-[#020617] via-[#0A1A2F] to-[#020617]' 
              : 'bg-gradient-to-bl from-[#020617] via-[#0A1A2F] to-[#020617]'
          }`}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-12 lg:gap-20"
            >
              {/* Service Info */}
              <motion.div 
                variants={itemVariants}
                className={`flex-1 space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 !leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {service.features.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-3 text-gray-300 group"
                    >
                      <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-teal-400/10 group-hover:bg-teal-400/20 transition-colors duration-200">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base lg:text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features Card */}
              <motion.div 
                variants={itemVariants}
                className={`flex-1 w-full ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#0A1A2F]/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 sm:space-y-8 shadow-2xl shadow-blue-500/5"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">Advanced Features</h3>
                  <div className="space-y-4 sm:space-y-6">
                    {service.additionalFeatures.map((feature) => (
                      <motion.div
                        key={feature}
                        whileHover={{ x: 10 }}
                        className="flex items-center space-x-3 sm:space-x-4 text-gray-300 group"
                      >
                        <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-blue-400/10 group-hover:bg-blue-400/20 transition-colors duration-200">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <span className="text-sm sm:text-base lg:text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default HomeServices 