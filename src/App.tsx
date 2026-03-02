import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeToggle } from './components/ThemeToggle';
import { ParticleBackground } from './components/ParticleBackground';
import { ProgressBar } from './components/ProgressBar';
import { CircularProgress } from './components/CircularProgress';
import { Card } from './components/Card';
import { Filter } from './components/Filter';
import { motion } from 'motion/react';

// Data for skills
const skillsData = [
  { id: 1, label: 'HTML5', percentage: 95, category: 'Frontend', color: 'bg-orange-500' },
  { id: 2, label: 'CSS3 / Tailwind', percentage: 90, category: 'Frontend', color: 'bg-blue-500' },
  { id: 3, label: 'JavaScript / TypeScript', percentage: 85, category: 'Frontend', color: 'bg-yellow-500' },
  { id: 4, label: 'React.js', percentage: 88, category: 'Frontend', color: 'bg-cyan-500' },
  { id: 5, label: 'Node.js', percentage: 75, category: 'Backend', color: 'bg-green-500' },
  { id: 6, label: 'Python', percentage: 70, category: 'Backend', color: 'bg-blue-600' },
  { id: 7, label: 'UI/UX Design', percentage: 80, category: 'Design', color: 'bg-purple-500' },
  { id: 8, label: 'Figma', percentage: 85, category: 'Design', color: 'bg-pink-500' },
];

const categories = ['All', 'Frontend', 'Backend', 'Design'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [interactiveValue, setInteractiveValue] = useState(50);

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans text-slate-900 dark:text-slate-100 overflow-x-hidden">
      <ParticleBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              ProgressPro
            </span>
          </motion.div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Showcase Your <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A collection of beautiful, animated progress bars and indicators for your next project.
            Fully responsive, accessible, and customizable.
          </motion.p>
        </section>

        {/* Filterable Skills Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Skill Proficiency</h2>
            <Filter 
              categories={categories} 
              activeCategory={activeCategory} 
              onSelectCategory={setActiveCategory} 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <Card key={skill.id} className="hover:scale-[1.02] transition-transform">
                <ProgressBar 
                  label={skill.label} 
                  percentage={skill.percentage} 
                  color={skill.color} 
                />
              </Card>
            ))}
          </div>
        </section>

        {/* Circular Progress Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Project Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="flex justify-center">
              <CircularProgress label="Completion" percentage={92} color="#10b981" />
            </Card>
            <Card className="flex justify-center">
              <CircularProgress label="Performance" percentage={85} color="#3b82f6" />
            </Card>
            <Card className="flex justify-center">
              <CircularProgress label="Reliability" percentage={99} color="#8b5cf6" />
            </Card>
            <Card className="flex justify-center">
              <CircularProgress label="Satisfaction" percentage={95} color="#f59e0b" />
            </Card>
          </div>
        </section>

        {/* Advanced Bars Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Striped & Animated">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Perfect for indicating active loading states or processing tasks.
            </p>
            <ProgressBar label="Uploading Files..." percentage={45} striped animated color="bg-blue-500" />
            <ProgressBar label="Processing Data..." percentage={78} striped animated color="bg-emerald-500" />
            <ProgressBar label="Compiling Assets..." percentage={62} striped animated color="bg-amber-500" />
          </Card>

          <Card title="Interactive Demo">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Adjust the slider to see the progress bars update in real-time.
            </p>
            <div className="mb-8">
              <label htmlFor="progress-control" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Adjust Progress: {interactiveValue}%
              </label>
              <input
                type="range"
                id="progress-control"
                min="0"
                max="100"
                value={interactiveValue}
                onChange={(e) => setInteractiveValue(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-indigo-600"
              />
            </div>
            <ProgressBar label="Dynamic Input" percentage={interactiveValue} color="bg-indigo-600" />
            <div className="flex justify-center mt-4">
               <CircularProgress label="Dynamic Circle" percentage={interactiveValue} size={100} strokeWidth={8} />
            </div>
          </Card>
        </section>

        {/* Gradient Bars */}
        <section>
           <Card title="Gradient Progress Bars">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium">Gradient 1</span>
                    <span className="text-sm text-slate-500">80%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium">Gradient 2</span>
                    <span className="text-sm text-slate-500">65%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="h-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
           </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} ProgressPro. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
