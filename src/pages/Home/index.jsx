/* eslint-disable */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import '../../assets/styles/css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHouse,
  faFolder,
  faAddressCard,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { ContactForm, FileDownload, Projects } from '../../components/';
import { profileNew } from '../../services/ExportImages';
import '../../assets/js/main';
import { navList, panel } from '../../assets/js/util';

// https://forms.gle/fPJtoVA4wUr2exSUA
export default function Home() {
  useEffect(() => {
    const nav = document.querySelector('#nav');
    navList(nav);

    const panelElement = document.querySelector('#main');
    panel(panelElement, { hideOnClick: true, side: 'left' });
  }, []);
  return (
    <>
      <nav id="nav">
        <a href="#home" className="" title="Home">
          <FontAwesomeIcon icon={faHouse} />
        </a>
        <a href="#projects" className="" title="Projetos">
          <FontAwesomeIcon icon={faFolder} />
        </a>
        <a href="#aboutme" className="" title="Sobre mim">
          <FontAwesomeIcon icon={faAddressCard} />
        </a>
        <a href="#contact" className="" title="Contato">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </nav>
      <div id="main">
        <article id="home" className="panel intro">
          <header>
            <h1>Flávio Oliveira</h1>
            <p>Desenvolvedor Full Stack</p>
            <p className="links-area">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-aside-items"
                href="https://www.linkedin.com/in/flaviosoliver/"
                title="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" alt="Linkedin" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-aside-items"
                href="https://github.com/flaviosoliver/"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" alt="Github" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-aside-items"
                href="https://www.instagram.com/flaviosoliver.dev/"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" alt="Instagram" />
              </a>
            </p>
          </header>
          <a href="#projects" className="jumplink pic">
            <span className="arrow icon solid fa-chevron-right">
              <span>Veja meus projetos</span>
            </span>
            <img src={profileNew} alt="" />
          </a>
        </article>
        <article id="projects" className="panel">
          <header>
            <h2>Projetos</h2>
            <Projects />
          </header>
        </article>
        <article id="aboutme" className="panel">
          <header>
            <h2>Sobre Mim</h2>
            <p className="text-break mb-2" style={{ color: 'currentcolor' }}>
              <strong className="text-secondary">
                Desenvolvedor Web Full Stack
              </strong>
              , entusiasta por novos conhecimentos e fascinado por minha
              profissão. Com sólida experiência em desenvolvimento Front-end e
              Back-end, apaixonado por criar soluções inovadoras e eficientes,
              que gerem impacto positivo na vida das pessoas usuárias. Possuo
              profundo conhecimento em{' '}
              <strong className="text-primary">
                TypeScript/NodeJS (JavaScript).
              </strong>
            </p>
            <p className="text-break mb-2" style={{ color: 'currentcolor' }}>
              Ao longo de minha carreira, desenvolvi diversas aplicações web,
              otimizando o desempenho e entregando resultados de alta qualidade
              com as tecnologias:
              <br />
              Front-end: <strong>Angular,</strong> <strong>React,</strong>{' '}
              <strong>HTML,</strong> <strong>CSS3</strong> e{' '}
              <strong>SASS;</strong>
              <br />
              Back-end: <strong>NodeJS,</strong> <strong>ExpressJS,</strong>{' '}
              <strong>NestJS,</strong> <strong>TypeORM</strong> e{' '}
              <strong>Mongoose;</strong>
              <br />
              Banco de dados: <strong>MySQL</strong> e <strong>MongoDB.</strong>
            </p>
            <p className="text-break mb-2" style={{ color: 'currentcolor' }}>
              Baixe meu currículo clicando no botão logo abaixo e conheça melhor
              minhas experiências e expertises.
            </p>
            <FileDownload />
          </header>
        </article>
        <article id="contact" className="panel">
          <header>
            <h2>Contate-me por e-mail</h2>
            <ContactForm />
          </header>
        </article>
      </div>
      <div id="footer">
        <ul className="copyright">
          <li>&copy; Untitled.</li>
          <li>Desenvolvido por Flávio Oliveira</li>
          <li>flavsoliver@gmail.com</li>
          <li>2024</li>
        </ul>
      </div>
    </>
  );
}
