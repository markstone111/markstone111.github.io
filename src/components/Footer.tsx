import React from 'react';
import { Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code className="w-6 h-6 text-purple-400" />
          <span className="text-white font-semibold">Tech Portfolio</span>
        </div>
        <p className="text-gray-400 mb-4">
          Passionate about technology and innovation
        </p>
        <div className="flex justify-center gap-6 text-gray-400">
          <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}