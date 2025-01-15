import React from 'react';
import { Code2, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Terminal className="w-16 h-16 text-purple-400 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Tech Enthusiast & Developer
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Second-year BTech student passionate about creating innovative solutions through code.
          Specializing in Android development and AI applications.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
            <Code2 className="w-5 h-5" />
            View Projects
          </button>
          <button className="border border-purple-500 hover:bg-purple-500/20 px-6 py-3 rounded-lg transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}