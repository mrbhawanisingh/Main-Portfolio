import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bhawani_3377/',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-pink-500">
        <rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bhawani-singh-chouhan-527a35247',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500">
        <rect x="2" y="2" width="20" height="20" rx="4" strokeWidth="2" />
        <path d="M7 10v7M7 7v.01M12 10v7m0 0v-4a2 2 0 0 1 4 0v4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/mrbhawanisingh',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-300">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" strokeWidth="2" />
      </svg>
    ),
  },
];

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[80vh] w-full bg-gradient-to-b from-cyan-900 via-gray-900 to-gray-800 text-white">
      <img
        src={process.env.PUBLIC_URL + '/resume.jpg'}
        alt="Profile"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-cyan-400 shadow-xl mb-8 mt-8 md:mt-0"
        style={{ boxShadow: '0 8px 32px 0 rgba(0,255,255,0.2)' }}
      />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center tracking-tight drop-shadow-lg">
        <span className="bg-gradient-to-r from-yellow-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Hi, I'm <span className="decoration-cyan-400 decoration-4">Bhawani Singh Chauhan</span>
        </span>
      </h1>
      <p className="text-lg md:text-2xl mb-8 font-medium text-center opacity-90"> TECH-SAVVY FULL-STACK DEVELOPER | AI ENTHUSIAST |
      WEB ARCHITECT</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
        <a href="/resume.pdf" download className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 text-gray-900 font-bold">
          Download Resume
        </a>
        <Link to="/projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 text-white font-bold">
          View Projects
        </Link>
      </div>
      <div className="flex gap-6 mt-2">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero; 