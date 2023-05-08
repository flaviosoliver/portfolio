/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import { ProjectCard } from '../index';
import '../../assets/styles/ProjectList.css';

export default function ProjectList({ projects }) {
  const [resolvedProjects, setResolvedProjects] = useState([]);

  useEffect(() => {
    if (Array.isArray(projects)) {
      setResolvedProjects(projects);
    } else {
      projects.then((data) => setResolvedProjects(data));
    }
  }, [projects]);

  return (
    <div className="project-card-container">
      {Array.isArray(resolvedProjects) &&
        resolvedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  );
}
