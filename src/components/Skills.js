import React from 'react';

const skills = [
  { name: 'React Development', level: 80 },
  { name: 'Node.js Backend', level: 70 },
  { name: 'Tailwind Styling', level: 60 },
  { name: 'MongoDB Integration', level: 70 },
  { name: 'Prompt Engineering', level: 100 },
  { name: 'AI Tools', level: 90 },
  { name: 'Git Workflow', level: 70 },
  { name: 'UI Design', level: 90 },
  { name: 'Meta Advertising', level: 80 },
  { name: 'WordPress Customization', level: 90 },
  { name: 'Cursor Coding', level: 90 },
  { name: 'AI Prompting', level: 90 },
  { name: 'Video Editing', level: 70 },
  { name: 'Growth Mindset', level: 100 },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="bg-cyan-500 h-3 rounded-full transition-all duration-700" style={{width: `${skill.level}%`}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 