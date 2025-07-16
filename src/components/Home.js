import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import ProjectsPreview from '../components/ProjectsPreview';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectsPreview />
      <Contact />
    </>
  );
};

export default Home; 