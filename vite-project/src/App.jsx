import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeHero from './components/HomeHero'
import Services from './components/Services'
import About from './components/About'
import JoinRevolution from './components/JoinRevolution'
import Blog from './components/Blog'
import Contact from './components/Contact'
import HomeServices from './components/HomeServices'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HomeHero />
              <HomeServices />
              <JoinRevolution />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
