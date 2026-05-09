import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Languages } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Class 12 Position', value: '3rd', icon: Award, color: 'text-yellow-400' },
    { label: 'WBJEE Rank', value: '6087', icon: BookOpen, color: 'text-blue-400' },
    { label: 'Blood Donations', value: '2', icon: Heart, color: 'text-red-400' },
    { label: 'Languages', value: '3', icon: Languages, color: 'text-green-400' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-[#00f3ff] font-orbitron glitch" data-text="About Me">About Me</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 space-y-6 text-slate-700 dark:text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm a Full-stack and AI-focused Computer Science undergraduate at Kalyani Government Engineering College (Class of 2023-2027), passionate about building scalable products and innovative solutions. I am currently seeking opportunities in startups to leverage my skills in MERN stack, FastAPI, and NLP, while taking ownership of end-to-end product development.
            </p>
            <p>
              My academic journey has been complemented by developing production-ready applications, including an AI-Powered Resume Analyzer and a MERN JSON Formatter. I'm particularly interested in Artificial Intelligence and Machine Learning, and I've completed a certification course in Geodata Processing using Python and Machine Learning from the Indian Institute of Remote Sensing, ISRO.
            </p>
            <p>
              Beyond academics, I've achieved notable accomplishments such as securing the 3rd position in my school in the Class 12 Board Examination and ranking 6087 in the WBJEE Examination in 2023. I'm also committed to social contributions, being a regular blood donor.
            </p>
            <div className="cyber-panel p-6 mt-8 border-l-4 border-l-pink-500 dark:border-l-[#ff003c]">
              <p className="mb-2"><span className="text-slate-900 dark:text-[#00f3ff] font-bold font-mono">Languages:</span> English, Bengali, Hindi</p>
              <p><span className="text-slate-900 dark:text-[#00f3ff] font-bold font-mono">Interests:</span> Competitive Programming, AI-ML Research, DevOps, Open Source Contributions</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cyber-panel p-6 flex flex-col items-center justify-center text-center group transition-colors hover:border-pink-500 dark:hover:border-[#ff003c]"
              >
                <stat.icon className={`w-10 h-10 mb-4 ${stat.color.replace('blue', 'cyan').replace('green', 'lime')} group-hover:scale-110 transition-transform`} />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-[#fce205] mb-2 font-orbitron">{stat.value}</h3>
                <p className="text-slate-500 dark:text-gray-300 text-sm font-medium uppercase font-mono tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
