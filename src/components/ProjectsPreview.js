import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { title: 'Project One', desc: 'Short description of project one.', img: '/p1.png' },
  { title: 'Project Two', desc: 'Short description of project two.', img: '/p2.png' },
  { title: 'Project Three', desc: 'Short description of project three.', img: '/p3.png' },
];

const ProjectsPreview = () => {
  return (
    <section className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
              {proj.img ? (
                <img src={process.env.PUBLIC_URL + proj.img} alt={proj.title} className="h-32 w-full object-cover rounded mb-4" />
              ) : (
                <div className="h-32 w-full bg-gray-700 rounded mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm opacity-80 mb-2">{proj.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-lg font-semibold rounded-full shadow-lg transition-all duration-300">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview; 