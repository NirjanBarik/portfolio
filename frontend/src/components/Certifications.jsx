import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Geodata Processing using Python and Machine Learning',
      institute: 'Indian Institute of Remote Sensing (IIRS), ISRO',
      date: 'Completed on 02/28/2025',
      description: '9-hour comprehensive course on geodata processing techniques',
      link: 'https://drive.google.com/file/d/1b85wKpPH7MCguOonndV7R-bT9rNGGNo6/view'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-slate-700 hover:border-yellow-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-yellow-500/90 font-medium mb-1">{cert.institute}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              <p className="text-gray-400 mb-6">{cert.description}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
              >
                View Credentials
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
