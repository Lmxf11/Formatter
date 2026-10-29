import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Activity, Database, Target } from 'lucide-react';
import { SURVEY_DATA } from '../lib/data';

const COLORS = ['#2f7cf6', '#10b981', '#f59e0b', '#a855f7', '#ef4444', '#14b8a6'];

export default function Stats() {
  return (
    <div className="p-6 space-y-12 animate-in fade-in duration-700">
      <div className="flex items-center gap-3 mb-8">
        <Activity className="text-brand-500 w-8 h-8" />
        <h2 className="text-3xl font-bold text-white tracking-tight">Análise de Dados TCF</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Gráfico de Conhecimento */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Database className="text-brand-500 w-5 h-5" />
            <h3 className="text-xl font-bold text-white">Conhecimento sobre Defesa Aérea</h3>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={SURVEY_DATA.knowledge}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {SURVEY_DATA.knowledge.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-slate-400 text-center italic">
            Percentual de respondentes com base no questionário aplicado.
          </p>
        </div>

        {/* Gráfico de Impacto Tecnológico */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Target className="text-brand-500 w-5 h-5" />
            <h3 className="text-xl font-bold text-white">Tecnologia com Maior Impacto Civil</h3>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SURVEY_DATA.techImpact} layout="vertical">
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  stroke="#94a3b8"
                  fontSize={12}
                  width={100}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" fill="#2f7cf6" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-slate-400 text-center italic">
            A Internet foi apontada como a tecnologia militar de maior impacto na sociedade civil.
          </p>
        </div>
      </div>
    </div>
  );
}
