import React, { useState } from 'react';
import { JET_DATA } from '../lib/data';
import { Shield, Wind, ArrowUpCircle, Crosshair } from 'lucide-react';

export default function Hangar() {
  const [selectedJet, setSelectedJet] = useState(JET_DATA[0]);

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="text-brand-500 w-8 h-8" />
        <h2 className="text-3xl font-bold text-white tracking-tight">Hangar de Caças</h2>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-8">
        <div className="flex flex-col gap-3">
          {JET_DATA.map(jet => (
            <button
              key={jet.id}
              onClick={() => setSelectedJet(jet)}
              className={`p-4 rounded-xl border transition-all text-left ${
                selectedJet.id === jet.id
                ? 'bg-brand-500/20 border-brand-500 text-white shadow-[0_0_15px_rgba(47,84,158,0.3)]'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600'
              }`}
            >
              <p className="font-bold">{jet.name}</p>
              <p className="text-xs opacity-60">{jet.country}</p>
            </button>
          ))}
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Wind className="w-32 h-32 text-white" />
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl font-black text-white mb-2">{selectedJet.name}</h3>
            <p className="text-brand-400 font-medium mb-6">{selectedJet.country}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                <Wind className="text-brand-500" />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Velocidade Máx</p>
                  <p className="text-xl font-bold text-white">{selectedJet.speed}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                <ArrowUpCircle className="text-brand-500" />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Teto de Voo</p>
                  <p className="text-xl font-bold text-white">{selectedJet.ceiling}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700 sm:col-span-2">
                <Crosshair className="text-brand-500" />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Armamento Principal</p>
                  <p className="text-lg font-bold text-white">{selectedJet.weaponry}</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-slate-300 leading-relaxed text-lg italic">
              "{selectedJet.description}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
