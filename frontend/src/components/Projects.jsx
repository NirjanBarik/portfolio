import { motion } from 'framer-motion';
import { GitHub, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: 'To-Do List',
      description: 'A simple yet effective to-do list for task management.',
      features: [
        'Allows users to add, delete, and store tasks using local storage',
        'User-friendly interface with animated button interactions',
        'Ensures tasks are saved even after refreshing the browser'
      ],
      github: 'https://github.com/NirjanBarik/Todo-List-Project',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Gradient Generator',
      description: 'A dynamic background gradient generator allowing users to create custom gradients.',
      features: [
        'Generates a smooth, visually appealing linear gradient background',
        'Allows users to pick random colours and see the generated CSS code',
        'One-click copy functionality for easy usage in projects'
      ],
      github: 'https://github.com/NirjanBarik/Gradient-Generator',
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
          <h2 className="text-4xl font-bold mb-4">Personal Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass rounded-2xl overflow-hidden group flex flex-col h-full border border-slate-700 hover:border-slate-500 transition-colors"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-1">
                  {project.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-slate-700/50 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-600"
                  >
                    <GitHub size={18} />
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
