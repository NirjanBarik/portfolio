import { motion } from 'framer-motion';
import { Mail, Phone, Download } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-none border border-slate-400 dark:border-[#00f3ff] bg-transparent mb-6 text-sm font-mono text-slate-800 dark:text-[#00f3ff] shadow-[2px_2px_0px_rgba(0,0,0,0.2)] dark:shadow-[2px_2px_0px_rgba(0,243,255,0.4)]">
              &gt; console.log("Hello World!");_
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight font-orbitron uppercase">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 dark:from-[#00f3ff] dark:to-[#ff003c] glitch" data-text="Nirjan">Nirjan</span>
              <br />Full-Stack Developer
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-xl text-slate-600 dark:text-[#fce205] mb-10 max-w-2xl font-mono uppercase tracking-widest">
              &gt; Aspiring Software Engineer
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-slate-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm an undergraduate student pursuing B.Tech in Computer Science at KGEC, passionate about creating innovative solutions with AI/ML and full-stack development.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="https://linkedin.com/in/nirjanbarik" target="_blank" rel="noreferrer" className="p-3 bg-transparent text-slate-800 dark:text-[#00f3ff] hover:bg-slate-800 hover:text-white dark:hover:bg-[#00f3ff] dark:hover:text-black transition-all duration-300 border border-slate-800 dark:border-[#00f3ff] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,243,255,0.4)]">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com/NirjanBarik" target="_blank" rel="noreferrer" className="p-3 bg-transparent text-slate-800 dark:text-[#ff003c] hover:bg-slate-800 hover:text-white dark:hover:bg-[#ff003c] dark:hover:text-black transition-all duration-300 border border-slate-800 dark:border-[#ff003c] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,0,60,0.4)]">
                <GithubIcon size={20} />
              </a>
              <a href="mailto:nirjanbarik1@gmail.com" className="p-3 bg-transparent text-slate-800 dark:text-[#fce205] hover:bg-slate-800 hover:text-white dark:hover:bg-[#fce205] dark:hover:text-black transition-all duration-300 border border-slate-800 dark:border-[#fce205] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(252,226,5,0.4)]">
                <Mail size={20} />
              </a>
              <a href="tel:+918334807904" className="p-3 bg-transparent text-slate-800 dark:text-[#b026ff] hover:bg-slate-800 hover:text-white dark:hover:bg-[#b026ff] dark:hover:text-black transition-all duration-300 border border-slate-800 dark:border-[#b026ff] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(176,38,255,0.4)]">
                <Phone size={20} />
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#projects" className="px-8 py-4 cyber-button shadow-[4px_4px_0px_rgba(0,0,0,0.2)] dark:shadow-none flex items-center gap-2">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 cyber-panel hover:bg-slate-100 dark:hover:bg-[#00f3ff]/10 text-slate-800 dark:text-[#00f3ff] font-orbitron font-bold uppercase transition-all duration-300 flex items-center gap-2">
                <Mail size={18} />
                Get In Touch
              </a>
              <a href="https://drive.google.com/file/d/1nFLMgBMs3TpWS0RoP6vEx86uBJWi1efn/view?usp=sharing" target="_blank" rel="noreferrer" className="px-8 py-4 cyber-panel hover:bg-slate-100 dark:hover:bg-[#ff003c]/10 text-slate-800 dark:text-[#ff003c] font-orbitron font-bold uppercase transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                <Download size={18} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-xl opacity-40 animate-pulse"></div>
              <img 
                src="https://i.postimg.cc/vmKdzRwv/IMG-20240919-205937.jpg" 
                alt="Nirjan Barik" 
                className="relative w-full h-full object-cover rounded-none border-2 border-slate-800 dark:border-[#00f3ff] z-10"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
