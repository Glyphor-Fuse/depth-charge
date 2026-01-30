import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/35102253/pexels-photo-35102253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
          alt="Lead colored Pacific waves" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-current opacity-40" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-none tracking-tighter text-pulp-red drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          Depth<br/>Charge
        </h1>
        <p className="mt-4 text-sonar-green font-mono uppercase tracking-[0.3em] text-sm md:text-lg">
          High Pressure Extraction // Artisanal Fuel
        </p>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-20 bg-sonar-green/40" />
      </div>
    </section>
  );
};

export default Hero;
