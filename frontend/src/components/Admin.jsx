import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Mail, Calendar, Trash2, Loader2, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      // In a real app, this would require an auth token
      const res = await axios.get('http://localhost:5000/api/contact');
      setMessages(res.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-[#00f3ff] font-orbitron glitch" data-text="Admin Dashboard">Admin Dashboard</h1>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 cyber-button transition-colors"
          >
            <LogOut size={18} />
            Back to Portfolio
          </button>
        </div>

        <div className="cyber-panel p-8 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-700/50">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-[#00f3ff] flex items-center gap-2 font-orbitron">
              <Mail className="text-blue-400" /> 
              Contact Messages
            </h2>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              {messages.length} Total
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="animate-spin text-blue-500 w-10 h-10" />
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-20 text-slate-500 dark:text-gray-400">
              <Mail className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>No messages received yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <motion.div 
                  key={msg._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-white dark:bg-black/50 rounded-none border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{msg.name}</h3>
                      <a href={`mailto:${msg.email}`} className="text-blue-400 hover:underline text-sm">
                        {msg.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-500 shrink-0">
                      <Calendar size={14} />
                      {new Date(msg.createdAt).toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-slate-100 dark:bg-[#050505] rounded-none text-slate-700 dark:text-[#00f3ff] whitespace-pre-wrap font-mono border border-slate-200 dark:border-slate-800">
                    {msg.message}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
