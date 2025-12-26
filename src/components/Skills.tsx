import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Atom, Hexagon, Palette, Layers, GitBranch, Cpu, PenTool } from 'lucide-react';
import { SiPython } from 'react-icons/si';

const skills = [
  { name: 'JavaScript (ES6+)', icon: <Code2 size={40} />, category: 'Language' },
  { name: 'TypeScript', icon: <Code2 size={40} />, category: 'Language' },
  { name: 'React', icon: <Atom size={40} />, category: 'Frontend' },
  { name: 'Angular', icon: <Hexagon size={40} />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <Palette size={40} />, category: 'Frontend' },
  { name: 'Bootstrap CSS', icon: <Layers size={40} />, category: 'Frontend' },
  { name: 'Kotlin', icon: <Smartphone size={40} />, category: 'Mobile' },
  { name: 'React Native', icon: <Smartphone size={40} />, category: 'Mobile' },
  { name: 'UI/UX', icon: <PenTool size={40} />, category: 'Design' },
  { name: 'Git & CI/CD', icon: <GitBranch size={40} />, category: 'Tools' },
  { name: 'Node.js', icon: <Cpu size={40} />, category: 'Backend' },
  { name: 'Python', icon: <SiPython size={40} />, category: 'Backend' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center text-3xl font-bold text-slate-800 dark:text-white mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xl mr-4">02.</span>
            My Tech Stack
            <span className="ml-4 h-px flex-grow bg-slate-300 dark:bg-slate-700"></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)" }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="text-blue-500 mb-4 group-hover:text-blue-400 transition-colors duration-300 transform group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{skill.name}</h3>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
