import { motion } from 'framer-motion';
import { Code2, Laptop, Server, Database, Brain, PenTool, Rocket } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frontend',
      icon: Laptop,
      skills: ['React.js', 'Tailwind CSS', 'Redux Toolkit'],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'FastAPI'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'AI/ML',
      icon: Brain,
      skills: ['TensorFlow', 'scikit-learn', 'NumPy', 'Pandas', 'NLP', 'Google Earth Engine'],
    },
    {
      title: 'Tools & Platforms',
      icon: PenTool,
      skills: ['Git', 'GitHub', 'Postman', 'Linux', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Figma'],
    },
    {
      title: 'Deployment',
      icon: Rocket,
      skills: ['Vercel', 'Render'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-[#b026ff] font-orbitron glitch" data-text="Technical Skills">Technical Skills</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="cyber-panel p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-colors group relative overflow-hidden hover:shadow-[0_0_15px_rgba(176,38,255,0.4)]"
            >
              <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <category.icon className="w-32 h-32 text-purple-400" />
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-[#fce205] font-orbitron tracking-wide uppercase">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1 bg-white dark:bg-black/50 text-slate-700 dark:text-[#00f3ff] rounded-none text-sm font-bold border border-slate-200 dark:border-[#00f3ff]/30 hover:border-purple-500 dark:hover:border-[#b026ff] hover:text-purple-600 dark:hover:text-[#b026ff] transition-colors cursor-default font-mono shadow-[2px_2px_0px_rgba(0,0,0,0.1)] dark:shadow-[2px_2px_0px_rgba(0,243,255,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
