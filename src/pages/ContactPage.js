import React from 'react';

const ContactPage = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white min-h-[70vh] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4">Contact Me</h1>
        <p className="mb-8 opacity-80 text-lg">Let's connect! For collaborations, freelance work, or just a friendly hello, use the info below. I usually reply within a day and value professional, clear communication.</p>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-left mx-auto inline-block w-full max-w-md">
          <div className="mb-3">
            <span className="font-semibold text-cyan-400">Phone:</span> <a href="tel:7357057150" className="hover:underline">7357057150</a>
          </div>
          <div className="mb-3">
            <span className="font-semibold text-cyan-400">Email:</span> <a href="mailto:sitesmith2@gmail.com" className="hover:underline">sitesmith2@gmail.com</a>
          </div>
          <div className="mb-3">
            <span className="font-semibold text-cyan-400">Address:</span> 191, Sanjay Colony, Bhilwara, Rajasthan 311001
          </div>
        </div>
        <div className="flex gap-6 justify-center mt-8">
          <a href="https://www.instagram.com/bhawani_3377/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-pink-500">
              <rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" strokeWidth="2" />
              <circle cx="17" cy="7" r="1.5" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/bhawani-singh-chouhan-527a35247" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500">
              <rect x="2" y="2" width="20" height="20" rx="4" strokeWidth="2" />
              <path d="M7 10v7M7 7v.01M12 10v7m0 0v-4a2 2 0 0 1 4 0v4" strokeWidth="2" />
            </svg>
          </a>
          <a href="https://github.com/mrbhawanisingh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-300">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" strokeWidth="2" />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-gray-300 text-sm">Looking forward to hearing from you. Let's build something amazing together!</p>
      </div>
    </section>
  );
};

export default ContactPage; 