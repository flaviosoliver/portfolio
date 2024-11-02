import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Carousel from 'react-bootstrap/Carousel';
import {
  ProjectSeeMore,
  ProjectLessonsLearned,
  ProjectPlaygroundFunctions,
  ProjectPixelsArt,
  ProjectMemeGenerator,
  ProjectTodoList,
  ProjectFacebookSignup,
  ProjectJsUnitTests,
  ProjectZooFunctions,
  ProjectShoppingCart,
  ProjectJest,
} from '../../services/ExportImages';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/CarouselImg.css';

export default function CarouselImg() {
  return (
    <Carousel className="carousel-img">
      <Carousel.Item>
        <HashLink to="/projetos">
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
        <HashLink to="/projetos">
          <img
            className="d-block w-100 img-slide"
            src={ProjectPlaygroundFunctions}
            alt="Projeto - Playground Function"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Playground Functions</h4>
            <p>
              Projeto do Bloco 4 - Introdução à JavaScript e Lógica de
              Programação
            </p>
          </Carousel.Caption>
        </HashLink>
      </Carousel.Item>

      <Carousel.Item>
        <HashLink to="/projetos">
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
        <HashLink to="/projetos">
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
        <HashLink to="/projetos">
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
        <HashLink to="/projetos">
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
        <HashLink to="/projetos">
          <img
            className="d-block w-100 img-slide"
            src={ProjectJsUnitTests}
            alt="Projeto - JavaScript Testes Unitários"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - JavaScript Unit Tests</h4>
            <p>
              Projeto do Bloco 7 - Introdução à JavaScript ES6 e Testes
              Unitários
            </p>
          </Carousel.Caption>
        </HashLink>
      </Carousel.Item>

      <Carousel.Item>
        <HashLink to="/projetos">
          <img
            className="d-block w-100 img-slide"
            src={ProjectZooFunctions}
            alt="Projeto - Zoo functions"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Zoo Functions</h4>
            <p>Projeto do Bloco 8 - Higher Order Functions do JavaScript ES6</p>
          </Carousel.Caption>
        </HashLink>
      </Carousel.Item>

      <Carousel.Item>
        <HashLink to="/projetos">
          <img
            className="d-block w-100 img-slide"
            src={ProjectShoppingCart}
            alt="Projeto - Carrinho de Compras"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Shopping Cart</h4>
            <p>Projeto do Bloco 9 - JavaScript Assíncrono e Promises</p>
          </Carousel.Caption>
        </HashLink>
      </Carousel.Item>

      <Carousel.Item>
        <HashLink to="/projetos">
          <img
            className="d-block w-100 img-slide"
            src={ProjectJest}
            alt="Projeto - Jest Assíncrono e Mocking"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Jest</h4>
            <p>Projeto do Bloco 10 - Testes automatizados com Jest</p>
          </Carousel.Caption>
        </HashLink>
      </Carousel.Item>

      <Carousel.Item>
        <HashLink to="/projetos">
          <img
            className="d-block w-100 img-slide"
            src={ProjectSeeMore}
            alt="Veja mais..."
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Acesse aqui</h4>
            <p>Projetos e seus repositórios</p>
          </Carousel.Caption>
        </HashLink>
      </Carousel.Item>
    </Carousel>
  );
}
