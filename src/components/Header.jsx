import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../css/Header.css';

export default class Header extends Component {
  state = {  }
  render() {
    return (
      <header className="header-container">

        <input type="checkbox" id="control-nav" />
        <label for="control-nav" class="control-nav"></label>
        <label for="control-nav" class="control-nav-close"></label>

        <nav className="float-r">
          <ul className="list-auto">
            <li>
              <HashLink classeName="nav-header-items" to="/#sobre">Sobre Mim</HashLink>
            </li>
            <li>
              <HashLink classeName="nav-header-items" to="/#habilidades">Habilidades</HashLink></li>
            <li>
              <HashLink classeName="nav-header-items" to="/#projetos">Projetos</HashLink>
            </li>
            <li>
              <HashLink classeName="nav-header-items" to="/#conteudo">Recomendações</HashLink></li>
            <li>
              <HashLink classeName="nav-header-items" to="">Contato</HashLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}