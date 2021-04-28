import React, { Component } from 'react';
import Nav from '../components/Nav';
import devFsoLight from '../images/devFsoLight.png';
import profile from '../images/profile.jpg';
import '../css/Aside.css';

export default class Aside extends Component {
  render() {
    return (
      <div className="aside-container">
        <img className="logo" src={devFsoLight} alt="Logo" />
        <img className="profile" src={profile} alt="Profile" />
        <h2>Flávio Oliveira</h2>
        <p>Estudante de Desenvolvimento Web Full Stack</p>
        <section className="nav-title">
          <Nav />
        </section>
      </div>
    );
  }
}
