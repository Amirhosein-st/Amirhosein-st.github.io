import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import introductionVisual from '../assets/images/introduction-visual.png';
import introductionVisual2 from '../assets/images/introduction-visual-2.png';
import introductionVisual3 from '../assets/images/introduction-visual-3.png';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [introductionVisual, introductionVisual2, introductionVisual3];

  const titles = ['Senior Frontend Developer', 'Backend Developer', 'Senior Mobile Developer', 'Full Stack Developer'];
  const descriptions = ['I build things for the web.', 'I architect robust server solutions.', 'I create mobile experiences.', 'I develop end-to-end applications.'];
  const details = [
    'I specialize in building exceptional digital experiences. Currently, I\'m focused on accessible, human-centered products using modern web technologies.',
    'I architect scalable backend systems and APIs. Currently, I\'m passionate about cloud-native solutions, microservices, and database optimization.',
    'I craft intuitive mobile applications with seamless user experiences. Currently, I\'m passionate about cross-platform development and native performance.',
    'I develop comprehensive full-stack solutions from concept to deployment. Currently, I\'m focused on creating efficient, maintainable applications that deliver real business value.'
  ];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting effect
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Switch to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster when deleting, slower when typing

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-mono text-lg mb-4">Hi, my name is</h2>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-800 dark:text-white mb-4">
              Amir Hosein.
            </h1>
            <motion.h2
              key={currentTitleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl font-bold text-slate-500 dark:text-slate-400 mb-6"
            >
              {descriptions[currentTitleIndex]}
            </motion.h2>
            
            <div className="font-mono text-slate-600 dark:text-slate-300 text-lg mb-8 h-16 sm:h-auto">
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-blue-500">
                {displayText}
              </span>
            </div>

            <motion.p
              key={`detail-${currentTitleIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 max-w-lg text-lg mb-8 leading-relaxed"
            >
              {details[currentTitleIndex]}
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                Check out my work
              </a>
              <div className="flex items-center gap-4 ml-4">
                <a href="https://github.com/Amirhosein-st?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Album Layer 3 - Back */}
              <div className="absolute inset-0 bg-purple-500 rounded-lg -rotate-6 opacity-20 z-0"></div>
              <motion.div
                key={`back-${currentImageIndex}`}
                initial={{ opacity: 0, rotate: -8 }}
                animate={{ opacity: 1, rotate: -6 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-xl z-10"
                style={{ transform: 'rotate(-6deg)' }}
              >
                <img
                  src={images[(currentImageIndex + 2) % 3]}
                  alt="Profile Back"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Album Layer 2 - Middle */}
              <div className="absolute inset-0 bg-blue-500 rounded-lg rotate-4 opacity-20 z-20"></div>
              <motion.div
                key={`middle-${currentImageIndex}`}
                initial={{ opacity: 0, rotate: 2 }}
                animate={{ opacity: 1, rotate: 4 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-xl z-30"
                style={{ transform: 'rotate(4deg)' }}
              >
                 <img 
                  src={images[(currentImageIndex + 1) % 3]}
                  alt="Profile Middle"
                   className="w-full h-full object-cover"
                 />
              </motion.div>

              {/* Album Layer 1 - Front */}
              <motion.div
                key={`front-${currentImageIndex}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_event, info) => {
                  const threshold = 50;
                  if (info.offset.x > threshold) {
                    // Dragged right - go to previous image
                    setCurrentImageIndex((prev) => (prev - 1 + 3) % 3);
                  } else if (info.offset.x < -threshold) {
                    // Dragged left - go to next image
                    setCurrentImageIndex((prev) => (prev + 1) % 3);
                  }
                }}
                initial={{ opacity: 0, rotate: -2, x: 0 }}
                animate={{ opacity: 1, rotate: 0, x: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-2xl z-40 cursor-grab active:cursor-grabbing"
                whileHover={{ scale: 1.05, rotate: 2, zIndex: 50 }}
                whileDrag={{ cursor: 'grabbing' }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Profile"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-slate-400 hover:text-blue-500 transition-colors">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
