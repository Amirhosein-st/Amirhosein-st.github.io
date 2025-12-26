import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<'phone' | 'email' | null>(null);
  const phoneNumber = '+989123119976';
  const emailAddress = 'amirhoseinsafari42@gmail.com';

  const handleCopyPhone = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied('phone');
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    
    // Initiate phone call
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:+989123119976';
    phoneLink.click();
  };

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied('email');
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    
    // Open email client
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:amirhoseinsafari42@gmail.com';
    emailLink.click();
  };
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-600 dark:text-blue-400 font-mono text-lg mb-4 text-center">05. What's Next?</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-12 text-center">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto relative">
             <div className="space-y-8">
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-2"
                    >
                      {copied === 'phone' ? (
                        <>
                          <Phone size={20} />
                          <span className="font-medium">Phone number copied!</span>
                        </>
                      ) : (
                        <>
                          <Mail size={20} />
                          <span className="font-medium">Email address copied!</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mx-auto">
                  <motion.div
                    onClick={handleCopyEmail}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 md:mb-4 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors">
                      <Mail size={24} className="md:w-7 md:h-7" />
                    </div>
                    <p className="font-semibold text-sm md:text-base text-slate-800 dark:text-white">Email</p>
                  </motion.div>
                  
                  <motion.div
                    onClick={handleCopyPhone}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 md:mb-4 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors">
                      <Phone size={24} className="md:w-7 md:h-7" />
                    </div>
                    <p className="font-semibold text-sm md:text-base text-slate-800 dark:text-white">Phone</p>
                  </motion.div>

                  <motion.a
                    href="https://t.me/Safari_Amir_Hosein"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 md:mb-4 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors">
                      <Send size={24} className="md:w-7 md:h-7" />
                    </div>
                    <p className="font-semibold text-sm md:text-base text-slate-800 dark:text-white">Telegram</p>
                  </motion.a>

                  <motion.a
                    href="http://wa.me/989210204913"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 md:mb-4 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors">
                      <MessageCircle size={24} className="md:w-7 md:h-7" />
                    </div>
                    <p className="font-semibold text-sm md:text-base text-slate-800 dark:text-white">WhatsApp</p>
                  </motion.a>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
