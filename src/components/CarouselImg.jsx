import React, { Component } from 'react';
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
import '../css/Carousel.css';

class CarouselImg extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectLessonsLearned}
            alt="Projeto - Lessons Learned"
          />
          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Lessons Learned</h4>
            <p>Projeto do Bloco 3 - Introdução à HTML e CSS: Criar um site que com uma série de informações a respeito do que foi aprendido nos três blocos iniciais do curso na Trybe, estilizado de forma apropriada.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectPlaygroundFunctions}
            alt="Projeto - Playground Function"
          />

          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Playground Functions</h4>
            <p>Projeto do Bloco 4 - Introdução à JavaScript e Lógica de Programação: Implementar funções a partir de requisitos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectPixelsArt}
            alt="Projeto - Arte com Pixels"
          />

          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Pixels Art</h4>
            <p>Projeto do Bloco 5 - JavaScript: DOM, Eventos e Web Storage: Implementar um editor de arte com pixels. Ou seja, dada uma paleta de cores e um quadro composto por pixels, permitir que quem usa consiga pintar o que quiser no quadro!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectMemeGenerator}
            alt="Projeto - Meme Generator"
          />

          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Meme Generator</h4>
            <p>Projeto do Bloco 5 - JavaScript: DOM, Eventos e Web Storage: Criar uma página com Gerador de Meme, fazer upload de uma imagem para a página e adicione algum texto sobre ela.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectTodoList}
            alt="Projeto - Lista de tarefas"
          />

          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Todo List</h4>
            <p>Projeto do Bloco 5 - JavaScript: DOM, Eventos e Web Storage: Construir uma página para controle de Lista de Tarefas, integrando conhecimentos de HTML , CSS e JavaScript.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectFacebookSignup}
            alt="Projeto - Página inicial do Facebook"
          />

          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Facebook Sign-up</h4>
            <p>Projeto do Bloco 6 - HTML e CSS: Forms, Flexbox e Responsivo: Implementar um editor de arte com pixels. Ou seja, dada uma paleta de cores e um quadro composto por pixels, permitir que quem usa consiga pintar o que quiser no quadro!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectJsUnitTests}
            alt="Projeto - JavaScript Testes Unitários"
          />

          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - JavaScript Unit Tests</h4>
            <p>Projeto do Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários: Implementar funções a partir de requisitos e testes unitários, utilizando o módulo Assert do NodeJS para verificar o correto funcionamento dessas funções.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={ProjectZooFunctions}
            alt="Projeto - Zoo functions"
          />

          <Carousel.Caption className="img-slide img-slide-title">
            <h4>Fundamentos do Desenvolvimento Web - Zoo Functions</h4>
            <p>Projeto do Bloco 8 - Higher Order Functions do JavaScript ES6: Simular um sistema de relatório de um zoológico. O sistema possui informações a respeito dos animais presentes no zoológico, colaboradores, horários de funcionamento e uma tabela de preços que varia de acordo com a idade das pessoas que o visitam. Desenvolver um conjunto de funções capazes de recuperar vários tipos de informações acerca do zoológico e de seu funcionamento</p>
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
            <p>Projeto do Bloco 9 - JavaScript Assíncrono e Promises: Desenvolver um carrinho de compras. Todo e-commerce, como, por exemplo, Amazon, Americanas e Submarino, possui um carrinho de compras para auxiliar as pessoas consumidoras a salvar os itens que desejam comprar.</p>
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
            <p>Projeto do Bloco 10 - Testes automatizados com Jest: Implementar testes utilizando o Jest para verificar o correto funcionamento de uma série de funções.</p>
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

export default CarouselImg;
