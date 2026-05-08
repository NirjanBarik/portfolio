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
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 space-y-6 text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm a highly motivated undergraduate student pursuing a Bachelor of Technology in Computer Science and Engineering at Kalyani Government Engineering College (Class of 2023-2027), currently seeking a software development or AI/ML internship to apply and enhance skills in full-stack development, machine learning, and cloud technologies.
            </p>
            <p>
              My academic journey has been complemented by hands-on projects, including a To-Do List application and a Gradient Generator tool, which have helped me apply theoretical knowledge to practical scenarios. I'm particularly interested in Artificial Intelligence and Machine Learning, and I've completed a certification course in Geodata Processing using Python and Machine Learning from the Indian Institute of Remote Sensing, ISRO.
            </p>
            <p>
              Beyond academics, I've achieved notable accomplishments such as securing the 3rd position in my school in the Class 12 Board Examination and ranking 6087 in the WBJEE Examination in 2023. I'm also committed to social contributions, being a regular blood donor.
            </p>
            <div className="glass p-6 rounded-2xl mt-8">
              <p className="mb-2"><span className="text-white font-semibold">Languages:</span> English, Bengali, Hindi</p>
              <p><span className="text-white font-semibold">Interests:</span> Competitive Programming, AI-ML Research, DevOps, Open Source Contributions</p>
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
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center group border border-slate-700 hover:border-slate-500 transition-colors"
              >
                <stat.icon className={`w-10 h-10 mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
