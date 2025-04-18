import { motion } from 'framer-motion'

const features = {
  technology: [
    {
      title: 'Custom ERP System',
      description: 'Integrated enterprise resource planning',
      icon: '🔧'
    },
    {
      title: 'Automated Fulfillment',
      description: 'Smart order processing and shipping',
      icon: '📦'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced data analysis and insights',
      icon: '🤖'
    }
  ],
  operations: [
    {
      title: '24/7 Customer Support',
      description: 'Round-the-clock customer assistance',
      icon: '💬'
    },
    {
      title: 'Same-Day Shipping',
      description: 'Fast and reliable delivery',
      icon: '🚚'
    },
    {
      title: 'Multiple Warehouses',
      description: 'Strategic fulfillment locations',
      icon: '🏭'
    }
  ],
  intelligence: [
    {
      title: 'Real-time Analytics',
      description: 'Live performance monitoring',
      icon: '📊'
    },
    {
      title: 'Inventory Optimization',
      description: 'Smart stock management',
      icon: '📈'
    },
    {
      title: 'Predictive Modeling',
      description: 'Future trend forecasting',
      icon: '🎯'
    }
  ]
}

const FeatureCard = ({ feature, index }) => (
  <motion.div
    className="relative group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
    <div className="relative bg-gray-800 p-6 rounded-lg hover:bg-gray-700/50 transition duration-300">
      <div className="text-3xl mb-4">{feature.icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400 text-sm">{feature.description}</p>
    </div>
  </motion.div>
)

const Ecommerce = () => {
  const features = [
    {
      title: 'Seamless Integration',
      description: 'Connect with popular e-commerce platforms effortlessly',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Smart Inventory',
      description: 'AI-powered inventory management and forecasting',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time insights and performance metrics',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Secure Payments',
      description: 'Multi-currency support with fraud protection',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  return (
    <section className="relative w-full bg-[#0B1120] py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0A1A2F] to-[#0B1120]" />
        <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            E-commerce Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform your online store with our cutting-edge e-commerce solutions,
            designed to maximize sales and streamline operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-[#0F1A2F] p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-800/50">
                <div className="flex items-center space-x-5">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Active Stores', value: '10K+' },
            { label: 'Monthly Orders', value: '1M+' },
            { label: 'Revenue Generated', value: '$100M+' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-[#0F1A2F] p-6 rounded-lg text-center shadow-2xl backdrop-blur-sm border border-gray-800/50">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ecommerce 