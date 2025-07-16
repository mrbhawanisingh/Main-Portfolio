import React from 'react';

const projects = [
  { title: 'Salon Portfolio', desc: 'Beauty Website for Salon', tags: ['React', 'Tailwind', 'Node.js', 'AI'], github: 'https://github.com/mrbhawanisingh/bahurani-portfolio-website', live: 'https://bahuranibeautyworld.store/', img: '/p1.png' },
  { title: 'Fear Archives', desc: 'Horror riddles & stories with AI backend', tags: ['JavaScript', 'API', 'React', 'Node.js', 'TailwindCSS', 'SQL', 'AI'], github: 'https://github.com/mrbhawanisingh/fear-archives', live: 'https://feararchives.fun/fear-archives/', img: '/p2.png' },
  { title: 'GreenRoots', desc: 'Clean UI for buying indoor plants', tags: ['CSS', 'UI', 'HTML', 'JavaScript'], github: 'https://github.com/mrbhawanisingh/plant-website', live: null, img: '/p3.png' },
  { title: 'GlamKart', desc: 'Online cosmetic store with smooth UI', tags: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/mrbhawanisingh/glamkart-web', live: null, img: '/p4.png' },
  { title: 'GlowNest', desc: 'Beauty e-store with database integration', tags: ['HTML', 'CSS', 'JavaScript', 'DB', 'Backend'], github: 'https://github.com/mrbhawanisingh/glamkart-web', live: null, img: '/p5.png' },
  { title: 'SiteSmith Portfolio', desc: ' Self-coded resume and portfolio website', tags: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/mrbhawanisingh/portfolio-old-web', live: null, img: '/p6.png' },
  { title: 'Python Automation Tool', desc: 'Automation tool Auto upload Yt Videos', tags: ['Python','library'], github: 'https://github.com/mrbhawanisingh/pythone-automation', live: null, img: '/p7.png' },
];

const ProjectsGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((proj, idx) => (
        <div key={idx} className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform">
          {proj.img ? (
            <img src={process.env.PUBLIC_URL + proj.img} alt={proj.title} className="h-32 w-full object-cover rounded mb-4" />
          ) : (
            <div className="h-32 w-full bg-gray-700 rounded mb-4" />
          )}
          <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
          <p className="text-sm opacity-80 mb-2">{proj.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {proj.tags.map((tag, i) => (
              <span key={i} className="bg-cyan-700 text-white text-xs px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="mt-auto flex gap-4">
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 rounded text-white font-medium hover:bg-cyan-500 transition">GitHub</a>
            {proj.live && (
              <a href={proj.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-500 rounded text-white font-medium hover:bg-cyan-400 transition">Live</a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid; 