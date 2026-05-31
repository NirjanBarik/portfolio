import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "INITIALIZING SYSTEM...",
    "LOADING ASSETS...",
    "ESTABLISHING CONNECTION...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 250);

    // Text update animation
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < texts.length - 1 ? prev + 1 : prev));
    }, 700);

    // Finish loading
    const finishTimeout = setTimeout(() => {
      finishLoading();
    }, 3200); // Wait slightly after progress bar hits 100

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
      clearTimeout(finishTimeout);
    };
  }, [finishLoading]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Matrix/Grid lines for gaming effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center w-full max-w-md px-8"
      >
        {/* Glitch Logo */}
        <div className="text-6xl md:text-8xl font-bold font-orbitron text-[#00f3ff] glitch mb-12 tracking-widest" data-text="{ NB }">
          {`{ NB }`}
        </div>

        {/* Loading Text */}
        <div className="w-full text-left mb-2 text-[#fce205] font-mono text-sm md:text-base font-bold tracking-widest uppercase h-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {texts[textIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Neon Progress Bar */}
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
          <motion.div 
            className="h-full bg-[#00f3ff] shadow-[0_0_15px_#00f3ff]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>
        
        {/* Progress Percentage */}
        <div className="w-full text-right mt-2 text-[#00f3ff] font-mono text-xs font-bold">
          {Math.min(progress, 100)}%
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
