import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gathering from './pages/Gathering';
import Journal from './pages/Journal';
import Connect from './pages/Connect';
import Menu from './pages/Menu';
import './App.css';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <Header />
      

      {/* Dynamic Route Content Selector */}
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gathering" element={<Gathering />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
        <Footer />

    </Router>
  )
}

export default App