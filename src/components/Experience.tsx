import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Teaching Assistant & Instructor',
    company: 'Karyar',
    period: '2021 - 2024',
    description: [
      'Worked as a Teaching Assistant (TA) for HTML, CSS, Bootstrap, JavaScript, and React courses.',
      'Provided mentorship and debugging support for JavaScript and React students.',
      'Taught and guided students in HTML, CSS, and JavaScript fundamentals.',
      'Assisted students in solving practical and conceptual programming challenges.'
    ]
  },  
  {
    role: 'Frontend Developer',
    company: 'BrainGomo Team (Germany)',
    period: '2021 - Present',
    description: [
      {
        text: 'Assisting in the design and development of -',
        link: { url: 'https://braingomo.com', text: 'BrainGomo.com' },
        suffix: '.'
      },
      {
        text: 'Assisting in the design and development of -',
        link: { url: 'https://virgobit.com', text: 'Virgobit.com' },
        suffix: '.'
      },
      {
        text: 'Assisting in the design and development of the -',
        link: { url: 'https://virgobit.com/digitalbooth.html', text: 'Virgobit booth' },
        suffix: '- website.'
      }
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Agah Group Company (ASA)',
    period: '2023 - Present',
    description: [
      'Building various panels for viewing and editing data.',
      'Developing a monitoring panel to display errors and issues from the backend.',
      'Creating a panel suitable for traders to display all necessary data for trading in one place.',
      'Fixing errors while running the pipelines.'
    ]
  }
  
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center text-3xl font-bold text-slate-800 dark:text-white mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xl mr-4">03.</span>
            Where I've Worked
            <span className="ml-4 h-px flex-grow bg-slate-300 dark:bg-slate-700"></span>
          </h2>

          <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-100 dark:border-slate-900"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      <Briefcase size={18} className="text-blue-500" />
                      {exp.role} <span className="hidden sm:inline text-blue-600 dark:text-blue-400">{exp.company}</span>
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1 sm:hidden pl-7">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1 sm:mt-0">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                      <span className="mr-2 text-blue-500 mt-1.5 flex-shrink-0">▹</span>
                      <span className="flex-1 leading-relaxed">
                        {typeof item === 'string' ? (
                          <span className="break-words">{item}</span>
                        ) : (
                          <>
                            <span className="break-words">{item.text}</span>
                            {item.link && (
                              <a
                                href={item.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-words whitespace-normal font-medium"
                              >
                                {item.link.text}
                              </a>
                            )}
                            <span className="break-words">{item.suffix}</span>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
