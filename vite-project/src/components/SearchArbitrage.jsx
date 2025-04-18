const SearchArbitrage = () => {
  const leftFeatures = [
    'Proprietary Bidding Algorithm',
    'Real-time Analytics Dashboard',
    'Advanced Traffic Quality Scoring',
    'Multi-Channel Optimization',
    'Automated Campaign Management'
  ]

  const rightFeatures = [
    'Global Market Coverage',
    '24/7 Performance Monitoring',
    'Advanced Fraud Prevention',
    'Automated Bid Optimization',
    'Custom Reporting Solutions'
  ]

  return (
    <section className="relative w-full bg-[#0B1120] py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0A1A2F] to-[#0B1120]" />
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Search Arbitrage
              <br />
              Excellence
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-xl">
              Leading the search arbitrage industry with proprietary technology
              and advanced algorithms that consistently deliver exceptional
              results.
            </p>

            {/* Left Feature List */}
            <div className="space-y-6">
              {leftFeatures.map((feature) => (
                <div key={feature} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
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
                    </div>
                  </div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Card */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="relative">
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl blur-sm opacity-50" />
              <div className="relative bg-[#0F1A2F] rounded-xl p-8 shadow-2xl backdrop-blur-sm border border-gray-800/50">
                {/* Right Feature List */}
                <div className="space-y-6">
                  {rightFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-teal-400"
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
                        </div>
                      </div>
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchArbitrage 