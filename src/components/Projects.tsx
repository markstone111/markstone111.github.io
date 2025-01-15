import React from 'react';
import { Bot, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'NLP-Powered Chatbot',
    description: 'An intent-based chatbot created using Natural Language Processing, capable of understanding and responding to user queries intelligently.',
    icon: Bot,
    tags: ['Python', 'NLP', 'Machine Learning']
  },
  {
    title: 'Multi-Unit Converter',
    description: 'Android app built with Kotlin and Jetpack Compose. Features comprehensive unit conversion capabilities with API integration in progress.',
    icon: Smartphone,
    tags: ['Kotlin', 'Android', 'Jetpack Compose']
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-slate-800" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-slate-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <project.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}