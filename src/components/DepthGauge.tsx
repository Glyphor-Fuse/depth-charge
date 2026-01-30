import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DepthGauge = () => {
  const { scrollYProgress } = useScroll();
  const fathoms = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  
  const markers = Array.from({ length: 11 }, (_, i) => i * 100);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 hidden md:flex">
      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-sonar-green/60 rotate-180 [writing-mode:vertical-lr]">
        Depth Gauge / Fathoms
      </div>
      <div className="h-64 w-[2px] bg-sonar-green/20 relative">
        <motion.div 
          className="absolute top-0 w-full bg-sonar-green shadow-[0_0_10px_#00FF41]"
          style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />
        {markers.map((m) => (
          <div 
            key={m} 
            className="absolute left-full ml-2 text-[10px] font-mono text-sonar-green/40"
            style={{ top: `${(m / 1000) * 100}%` }}
          >
            — {m}
          </div>
        ))}
      </div>
      <motion.div className="font-mono text-xl text-sonar-green tabular-nums">
        {useTransform(fathoms, (latest) => Math.floor(latest))}
      </motion.div>
    </div>
  );
};

export default DepthGauge;
