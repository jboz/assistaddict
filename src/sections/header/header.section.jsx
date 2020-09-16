import React from 'react';
import yeux from './yeux.jpg';

const Header = () => {
  return (
    <>
      <div id="logo-yeux" className="col-md-12">
        <img className="img-responsive center-block" alt="Acceuil téléphonique" src={yeux} data-holder-rendered="true" />
      </div>
      <nav className="col-md-12 navbar navbar-default" id="navigation" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <a href="#accueil">Accueil</a>
            </li>
            <li>
              <a href="#presentation">Presentation</a>
            </li>
            <li>
              <a href="#features">Prestations</a>
            </li>
            <li>
              <a href="#tariffs">Tarifs</a>
            </li>
            <li>
              <a href="#about">A propos</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right"></ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
