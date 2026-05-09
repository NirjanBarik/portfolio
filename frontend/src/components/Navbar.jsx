import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Volunteering', href: '#volunteering' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'cyber-panel py-4 shadow-lg border-b-2 dark:border-[#00f3ff]' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-900 dark:text-[#00f3ff] font-orbitron tracking-widest dark:text-glow-cyan glitch" data-text="{ NB }">
          {`{ NB }`}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-[#00f3ff] transition-colors text-sm font-bold uppercase tracking-wider font-orbitron"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-none border border-slate-400 dark:border-[#fce205] bg-transparent text-slate-800 dark:text-[#fce205] hover:bg-slate-200 dark:hover:bg-[#fce205]/20 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.2)] dark:shadow-[2px_2px_0px_rgba(252,226,5,0.4)]"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-none border border-slate-400 dark:border-[#fce205] bg-transparent text-slate-800 dark:text-[#fce205] hover:bg-slate-200 dark:hover:bg-[#fce205]/20 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.2)] dark:shadow-[2px_2px_0px_rgba(252,226,5,0.4)]"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-slate-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full cyber-panel flex flex-col items-center py-6 space-y-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-800 dark:text-gray-200 hover:text-pink-600 dark:hover:text-[#00f3ff] text-lg font-bold font-orbitron uppercase"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
