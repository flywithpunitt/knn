import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const categories = [
  { name: 'All Posts', id: 'all' },
  { name: 'Search Arbitrage', id: 'search' },
  { name: 'Affiliate Marketing', id: 'affiliate' },
  { name: 'E-commerce', id: 'ecommerce' },
  { name: 'Digital Marketing', id: 'digital' },
  { name: 'Case Studies', id: 'case' },
  { name: 'Industry News', id: 'news' }
]

const blogPosts = [
  {
    id: 1,
    title: 'Mastering Search Arbitrage: A Complete Guide',
    excerpt: 'Learn how to leverage search arbitrage effectively to maximize your ROI and create sustainable income streams.',
    category: 'Search Arbitrage',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['Search Arbitrage', 'Digital Marketing', 'ROI']
  },
  {
    id: 2,
    title: 'The Future of Affiliate Marketing in 2024',
    excerpt: 'Discover emerging trends and strategies in affiliate marketing that will shape the industry this year.',
    category: 'Affiliate Marketing',
    date: 'March 12, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['Affiliate Marketing', 'Trends', 'Strategy']
  },
  {
    id: 3,
    title: 'E-commerce Success Stories: KNN Syndicate Edition',
    excerpt: 'Real case studies of successful e-commerce ventures launched through KNN Syndicate\'s platform.',
    category: 'E-commerce',
    date: 'March 10, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['E-commerce', 'Case Studies', 'Success Stories']
  },
  {
    id: 4,
    title: 'Advanced SEO Techniques for Digital Marketers',
    excerpt: 'Master the latest SEO strategies and tools to improve your website\'s visibility and organic traffic.',
    category: 'Digital Marketing',
    date: 'March 8, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['SEO', 'Digital Marketing', 'Analytics']
  },
  {
    id: 5,
    title: 'Maximizing ROI with Data-Driven Lead Generation',
    excerpt: 'Learn how to optimize your lead generation campaigns using advanced data analytics and machine learning techniques.',
    category: 'Lead Generation',
    date: 'March 7, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['Lead Generation', 'Analytics', 'Machine Learning']
  },
  {
    id: 6,
    title: 'Social Media Marketing Strategies That Convert',
    excerpt: 'Discover proven social media marketing tactics that drive engagement and convert followers into customers.',
    category: 'Digital Marketing',
    date: 'March 6, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['Social Media', 'Digital Marketing', 'Conversion']
  },
  {
    id: 7,
    title: 'Building High-Converting Landing Pages',
    excerpt: 'Step-by-step guide to creating landing pages that drive conversions and maximize your marketing efforts.',
    category: 'Case Studies',
    date: 'March 5, 2024',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'Tom Anderson',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['Landing Pages', 'Conversion', 'UX Design']
  },
  {
    id: 8,
    title: 'Email Marketing Automation Best Practices',
    excerpt: 'Learn how to set up effective email marketing automation workflows that nurture leads and drive sales.',
    category: 'Digital Marketing',
    date: 'March 4, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'Lisa Park',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['Email Marketing', 'Automation', 'Lead Nurturing']
  },
  {
    id: 9,
    title: 'Content Marketing ROI: Measuring Success',
    excerpt: 'Comprehensive guide to tracking and measuring the success of your content marketing initiatives.',
    category: 'Digital Marketing',
    date: 'March 3, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['Content Marketing', 'Analytics', 'ROI']
  },
  {
    id: 10,
    title: 'PPC Campaign Optimization Techniques',
    excerpt: 'Advanced strategies for optimizing your PPC campaigns to reduce costs and increase conversions.',
    category: 'Digital Marketing',
    date: 'March 2, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    author: {
      name: 'Rachel Green',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80'
    },
    tags: ['PPC', 'Advertising', 'Campaign Optimization']
  }
]

const popularPosts = [
  {
    title: 'Top 10 Digital Marketing Strategies for 2024',
    date: 'March 8, 2024',
    views: '2.5k',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
  },
  {
    title: 'How to Scale Your E-commerce Business',
    date: 'March 5, 2024',
    views: '1.8k',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
  },
  {
    title: 'The Ultimate Guide to Lead Generation',
    date: 'March 3, 2024',
    views: '1.2k',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
  }
]

