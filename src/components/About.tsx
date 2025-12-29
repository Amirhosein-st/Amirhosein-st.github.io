import React from 'react';
import { motion } from 'framer-motion';
import desktopImage from '../assets/images/desktop image.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center text-3xl font-bold text-slate-800 dark:text-white mb-8">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xl mr-4">01.</span>
            About Me
            <span className="ml-4 h-px flex-grow bg-slate-300 dark:bg-slate-700"></span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
            
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                <p>
                  My name is Amir Hosein Safari. I began my programming career in 2020 by learning JavaScript, React, and TypeScript, and later expanded my expertise to include Angular, Kotlin, and React Native. Early in my professional journey, I joined the Braingomo team as a Frontend Developer, where I contributed to the design and implementation of their website. Following that, I collaborated with the same team on developing the Virgobit website and related exhibition platforms.
                </p>
                <p>
                  In 2023, I joined the Asa division at Agah Brokerage Company as a Frontend Developer, where my professional growth accelerated significantly. During this time, I also designed and developed several personal websites, mobile applications, and collaborative team projects.
                </p>
                <p>
                  To advance my skills as a Frontend and Mobile Developer aiming toward a senior level, I focused on learning various libraries, packages, and testing methodologies within these fields. Later, I became interested in backend development, particularly in Python and Node.js, and began actively learning and practicing them to broaden my technical capabilities.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
             <div className="relative group">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-blue-500 rounded-lg -z-10 transition-transform group-hover:top-2 group-hover:left-2"></div>
                <div className="relative rounded-lg overflow-hidden w-64 h-64 sm:w-80 sm:h-80 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={desktopImage}
                    alt="Working Developer" 
                    className="w-full h-full object-cover object-right"
                  />
                  <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors"></div>
                </div>
             </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

