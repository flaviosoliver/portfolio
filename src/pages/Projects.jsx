import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Projects.css';
import '../css/Footer.css';
import { devFsoDark, ProjectLessonsLearned, ProjectPlaygroundFunctions, ProjectPixelsArt, ProjectMemeGenerator, ProjectTodoList } from '../services/ExportImages';

export default class Projects extends Component {
  render() {
    return (
      <main className="project-list">
        <header className="header">
          <div className="header-logo">
            <HashLink to="/">
              <img
                src={ devFsoDark }
                alt="Logo"
                title="Ir para Home" />
            </HashLink>
          </div>
            <Header />
        </header>
        <h1>
          Projetos Desenvolvidos no decorrer do Curso de Dev Web Full Stack da Trybe.
        </h1>
        <section className="project-grid">
          <article className="project-grid-item" id="project-01">
            <img
              className="project-grid-item-imagem"
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
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://github.com/flaviosoliver/project-lessons-learned"
            title="Project Lessons Learned - Repositório"
            > Ir Para Repositório
            </a>
            <br />
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://flaviosoliver.github.io/project-lessons-learned/"
            title="Project Lessons Learned - Deploy"
            > Ir Para Deploy
            </a>
          </article>

          <article className="project-grid-item" id="project-02">
            <img
              className="project-grid-item-imagem"
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
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://github.com/flaviosoliver/project-playground-functions"
            title="Projeto - Playground Function - Repositório"
            > Ir Para Repositório
            </a>
          </article>

          <article className="project-grid-item" id="project-03">
            <img
              className="project-grid-item-imagem"
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              href="https://github.com/flaviosoliver/project-pixels-art"
              title="Projeto - Arte com Pixels - Repositório"
            > Ir Para Repositório
            </a>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              href="https://flaviosoliver.github.io/project-pixels-art/"
              title="Projeto - Arte com Pixels - Deploy"
            > Ir Para Deploy
            </a>
          </article>

          <article className="project-grid-item" id="project-04">
            <img
              className="project-grid-item-imagem"
              src={ ProjectMemeGenerator }
              alt="Projeto Meme Generator"
            />
            <p className="project-title">
              Projeto - Meme Generator
            </p>
            <p className="project-content">
              Fundamentos do Desenvolvimento Web <br />
              Projeto do Bloco 5 - JavaScript: DOM, Eventos e Web Storage
            </p>
            <p className="task-title">
              Proposto:
            </p>
            <p className="task-content">
              Criar uma página com Gerador de Meme, fazer upload de uma imagem para a página e adicione algum texto sobre ela.
            </p>
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://github.com/flaviosoliver/project-meme-generator"
            title="Project Meme Generator - Repositório"
            > Ir Para Repositório
            </a>
            <br />
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://flaviosoliver.github.io/project-meme-generator/"
            title="Project Meme Generator - Deploy"
            > Ir Para Deploy
            </a>
          </article>

          <article className="project-grid-item" id="project-05">
            <img
              className="project-grid-item-imagem"
              src={ ProjectTodoList }
              alt="Projeto Lista de tarefas"
            />
            <p className="project-title">
              Projeto - Lista de tarefas
            </p>
            <p className="project-content">
              Fundamentos do Desenvolvimento Web <br />
              Projeto do Bloco 5 - JavaScript: DOM, Eventos e Web Storage
            </p>
            <p className="task-title">
              Proposto:
            </p>
            <p className="task-content">
              Construir uma página para controle de Lista de Tarefas, integrando conhecimentos de HTML , CSS e JavaScript.
            </p>
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://github.com/flaviosoliver/project-todo-list"
            title="Project Todo List - Repositório"
            > Ir Para Repositório
            </a>
            <br />
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://flaviosoliver.github.io/project-todo-list/"
            title="Project Todo List - Deploy"
            > Ir Para Deploy
            </a>
          </article>
        </section>
        <Footer />
      </main>
    );
  }
}
