import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 text-center border-t border-slate-200 dark:border-slate-800">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        <a href="https://github.com/Amirhosein-st?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Github size={20} />
        </a>
      </div>
      <div className="font-mono text-sm text-slate-500 dark:text-slate-400">
        Designed & Built by Amir-Hosein Safari
      </div>
    </footer>
  );
};

export default Footer;
