import React from 'react';
import Nav from '../Nav';
import devFsoLight from '../../assets/images/devFsoLight.png';
import profile from '../../assets/images/profile.jpg';
import '../../assets/styles/Aside.css';

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
