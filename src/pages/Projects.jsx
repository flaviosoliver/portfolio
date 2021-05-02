import React, { Component } from 'react';
import Header from '../components/Header';
import '../css/Projects.css';
import { ProjectLessonsLearned, ProjectPlaygroundFunctions, ProjectPixelsArt } from '../services/ExportImages';

export default class Projects extends Component {
  render() {
    return (
      <main className="project-list">
        <header className="header">
            <Header />
        </header>
        <h1>
          Projetos Desenvolvidos no decorrer do Curso de Dev Web Full Stack da Trybe.
        </h1>
        <section className="project-grid">
          <article className="project-grid-item" id="project-01">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              href="https://github.com/flaviosoliver/project-lessons-learned"
              title="Project Lessons Learned"
            >
              <img
                className=""
                src={ ProjectLessonsLearned }
                alt="Projeto Lessons Learned"
              />
              <p className="project-title">
                Projeto - Lessons Learned
              </p>
              <p className="project-content">
                Fundamentos do Desenvolvimento Web <br />
                Bloco 03 - Introdução à HTML e CSS
              </p>
              <p className="task-title">
                Proposto:
              </p>
              <p className="task-content">
                Criar um site que com uma série de informações a respeito do que foi aprendido nos três blocos iniciais do curso na Trybe, estilizado de forma apropriada.
              </p>
            </a>
          </article>
          <article className="project-grid-item" id="project-02">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="projects-image"
              href="https://github.com/flaviosoliver/project-playground-functions"
              title="Projeto - Playground Function"
            >
              <img
                className=""
                src={ ProjectPlaygroundFunctions }
                alt="Project Lessons Learned"
              />
              <p className="project-title">
                Projeto - Playground Function
              </p>
              <p className="project-content">
                Fundamentos do Desenvolvimento Web <br />
                Bloco 04 - Introdução à JavaScript e Lógica de Programação
              </p>
              <p className="task-title">
                Proposto:
              </p>
              <p className="task-content">
                Implementar funções a partir de requisitos.
              </p>
            </a>
          </article>
          <article className="project-grid-item" id="project-03">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="projects-image"
              href="https://github.com/flaviosoliver/project-playground-functions"
              title="Projeto - Playground Function"
            >
              <img
                className=""
                src={ ProjectPixelsArt }
                alt="Project Pixels Art"
              />
              <p className="project-title">
                Projeto - Arte com Pixels
              </p>
              <p className="project-content">
                Fundamentos do Desenvolvimento Web <br />
                Projeto do Bloco 5 - JavaScript: DOM, Eventos e Web Storage
              </p>
              <p className="task-title">
                Proposto:
              </p>
              <p className="task-content">
              Implementar um editor de arte com pixels. Ou seja, dada uma paleta de cores e um quadro composto por pixels, permitir que quem usa consiga pintar o que quiser no quadro!
              </p>
            </a>
          </article>
        </section>
      </main>
    );
  }
}
