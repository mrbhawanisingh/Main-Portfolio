import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="mb-6 opacity-80 text-lg">Feel free to reach out for collaborations, freelance work, or just a friendly hello! I usually reply within a day and value professional, clear communication.</p>
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 text-left mx-auto inline-block">
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
        <p className="mt-8 text-gray-300 text-sm">Let's build something amazing together. Your message is always welcome!</p>
      </div>
    </section>
  );
};

export default Contact; 