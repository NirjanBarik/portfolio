import { motion } from 'framer-motion';
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Resume Analyzer',
      description: 'Tech Stack: Python, FastAPI, React.js, MongoDB, NLP, TensorFlow',
      features: [
        'Developed a full-stack AI-powered resume analyzer using NLP-based semantic similarity matching between resumes and job descriptions.',
        'Implemented automated skill extraction, resume scoring, and missing skill detection supporting real-time analysis.',
        'Built scalable REST APIs with FastAPI reducing resume processing latency and improving backend responsiveness.',
        'Designed an admin analytics dashboard to track resume statistics, skill demand trends, and user activity.',
        'Engineered responsive React frontend with MongoDB integration for secure resume storage and fast retrieval.'
      ],
      github: 'https://github.com/NirjanBarik/AI-resume-analyser',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'MERN JSON Formatter & Validator',
      description: 'Tech Stack: MongoDB, Express.js, React.js, Node.js, Vanilla CSS',
      features: [
        'Developed a MERN-based JSON formatter and validator with real-time formatting, syntax validation, and error detection.',
        'Implemented secure snippet storage and history tracking using MongoDB for persistent user data management.',
        'Added live analytics including character count, line count, and JSON data size tracking.',
        'Optimized frontend responsiveness and one-click copy workflow for improved developer productivity.',
        'Designed responsive UI supporting seamless formatting across desktop and mobile devices.'
      ],
      github: 'https://github.com/NirjanBarik/JSON-Formater',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-[#00f3ff] font-orbitron glitch" data-text="Personal Projects">Personal Projects</h2>
          <div className="w-20 h-1 bg-[#00f3ff] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="cyber-panel overflow-hidden group flex flex-col h-full transition-colors hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-[#00f3ff] mb-3 group-hover:text-pink-600 dark:group-hover:text-[#ff003c] transition-colors font-orbitron tracking-wide">
                  &gt; {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 mb-6 flex-1">
                  {project.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-gray-300 font-mono">
                      <div className="mt-1.5 w-2 h-2 bg-[#00f3ff] shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700/50 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 cyber-button shadow-[4px_4px_0px_rgba(0,0,0,0.2)] dark:shadow-none w-full sm:w-auto"
                  >
                    <GithubIcon size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
