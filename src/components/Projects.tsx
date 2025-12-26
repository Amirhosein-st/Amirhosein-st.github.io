import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Braingomo',
    tech: ['Angular', 'Node.js'],
    live: 'https://braingomo.com/home',
    image: 'src/assets/images/braingomo.png'
  },
  {
    title: 'Virgobit',
    tech: ['js', 'bootstrap'],
    live: 'https://virgobit.com/',
    image: 'src/assets/images/virgobit.png'
  },
  {
    title: 'booth Virgobit',
    tech:  ['js', 'bootstrap'],
    live: 'https://virgobit.com/digitalbooth.html',
    image: 'src/assets/images/booth virgobit.png'
  },
  {
    title: 'mobile app',
    description: 'clone spotify - live price',
    tech:  ['React Native'],
    image: 'src/assets/images/reactNative.png'
  },
  {
    title: 'Karyar Panel',
    tech:  ['react', 'bootstrap'],
    image: 'src/assets/images/karyar.png'
  },
  {
    title: 'Personal Website(Shahab)',
    tech:  ['js', 'bootstrap'],
    image: 'src/assets/images/shahabXandy.png'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center text-3xl font-bold text-slate-800 dark:text-white mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xl mr-4">04.</span>
            Some Things I've Built
            <span className="ml-4 h-px flex-grow bg-slate-300 dark:bg-slate-700"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      <Folder size={40} />
                    </div>
                    {project.live != null && (
                      <div className="flex gap-4">
                        <a href={project.live} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                      {project.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
