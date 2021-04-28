import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../css/Header.css';

export default class Header extends Component {
  state = {  }
  render() {
    return (
      <header className="header-container">
        <nav>
          <HashLink classeName="nav-header-items" to="/#sobre">Sobre Mim</HashLink>
          <HashLink classeName="nav-header-items" to="/#habilidades">Habilidades</HashLink>
          <HashLink classeName="nav-header-items" to="/#projetos">Projetos</HashLink>
          <HashLink classeName="nav-header-items" to="/#conteudo">Recomendações</HashLink>
          <HashLink classeName="nav-header-items" to="">Contato</HashLink>
        </nav>
      </header>
    );
  }
}