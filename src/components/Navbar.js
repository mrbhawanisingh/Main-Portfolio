import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="w-full h-16 flex justify-between items-center px-8 bg-gradient-to-r from-cyan-900/80 via-cyan-700/80 to-blue-900/80 text-white fixed top-0 left-0 z-50 shadow-xl backdrop-blur-md border-b border-cyan-800/40">
      <div className="flex items-center gap-2 font-bold text-xl tracking-wide text-cyan-300 drop-shadow h-full">
        <span className="inline-block animate-spin-slow">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#22d3ee" strokeWidth="2" fill="none" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="#facc15" strokeWidth="2" />
          </svg>
        </span>
        SiteSmith
      </div>
      <ul className="flex gap-8 h-full items-center">
        {navLinks.map(link => (
          <li key={link.name} className="relative group flex items-center h-full">
            <Link
              to={link.path}
              className={`transition-all duration-300 hover:text-yellow-300 text-lg font-medium px-1 flex flex-col items-center h-full justify-center`}
              style={{height: '100%'}}
            >
              <span className="h-full flex items-center">{link.name}</span>
              <span className={`block h-1 rounded-full transition-all duration-300 mt-1 ${location.pathname === link.path ? 'w-full bg-yellow-400' : 'w-0 group-hover:w-full bg-cyan-400'}`}></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar; 