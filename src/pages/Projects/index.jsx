import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Header, Footer } from '../../components';
import '../Projects/Projects.css';
import '../../components/Footer/Footer.css';
import {
  devFsoDark,
  ProjectLessonsLearned,
  ProjectPlaygroundFunctions,
  ProjectPixelsArt,
  ProjectMemeGenerator,
  ProjectTodoList,
  ProjectFacebookSignup,
  ProjectJsUnitTests,
} from '../../services/ExportImages';

export default function Projects() {
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
        <article className="project-grid-item" id="project-01">
          <img
            className="project-grid-item-imagem"
            src={ProjectLessonsLearned}
            alt="Projeto Lessons Learned"
          />
          <p className="project-title">
            Projeto - Lessons Learned
          </p>
          <p className="project-content">
            Fundamentos do Desenvolvimento Web
            {' '}
            <br />
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
          >
            {' '}
            Ir Para Repositório
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://flaviosoliver.github.io/project-lessons-learned/"
            title="Project Lessons Learned - Deploy"
          >
            {' '}
            Ir Para Deploy
          </a>
        </article>

        <article className="project-grid-item" id="project-02">
          <img
            className="project-grid-item-imagem"
            src={ProjectPlaygroundFunctions}
            alt="Project Lessons Learned"
          />
          <p className="project-title">
            Projeto - Playground Function
          </p>
          <p className="project-content">
            Fundamentos do Desenvolvimento Web
            {' '}
            <br />
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
          >
            {' '}
            Ir Para Repositório
          </a>
        </article>

        <article className="project-grid-item" id="project-03">
          <img
            className="project-grid-item-imagem"
            src={ProjectPixelsArt}
            alt="Project Pixels Art"
          />
          <p className="project-title">
            Projeto - Arte com Pixels
          </p>
          <p className="project-content">
            Fundamentos do Desenvolvimento Web
            {' '}
            <br />
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
          >
            {' '}
            Ir Para Repositório
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://flaviosoliver.github.io/project-pixels-art/"
            title="Projeto - Arte com Pixels - Deploy"
          >
            {' '}
            Ir Para Deploy
          </a>
        </article>

        <article className="project-grid-item" id="project-04">
          <img
            className="project-grid-item-imagem"
            src={ProjectMemeGenerator}
            alt="Projeto Meme Generator"
          />
          <p className="project-title">
            Projeto - Meme Generator
          </p>
          <p className="project-content">
            Fundamentos do Desenvolvimento Web
            {' '}
            <br />
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
          >
            {' '}
            Ir Para Repositório
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://flaviosoliver.github.io/project-meme-generator/"
            title="Project Meme Generator - Deploy"
          >
            {' '}
            Ir Para Deploy
          </a>
        </article>

        <article className="project-grid-item" id="project-05">
          <img
            className="project-grid-item-imagem"
            src={ProjectTodoList}
            alt="Projeto Lista de tarefas"
          />
          <p className="project-title">
            Projeto - Lista de tarefas
          </p>
          <p className="project-content">
            Fundamentos do Desenvolvimento Web
            {' '}
            <br />
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
          >
            {' '}
            Ir Para Repositório
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://flaviosoliver.github.io/project-todo-list/"
            title="Project Todo List - Deploy"
          >
            {' '}
            Ir Para Deploy
          </a>
        </article>

        <article className="project-grid-item" id="project-06">
          <img
            className="project-grid-item-imagem"
            src={ProjectFacebookSignup}
            alt="Projeto Página inicial do Facebook"
          />
          <p className="project-title">
            Projeto - Página inicial do Facebook
          </p>
          <p className="project-content">
            Fundamentos do Desenvolvimento Web
            {' '}
            <br />
            Projeto do Bloco 6 - HTML e CSS: Forms, Flexbox e Responsivo
          </p>
          <p className="task-title">
            Proposto:
          </p>
          <p className="task-content">
            Recriar o icônico layout da tela de cadastro da rede social mais acessada do mundo, o Facebook, com uma audiência de mais de 2,3 bilhões de usuários por mês.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://github.com/flaviosoliver/project-facebook-signup"
            title="Project Facebook Sign-up - Repositório"
          >
            {' '}
            Ir Para Repositório
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://flaviosoliver.github.io/project-facebook-signup/"
            title="Project Facebook Sign-up - Deploy"
          >
            {' '}
            Ir Para Deploy
          </a>
        </article>

        <article className="project-grid-item" id="project-07">
          <img
            className="project-grid-item-imagem"
            src={ProjectJsUnitTests}
            alt="Projeto JavaScript Testes Unitários"
          />
          <p className="project-title">
            Projeto - JavaScript Testes Unitários
          </p>
          <p className="project-content">
            Fundamentos do Desenvolvimento Web
            {' '}
            <br />
            Projeto do Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários
          </p>
          <p className="task-title">
            Proposto:
          </p>
          <p className="task-content">
            Implementar funções a partir de requisitos e testes unitários, utilizando o módulo Assert do NodeJS para verificar o correto funcionamento dessas funções.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            href="https://github.com/flaviosoliver/project-js-unit-tests"
            title="Project JavaScript Unit Tests - Repositório"
          >
            {' '}
            Ir Para Repositório
          </a>

        </article>
      </section>
      <Footer />
    </main>
  );
}
