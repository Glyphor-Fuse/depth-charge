import React from 'react';

const PressureLog = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative group">
        <div className="absolute inset-0 border-2 border-sonar-green/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
        <img 
          src="https://raw.githubusercontent.com/Glyphor-Fuse/depth-charge/main/public/images/espresso-machine.png" 
          alt="Industrial espresso machine detail" 
          className="w-full aspect-[4/5] object-cover grayscale contrast-150"
        />
        <div className="absolute inset-0 bg-sonar-green/10 mix-blend-color" />
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-sonar-green text-sm uppercase tracking-widest">Sub-Surface Log // 04:00 AM</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-white italic">
            Built for<br/><span className="text-pulp-red">Intensity</span>
          </h2>
        </div>
        
        <p className="font-mono text-sonar-green/80 text-sm md:text-base leading-relaxed uppercase">
          We reject the sun-drenched café culture. Our coffee is born in the predawn murk, under the shadow of the industrial coast. We roast for pressure, we brew for depth.
        </p>

        <div className="border-l-2 border-sonar-green/20 pl-6 py-4 space-y-4">
          <p className="text-white font-mono text-sm leading-relaxed">
            "The perfect pull isn't an art form; it's a structural integrity test. We treat our beans like heavy-gauge steel—forged in heat and pressurized to failure."
          </p>
          <span className="block font-mono text-sonar-green text-xs">— COMMANDER OF ROASTS</span>
        </div>

        <button className="bg-sonar-green text-black font-mono font-bold uppercase py-4 px-8 tracking-widest hover:bg-white transition-colors">
          Join the Crew
        </button>
      </div>
    </section>
  );
};

export default PressureLog;
