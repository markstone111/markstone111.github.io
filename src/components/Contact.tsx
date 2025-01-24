import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-slate-900" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>nikunjnehu@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+91 9720324825</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/markstone111" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-purple-500/20 transition-all">
                <Github className="w-6 h-6 text-purple-400" />
              </a>
              <a href="https://www.linkedin.com/in/nikunjm111/" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-purple-500/20 transition-all">
                <Linkedin className="w-6 h-6 text-purple-400" />
              </a>
            </div>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-xl">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSen_JzIlvFNykCRBjN14t2PDToH4JDolNzMu9qj8T0yc-q8XA/viewform?embedded=true"
              className="w-full h-[400px]"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
