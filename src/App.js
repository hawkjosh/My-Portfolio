import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Navigation />
            <div>
              <Routes>
                <Route exact path="/" element={<Header />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/contact" element={<Contact />} />
              </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  )
};