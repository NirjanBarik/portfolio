import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/contact`, formData);
      setStatus('success');
      setFeedback('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback('Failed to send message. Please try again or email me directly.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'nirjanbarik1@gmail.com',
      link: 'mailto:nirjanbarik1@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91-8334807904',
      link: 'tel:+918334807904'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Halisahar, Kolkata, West Bengal',
      link: 'https://www.google.com/maps/place/Halisahar,+Kanchrapara,+West+Bengal'
    }
  ];

  return (
    <section id="contact" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-[#00f3ff] font-orbitron glitch" data-text="Get In Touch">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#ff003c] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx}
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-6 p-4 cyber-panel border border-slate-200 dark:border-slate-700 hover:border-red-500 hover:bg-slate-100 dark:hover:bg-black/50 transition-all group hover:shadow-[0_0_10px_rgba(255,0,60,0.3)]"
                >
                  <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1">{info.title}</h4>
                    <p className="text-lg font-semibold text-slate-900 dark:text-[#00f3ff] font-mono">{info.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="cyber-panel p-8 md:p-10 border border-slate-200 dark:border-slate-700 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-[#ff003c] mb-2 font-orbitron">&gt; Send me a message_</h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white dark:bg-black/50 border border-slate-300 dark:border-slate-600 rounded-none px-4 py-3 text-slate-900 dark:text-[#00f3ff] font-mono focus:outline-none focus:border-red-500 dark:focus:border-[#ff003c] transition-all dark:focus:shadow-[0_0_10px_rgba(255,0,60,0.3)]"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white dark:bg-black/50 border border-slate-300 dark:border-slate-600 rounded-none px-4 py-3 text-slate-900 dark:text-[#00f3ff] font-mono focus:outline-none focus:border-red-500 dark:focus:border-[#ff003c] transition-all dark:focus:shadow-[0_0_10px_rgba(255,0,60,0.3)]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-gray-300">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white dark:bg-black/50 border border-slate-300 dark:border-slate-600 rounded-none px-4 py-3 text-slate-900 dark:text-[#00f3ff] font-mono focus:outline-none focus:border-red-500 dark:focus:border-[#ff003c] transition-all resize-none dark:focus:shadow-[0_0_10px_rgba(255,0,60,0.3)]"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 cyber-button flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
              >
                {status === 'loading' ? (
                  <><Loader2 className="animate-spin" size={20} /> Sending...</>
                ) : (
                  <><Send size={20} /> Send Message</>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center font-medium">{feedback}</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center font-medium">{feedback}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
