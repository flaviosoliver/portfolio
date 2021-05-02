import React, { Component } from 'react';
import linkedin from '../images/linkedin.png';
import github1 from '../images/github1.png';
// import github2 from '../images/github2.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import '../css/Aside.css';

export default class Nav extends Component {
  state = {  }
  render() {
    return (
      <section>
        <div>
          <p>Minhas Redes Sociais:</p>
        </div>
        <nav className="nav-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nav-aside-items"
            href="https://www.linkedin.com/in/flaviosoliver/"
            title="Linkedin"
          >
            <img
              className="social-icon"
              src={ linkedin }
              alt="Linkedin"
              width="40px"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nav-aside-items"
            href="https://github.com/flaviosoliver/"
            title="GitHub"
          >
            <img
              className="social-icon"
              src={ github1 }
              alt="GitHub"
              width="40px"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nav-aside-items"
            href="https://www.facebook.com/flaviosoliver/"
            title="Facebook"
          >
            <img
              className="social-icon"
              src={ facebook }
              alt="Facebook"
              width="40px"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nav-aside-items"
            href="https://www.instagram.com/flaviosoliver.dev/"
            title="Instagram"
          >
            <img
              className="social-icon"
              src={ instagram }
              alt="Instagram"
              width="40px"
            />
          </a>
        </nav>
      </section>
    );
  }
}