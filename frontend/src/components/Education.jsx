import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Kalyani Government Engineering College (KGEC), West Bengal',
      date: '2023-2027',
      university: 'Maulana Abul Kalam Azad University of Technology',
      details: 'CGPA: 7.94 (Through 5th Semester)'
    },
    {
      degree: 'Higher Secondary Education',
      school: 'Kanchrapara Harnett English Medium School, West Bengal',
      date: '2023',
      university: '90.2% | CBSE | Science Stream',
      details: 'Physics, Chemistry, Mathematics with Computer Science (Python)'
    },
    {
      degree: 'Secondary Education',
      school: 'Kanchrapara Harnett English Medium School, West Bengal',
      date: '2021',
      university: '93.6% | CBSE',
      details: ''
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-[#00f3ff] font-orbitron glitch" data-text="Education">Education</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="cyber-panel p-8 border border-slate-200 dark:border-slate-700 hover:border-green-500 transition-all flex flex-col md:flex-row gap-6 group hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                <GraduationCap size={32} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-[#fce205] group-hover:text-green-600 dark:group-hover:text-[#00f3ff] transition-colors font-orbitron tracking-wide">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold font-mono">
                    <Calendar size={16} />
                    <span>{edu.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-slate-700 dark:text-gray-300 mb-2 font-mono">
                  <MapPin size={16} className="text-gray-500" />
                  <span className="font-semibold">{edu.school}</span>
                </div>
                
                <p className="text-slate-600 dark:text-gray-400 mb-2">{edu.university}</p>
                {edu.details && <p className="text-slate-500 dark:text-gray-500 text-sm italic">{edu.details}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