const popularTags = [
  'Digital Marketing',
  'SEO',
  'E-commerce',
  'Affiliate Marketing',
  'Search Arbitrage',
  'Lead Generation',
  'Analytics',
  'Strategy',
  'Social Media',
  'Content Marketing',
  'Email Marketing',
  'PPC'
]

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [email, setEmail] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  const filteredPosts = blogPosts
    .filter(post => {
      if (selectedCategory === 'all') return true
      return post.category.toLowerCase().includes(selectedCategory)
    })
    .filter(post => {
      if (!searchQuery) return true
      return (
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })

  return (
    <>
      <div className="min-h-screen bg-[#020617] pt-24 pb-16">
        {/* Enhanced Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
          {/* Background Effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 blur-3xl opacity-30" />
            <div className="absolute inset-0 bg-[#020617] mix-blend-multiply" />
          </div>
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                KNN Syndicate
              </span>
              <span className="text-white"> Blog</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Stay updated with the latest insights, strategies, and success stories
            </p>
            <p className="text-gray-400 text-lg">
              Discover cutting-edge digital marketing trends, e-commerce innovations, and expert insights 
              to help grow your business in the digital age.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-[#0A1A2F]/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                10K+
              </div>
              <div className="text-gray-400 text-sm">Monthly Readers</div>
            </div>
            <div className="bg-[#0A1A2F]/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                200+
              </div>
              <div className="text-gray-400 text-sm">Expert Articles</div>
            </div>
            <div className="bg-[#0A1A2F]/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                50+
              </div>
              <div className="text-gray-400 text-sm">Industry Experts</div>
            </div>
            <div className="bg-[#0A1A2F]/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                24/7
              </div>
              <div className="text-gray-400 text-sm">Updated Content</div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 bg-[#0A1A2F] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <svg
                    className="absolute right-4 top-3.5 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white'
                        : 'bg-[#0A1A2F] text-gray-400 hover:text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </motion.div>

              {/* Blog Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-[#0A1A2F] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="bg-[#1A2A3F] px-2 py-1 rounded-full">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2 hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-[#1A2A3F] text-gray-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-400">{post.author.name}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-1"
                        >
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-12 flex justify-center gap-2"
              >
                <button className="px-4 py-2 bg-[#0A1A2F] text-gray-400 rounded-lg hover:text-white transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 bg-[#0A1A2F] text-gray-400 rounded-lg hover:text-white transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-[#0A1A2F] text-gray-400 rounded-lg hover:text-white transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-[#0A1A2F] text-gray-400 rounded-lg hover:text-white transition-colors">
                  Next
                </button>
              </motion.div>
            </div>

            {/* Sidebar - Made sticky */}
            <div className="lg:w-80">
              <div className="sticky top-24 space-y-6">
                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-[#0A1A2F] rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Subscribe to Newsletter
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Get the latest updates and insights delivered to your inbox.
                  </p>
                  <form onSubmit={handleSubscribe}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 bg-[#1A2A3F] rounded-lg text-white placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                </motion.div>

                {/* Popular Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#0A1A2F] rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Popular Posts
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="flex items-start gap-3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover:ring-2 ring-blue-500 transition-all"
                          />
                          <div>
                            <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Popular Tags */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#0A1A2F] rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#1A2A3F] rounded-full text-sm text-gray-400 hover:text-white hover:bg-[#2A3A4F] transition-all duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#0A1A2F] rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1A2A3F] rounded-lg text-gray-400 hover:text-white hover:bg-[#2A3A4F] transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1A2A3F] rounded-lg text-gray-400 hover:text-white hover:bg-[#2A3A4F] transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1A2A3F] rounded-lg text-gray-400 hover:text-white hover:bg-[#2A3A4F] transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1A2A3F] rounded-lg text-gray-400 hover:text-white hover:bg-[#2A3A4F] transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog 