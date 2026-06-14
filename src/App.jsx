// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Projects from './pages/Projects';
import Stacks from './pages/Stacks';
import Works from './pages/Works';
import CV from './pages/CV';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* Homepage holds inline sections */}
          <Route path="/" element={
            <>
              <Home />
              <Works />
              <Stacks />
              
            </>
          } />
          {/* CV is separate */}
          <Route path="/my_journey" element={<Journey />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
