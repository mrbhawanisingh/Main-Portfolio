import React from 'react';

const experiences = [
  {
    title: 'WordPress Website Developer',
    company: '',
    date: 'AUG 2022 – PRESENT',
    subtitle: 'Client-Focused Design',
    bullets: [
      'Built custom WordPress themes and plugins as per client needs.',
      'Integrated HTML5, CSS3, JavaScript, and PHP standards.',
      'Worked with business teams to build optimized, responsive UI/UX designs.'
    ]
  },
  {
    title: 'AI Web Developer & Prompt Engineer',
    company: '',
    date: 'Jan 2023 – Present',
    subtitle: 'Smart AI Development & Code Automation',
    bullets: [
      'Built intelligent websites using OpenAI API, prompts, and custom backend (Node.js, MongoDB).',
      'Engineered dynamic AI tools with frontend + backend logic.',
      'Leveraged Cursor AI for rapid full-stack project generation and automation.',
      'Delivered portfolio and production-ready apps with smart AI workflows.'
    ]
  },
  {
    title: 'Custom Web & Database',
    company: '',
    date: 'May 2021 – Present',
    subtitle: 'Self Made Web Application',
    bullets: [
      'Developed dynamic frontend using JavaScript and React.',
      'Designed scalable database architectures (MongoDB, SQL).',
      'Built secure backend APIs using Node.js and Express.js.'
    ]
  },
  {
    title: 'Store Ecommerce Service',
    company: '',
    date: 'July 2022 – June 2023',
    subtitle: 'Smart Store Solutions',
    bullets: [
      'Created and deployed complete ecommerce platforms.',
      'Integrated SQL database, SEO tools, and payment gateways.',
      'Added social media marketing features for store branding.'
    ]
  },
  {
    title: 'Full-Stack Web Developer & Tech Explorer (Freelance & Self-Driven)',
    company: '',
    date: 'Jan 2021 – Present',
    subtitle: 'Smart AI Development & Code Automation',
    bullets: [
      'Built and deployed multiple full-stack projects using modern web technologies like React.js, Node.js, Tailwind CSS, MySQL, and REST APIs. Specialized in designing responsive UIs, managing real-time databases, and integrating AI-powered features using OpenAI APIs.',
      'Actively explored AI development workflows using Cursor AI and ChatGPT, implementing smart automation and content generation tools. Skilled in prompt engineering, creating context-aware, goal-oriented prompts for tasks like AI story generation, caption writing, and code logic explanation.',
      'Also developed personal and client-based websites using pure HTML, CSS, and JavaScript. Passionate about building scalable applications, automating workflows, and solving real-world problems with clean, efficient code.'
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative bg-gray-900 rounded-lg shadow-lg p-6 border-l-4 border-cyan-500">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xl font-bold text-white">{exp.title}</span>
                <span className="text-sm text-gray-300 font-semibold">{exp.date}</span>
              </div>
              <div className="text-md text-cyan-300 font-semibold mb-1">{exp.subtitle}</div>
              <ul className="list-disc ml-6 text-gray-200 text-sm space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 