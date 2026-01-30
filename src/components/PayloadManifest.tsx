import React from 'react';
import { Card } from './ui/card';

const products = [
  { id: 'DC-01', name: 'Pressure Drop', origin: 'Sumatra', roast: 'Dark/Oily', notes: 'Peat, Smoke, Iron' },
  { id: 'DC-02', name: 'Sonar Pulse', origin: 'Ethiopia', roast: 'Light/Acidic', notes: 'Lime, Jasmine, Static' },
  { id: 'DC-03', name: 'Heavy Gauge', origin: 'Brazil', roast: 'Medium', notes: 'Dark Chocolate, Graphite' },
  { id: 'DC-04', name: 'Benthic Zone', origin: 'Cold Brew Blend', roast: '18hr Steep', notes: 'Viscous, Cold Steel' },
];

const PayloadManifest = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="manifest">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-6xl font-black uppercase text-sonar-green italic">The Manifest</h2>
        <div className="flex-1 h-[2px] bg-sonar-green/20" />
        <span className="font-mono text-xs text-sonar-green/60 uppercase">Cargo Identification</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sonar-green/20 border border-sonar-green/20">
        {products.map((item) => (
          <div key={item.id} className="bg-black/40 p-8 hover:bg-sonar-green/5 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-sonar-green/40 text-xs">{item.id}</span>
              <span className="font-mono text-sonar-green text-xs border border-sonar-green px-2 py-0.5">READY</span>
            </div>
            <h3 className="text-2xl font-bold text-white uppercase mb-2 group-hover:text-sonar-green transition-colors">
              {item.name}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-mono uppercase">
                <span className="text-sonar-green/60 text-[10px]">Origin</span>
                <span className="text-white">{item.origin}</span>
              </div>
              <div className="flex justify-between text-xs font-mono uppercase">
                <span className="text-sonar-green/60 text-[10px]">Roast Profile</span>
                <span className="text-white">{item.roast}</span>
              </div>
              <div className="mt-6 pt-6 border-t border-sonar-green/10">
                <p className="text-xs font-mono text-sonar-green/80 italic leading-relaxed">
                  SENSOR NOTES: {item.notes}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PayloadManifest;
