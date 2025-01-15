import React from 'react';

interface Skill {
  name: string;
  proficiency: number;
}

const skills: Skill[] = [
  { name: 'Python', proficiency: 90 },
  { name: 'Kotlin', proficiency: 85 },
  { name: 'Java', proficiency: 80 },
  { name: 'C', proficiency: 75 },
  { name: 'HTML/CSS', proficiency: 85 },
];

export default function Skills() {
  return (
    <section className="py-20 bg-slate-900 text-white" id="skills">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.proficiency}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}