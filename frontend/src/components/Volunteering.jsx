import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

const Volunteering = () => {
  return (
    <section id="volunteering" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-[#ff003c] font-orbitron glitch" data-text="Volunteering">Volunteering & Social Contributions</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cyber-panel p-8 md:p-12 border border-slate-200 dark:border-slate-700 text-center relative overflow-hidden hover:border-[#ff003c] transition-colors hover:shadow-[0_0_15px_rgba(255,0,60,0.3)]"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Heart size={120} className="text-red-500" />
            </div>
            
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 mx-auto mb-6">
              <Heart size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-[#ff003c] mb-4 font-orbitron uppercase tracking-widest">Regular Blood Donor</h3>
            <p className="text-slate-700 dark:text-gray-300 text-lg mb-8">
              Donated twice, committed to periodic donations for medical needs. I believe in giving back to the community in every way possible.
            </p>
            
            <a 
              href="https://drive.google.com/file/d/10ru9XKhLadyY-aZwyKkb9PoAB-eJFxyJ/view" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold transition-all hover:shadow-lg hover:shadow-red-600/30"
            >
              <ExternalLink size={20} />
              View Credentials
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
