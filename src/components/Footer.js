import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black bg-opacity-90 text-white flex flex-col items-center mt-16">
      <div className="flex gap-4 mb-2">
        {/* Dummy social icons */}
        <span className="hover:text-cyan-400 transition-colors cursor-pointer">🐦</span>
        <span className="hover:text-cyan-400 transition-colors cursor-pointer">💼</span>
        <span className="hover:text-cyan-400 transition-colors cursor-pointer">📸</span>
      </div>
      <div className="text-sm">Contact: sitesmith2@gmail.com</div>
      <div className="text-xs mt-1">&copy; 2025 sitesmith. All rights reserved.</div>
    </footer>
  );
};

export default Footer; 