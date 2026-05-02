import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

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
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full glass mb-6 text-sm font-mono text-blue-400">
              console.log("Hello World!");
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Nirjan Barik
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
              Aspiring Software Engineer
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm an undergraduate student pursuing B.Tech in Computer Science at KGEC, passionate about creating innovative solutions with AI/ML and full-stack development.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="https://linkedin.com/in/nirjanbarik" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-700">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/NirjanBarik" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800/50 hover:bg-white hover:text-black transition-all duration-300 border border-slate-700">
                <Github size={20} />
              </a>
              <a href="mailto:nirjanbarik1@gmail.com" className="p-3 rounded-full bg-slate-800/50 hover:bg-red-500 hover:text-white transition-all duration-300 border border-slate-700">
                <Mail size={20} />
              </a>
              <a href="tel:+918334807904" className="p-3 rounded-full bg-slate-800/50 hover:bg-green-500 hover:text-white transition-all duration-300 border border-slate-700">
                <Phone size={20} />
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                <Mail size={18} />
                Get In Touch
              </a>
              <a href="https://drive.google.com/file/d/1nFLMgBMs3TpWS0RoP6vEx86uBJWi1efn/view?usp=sharing" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
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
                className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
