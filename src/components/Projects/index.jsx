/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { ProjectList, ProjectFilter } from '../../components';
import '../../assets/styles/css/Projects.css';
import * as dataAPI from '../../services/dataAPI';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(dataAPI.getAllProjects());
  }, []);

  return (
    <main className="project-list">
      <p>
        Aqui você verá projetos desenvolvidos no decorrer do Curso de Dev Web
        Full Stack da Trybe e projetos pessoais, com objetivo de estudo ou
        alguma aplicação para resolução de necessidades.
      </p>
      <section className="project-filter">
        <ProjectFilter projects={projects} onFilter={setProjects} />
      </section>
      <section className="project-grid">
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
