import { motion } from 'framer-motion';
import { Code2, Laptop, Cloud, Brain, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Web Development',
      icon: Laptop,
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'AWS (EC2, S3)'],
    },
    {
      title: 'ML & Data Science',
      icon: Brain,
      skills: ['TensorFlow', 'scikit-learn', 'Numpy', 'Pandas', 'Data Visualization'],
    },
    {
      title: 'Tools',
      icon: PenTool,
      skills: ['VS Code', 'Jupyter', 'Google Colab', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
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
              className="glass p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <category.icon className="w-32 h-32 text-purple-400" />
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm font-medium border border-slate-700 hover:border-purple-400 hover:text-white transition-colors cursor-default"
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
