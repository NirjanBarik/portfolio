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
import { ThemeProvider } from './context/ThemeContext';

function PortfolioLayout() {
  return (
    <>
      <Navbar />
      
      {/* Moving Stars Background (Only visible in dark mode via CSS opacity) */}
      <div className="stars-bg-1"></div>
      <div className="stars-bg-2"></div>
      
      <main className="transition-colors duration-300 relative z-10 animate-modern-entry">
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
      <footer className="bg-white/50 dark:bg-[#050505]/80 py-8 border-t border-slate-300 dark:border-[#ff003c]/30 text-center text-slate-600 dark:text-gray-400 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Nirjan Barik. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioLayout />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
