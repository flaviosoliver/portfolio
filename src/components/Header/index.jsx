import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

export default function Header() {
  return (
    <header className="header-container">

      <input type="checkbox" id="control-nav" />
      <label htmlFor="control-nav" className="control-nav" />
      <label htmlFor="control-nav" className="control-nav-close" />

      <nav className="float-r">
        <ul className="list-auto">
          <li>
            <HashLink classeName="nav-header-items" to="/#sobre">Sobre Mim</HashLink>
          </li>
          <li>
            <HashLink classeName="nav-header-items" to="/#habilidades">Habilidades</HashLink>

          </li>
          <li>
            <HashLink classeName="nav-header-items" to="/#projetos">Projetos</HashLink>
          </li>
          <li>
            <HashLink classeName="nav-header-items" to="/#conteudo">Recomendações</HashLink>

          </li>
          <li>
            <HashLink classeName="nav-header-items" to="#contato">Contato</HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
