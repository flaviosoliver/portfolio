import React from 'react';
import Nav from '../Nav';
import devFsoLight from '../../images/devFsoLight.png';
import profile from '../../images/profile.jpg';
import './Aside.css';

export default function Aside() {
  return (
    <div className="aside-container">
      <img className="logo" src={devFsoLight} alt="Logo" />
      <img className="profile" src={profile} alt="Profile" />
      <h2>Flávio Oliveira</h2>
      <p>Desenvolvedor Web Full Stack</p>
      <section className="nav-title">
        <Nav />
      </section>
    </div>
  );
}
