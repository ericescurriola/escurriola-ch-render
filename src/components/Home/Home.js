import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className='welcome'>
            <h1> Willkommen bei escurriola.ch </h1>
            <p className='text'> 
                Auf dieser Webseite vergnüge ich mich mit eigenen Projekten die mir Spass machen.
                In meinen Projekten geht es um Frontend-Entwicklung. Dabei teste ich JS-Bibliotheken
                3D-Loaders, Hosting Services, Full Stack Lösungen, Blogbeiträge, Designs und mehr...
            </p>
        </div>
        <div className='logo-container'>
            <img src={logo} className="home-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Home;
