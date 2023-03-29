import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Header, Footer, ProjectCard } from '../../components';
import * as dataAPI from '../../services/dataAPI';
import '../../assets/styles/Projects.css';
import '../../assets/styles/Footer.css';
import {
  devFsoDark,
} from '../../services/ExportImages';

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    dataAPI.getAllProjects().then(((value) => {
      this.setState({ projects: value });
    }));
  }

  render() {
    const { projects } = this.state;
    return (
      <main className="project-list">
        <header className="header">
          <div className="header-logo">
            <HashLink to="/">
              <img
                src={devFsoDark}
                alt="Logo"
                title="Ir para Home"
              />
            </HashLink>
          </div>
          <Header />
        </header>
        <h1>
          Projetos Desenvolvidos no decorrer do Curso de Dev Web Full Stack da Trybe.
        </h1>
        <section className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
        <Footer />
      </main>
    );
  }
}
