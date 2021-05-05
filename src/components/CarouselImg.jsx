import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import Carousel from 'react-bootstrap/Carousel'
import ProjectLessonsLearned from '../images/ProjectLessonsLearned.png';
import ProjectPlaygroundFunctions from '../images/ProjectPlaygroundFunctions.png';
import ProjectPixelsArt from '../images/ProjectPixelsArt.png';
import ProjectMemeGenerator from '../images/ProjectMemeGenerator.png';
import ProjectTodoList from '../images/ProjectTodoList.png';
import ProjectFacebookSignup from '../images/ProjectFacebookSignup.png';
import ProjectJsUnitTests from '../images/ProjectJsUnitTests.png';
import ProjectZooFunctions from '../images/ProjectZooFunctions.png';
import ProjectShoppingCart from '../images/ProjectShoppingCart.png';
import ProjectJest from '../images/ProjectJest.png';
import Project from '../images/Project.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Carousel.css';

export default class CarouselImg extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <HashLink to="/projetos/#project-01">
            <img
              className="d-block w-100 img-slide"
              src={ProjectLessonsLearned}
              alt="Projeto - Lessons Learned"
            />
            <Carousel.Caption className="img-slide img-slide-title">
              <h4>Fundamentos do Desenvolvimento Web - Lessons Learned</h4>
              <p>Projeto do Bloco 3 - Introdução à HTML e CSS</p>
            </Carousel.Caption>
          </HashLink>
        </Carousel.Item>

        <Carousel.Item>
          <HashLink to="/projetos/#project-02">
            <img
              className="d-block w-100 img-slide"
              src={ProjectPlaygroundFunctions}
              alt="Projeto - Playground Function"
            />
            <Carousel.Caption className="img-slide img-slide-title">
              <h4>Fundamentos do Desenvolvimento Web - Playground Functions</h4>
              <p>Projeto do Bloco 4 - Introdução à JavaScript e Lógica de Programação</p>
            </Carousel.Caption>
          </HashLink>
        </Carousel.Item>

        <Carousel.Item>
          <HashLink to="/projetos/#project-03">
            <img
              className="d-block w-100 img-slide"
              src={ProjectPixelsArt}
              alt="Projeto - Arte com Pixels"
            />
            <Carousel.Caption className="img-slide img-slide-title">
              <h4>Fundamentos do Desenvolvimento Web - Pixels Art</h4>
              <p>Projeto do Bloco 5 - JavaScript: DOM, Eventos e Web Storage</p>
            </Carousel.Caption>
          </HashLink>
        </Carousel.Item>

        <Carousel.Item>
          <HashLink to="/projetos/#project-04">
            <img
              className="d-block w-100 img-slide"
              src={ProjectMemeGenerator}
              alt="Projeto - Meme Generator"
            />
            <Carousel.Caption className="img-slide img-slide-title">
              <h4>Fundamentos do Desenvolvimento Web - Meme Generator</h4>
              <p>Projeto do Bloco 5 - JavaScript: DOM, Eventos e Web Storage</p>
            </Carousel.Caption>
          </HashLink>
        </Carousel.Item>

        <Carousel.Item>
          <HashLink to="/projetos/#project-05">
            <img
              className="d-block w-100 img-slide"
              src={ProjectTodoList}
              alt="Projeto - Lista de tarefas"
            />
            <Carousel.Caption className="img-slide img-slide-title">
              <h4>Fundamentos do Desenvolvimento Web - Todo List</h4>
              <p>Projeto do Bloco 5 - JavaScript: DOM, Eventos e Web Storage</p>
            </Carousel.Caption>
          </HashLink>
        </Carousel.Item>

        <Carousel.Item>
        <HashLink to="/projetos/#project-06">
            <img
              className="d-block w-100 img-slide"
              src={ProjectFacebookSignup}
              alt="Projeto - Página inicial do Facebook"
            />
            <Carousel.Caption className="img-slide img-slide-title">
              <h4>Fundamentos do Desenvolvimento Web - Facebook Sign-up</h4>
              <p>Projeto do Bloco 6 - HTML e CSS: Forms, Flexbox e Responsivo</p>
            </Carousel.Caption>
          </HashLink>
        </Carousel.Item>

        <Carousel.Item>
        <HashLink to="/projetos/#project-07">
            <img
              className="d-block w-100 img-slide"
              src={ProjectJsUnitTests}
              alt="Projeto - JavaScript Testes Unitários"
            />
            <Carousel.Caption className="img-slide img-slide-title">
              <h4>Fundamentos do Desenvolvimento Web - JavaScript Unit Tests</h4>
              <p>Projeto do Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários</p>
            </Carousel.Caption>
          </HashLink>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectZooFunctions}
            alt="Projeto - Zoo functions"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Zoo Functions</h4>
            <p>Projeto do Bloco 8 - Higher Order Functions do JavaScript ES6</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectShoppingCart}
            alt="Projeto - Carrinho de Compras"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Shopping Cart</h4>
            <p>Projeto do Bloco 9 - JavaScript Assíncrono e Promises</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectJest}
            alt="Projeto - Jest Assíncrono e Mocking"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Jest</h4>
            <p>Projeto do Bloco 10 - Testes automatizados com Jest</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={Project}
            alt="Projeto"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Projeto</h4>
            <p>Projeto do Bloco 00: descrição do projeto.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
