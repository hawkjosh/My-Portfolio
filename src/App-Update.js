import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Main from './components/Main.jsx';
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
                <Route exact path="/My-Portfolio" element={<Main />} />
                <Route exact path="/My-Portfolio/about" element={<About />} />
                <Route exact path="/My-Portfolio/portfolio" element={<Portfolio />} />
                <Route exact path="/My-Portfolio/contact" element={<Contact />} />
              </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  )
};