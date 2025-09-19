import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function Home() {
  return <h1>Trang Home 🏠 - Hieu</h1>
}

function About() {
  return <h1>Trang About 📖 - Hieu</h1>
}

function Contact() {
  return <h1>Trang Contact 📞 - Hieu</h1>
}

function App3() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App3
