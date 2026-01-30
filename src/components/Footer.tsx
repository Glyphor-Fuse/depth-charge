import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-sonar-green/20 bg-black/40 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-black uppercase text-pulp-red italic tracking-tighter">Depth Charge</h3>
          <p className="font-mono text-[10px] text-sonar-green/60 uppercase max-w-xs">
            Coordinates: Pier 42, Heavy Industrial Zone.<br/>
            Operating Hours: 0400 - 1400 Hours.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 font-mono text-xs uppercase">
          <div className="space-y-4">
            <h4 className="text-sonar-green">Navigation</h4>
            <ul className="space-y-2 text-white/60">
              <li className="hover:text-sonar-green cursor-pointer">The Manifest</li>
              <li className="hover:text-sonar-green cursor-pointer">Crew Log</li>
              <li className="hover:text-sonar-green cursor-pointer">Supply Chain</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sonar-green">Signals</h4>
            <ul className="space-y-2 text-white/60">
              <li className="hover:text-sonar-green cursor-pointer">Instagram</li>
              <li className="hover:text-sonar-green cursor-pointer">Terminal</li>
              <li className="hover:text-sonar-green cursor-pointer">Dispatch</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 flex flex-col md:flex-row justify-between items-end gap-6 border-t border-sonar-green/10 pt-8">
        <div className="text-[10px] font-mono text-sonar-green/40 uppercase">
          &copy; 2024 DEPTH CHARGE INDUSTRIES. NO RIGHTS RESERVED. FORGED IN PRESSURE.
        </div>
        <div className="flex gap-4">
           <img src="https://raw.githubusercontent.com/Glyphor-Fuse/depth-charge/main/public/images/badge-steel.png" alt="Steel Quality Badge" className="h-12 grayscale opacity-40 hover:opacity-100 transition-opacity" />
           <img src="https://images.pexels.com/photos/6007666/pexels-photo-6007666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Certified Extraction" className="h-12 grayscale opacity-40 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
