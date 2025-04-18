import { Link } from 'react-router-dom'

const JoinRevolution = () => {
  return (
    <section className="relative w-full bg-[#0B1120] py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0A1A2F] to-[#0B1120]" />
        <div className="absolute left-1/3 top-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute right-1/3 bottom-1/3 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Join the Digital Revolution
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Be part of our journey as we continue to redefine the boundaries of digital marketing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/join"
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
          >
            Join Our Team
            <svg
              className="ml-2 w-5 h-5"
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

          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-semibold bg-[#1A2333] hover:bg-[#1E2A3D] border border-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Footer Content */}
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-xl font-bold text-white">KNN SYNDICATE</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Transforming the digital landscape through innovation and excellence.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/search" className="text-gray-400 hover:text-white transition-colors">Search Arbitrage</Link></li>
                <li><Link to="/leads" className="text-gray-400 hover:text-white transition-colors">Lead Generation</Link></li>
                <li><Link to="/ecommerce" className="text-gray-400 hover:text-white transition-colors">E-commerce</Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © 2025 KNN Syndicate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinRevolution 