import React from 'react';
import ProjectsGrid from '../components/ProjectsGrid';

const Projects = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">All Projects</h1>
      <ProjectsGrid />
    </div>
  );
};

export default Projects; 