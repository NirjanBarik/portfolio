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
    },
    {
      title: 'Figma Essential for User Interface and User Experience UI UX',
      institute: 'Udemy',
      date: 'Completed on May 24, 2026',
      description: '4 total hours course on UI/UX using Figma',
      link: 'https://ude.my/UC-4122383c-0a8d-4e8c-8daa-c7f87db24ea8'
    },
    {
      title: '2026 Master Google Ads, Bing Ads and SA360 in Live Accounts',
      institute: 'Udemy',
      date: 'Completed on May 14, 2026',
      description: '40.5 total hours comprehensive course on Google Ads and Bing Ads',
      link: 'https://ude.my/UC-f67128ae-a295-46d8-90b3-26506f61fbf0'
    },
    {
      title: 'Foundations of Stock Trading',
      institute: 'Physics Wallah',
      date: 'Completed on January 5, 2026',
      description: 'Successfully completed the Foundations of Stock Trading Program',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-[#fce205] font-orbitron glitch" data-text="Certifications">Certifications</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="cyber-panel p-8 border border-slate-200 dark:border-slate-700 hover:border-yellow-500 transition-all group hover:shadow-[0_0_15px_rgba(252,226,5,0.3)]"
            >
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-[#00f3ff] mb-2 font-orbitron tracking-wide">{cert.title}</h3>
              <p className="text-yellow-600 dark:text-[#fce205] font-bold mb-1 font-mono uppercase">{cert.institute}</p>
              <p className="text-slate-500 dark:text-gray-500 text-sm mb-4">{cert.date}</p>
              <p className="text-slate-600 dark:text-gray-400 mb-6">{cert.description}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-500 hover:text-yellow-700 dark:hover:text-yellow-400 font-medium transition-colors"
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
