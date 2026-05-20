// src/App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home    from './pages/Home';
import About   from './pages/About';
import Projects from './pages/Projects';
import Stacks  from './pages/Stacks';
import CV      from './pages/CV';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Stacks />
        <CV />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
