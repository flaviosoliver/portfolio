/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Footer, ProjectList, ProjectFilter } from '../../components';
import '../../assets/styles/Projects.css';
import '../../assets/styles/Footer.css';
import { devFsoDark } from '../../services/ExportImages';
import * as dataAPI from '../../services/dataAPI';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(dataAPI.getAllProjects());
  }, []);

  return (
    <main className="project-list">
      <header className="header">
        <div className="header-logo">
          <HashLink to="/">
            <img src={devFsoDark} alt="Ir para Home" title="Ir para Home" />
          </HashLink>
        </div>
      </header>
      <h1>
        Aqui você verá projetos desenvolvidos no decorrer do Curso de Dev Web
        Full Stack da Trybe e projetos pessoais, com objetivo de estudo ou
        alguma aplicação para resolução de necessidades.
      </h1>
      <section className="project-filter">
        <ProjectFilter projects={projects} onFilter={setProjects} />
      </section>
      <section className="project-grid">
        <ProjectList projects={projects} />
      </section>
      <Footer />
    </main>
  );
}
