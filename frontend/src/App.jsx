import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Admin from './components/Admin';

function PortfolioLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Volunteering />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800 text-center text-gray-400">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Nirjan Barik. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
