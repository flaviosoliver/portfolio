import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '../../assets/styles/Aside.css';

export default function Nav() {
  return (
    <section>
      <div className="caption">
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
          href="https://www.facebook.com/flaviosoliver/"
          title="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} size="2x" alt="Facebook" />
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
      </nav>
    </section>
  );
}
