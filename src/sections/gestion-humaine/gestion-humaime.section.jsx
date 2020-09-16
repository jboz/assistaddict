import React from 'react';
import paye from './paye.png';

const GestionHumaine = () => {
  return (
    <section id="gestion_hum" className="row">
      <div className="col-md-7">
        <h1 className="featurette-heading">
          Gestion des ressources humaines<span className="text-muted"></span>
        </h1>
        <div className="lead">
          <ul>
            <li>Mise en forme des contrats de travail</li>
            <li>Déclaration Unique d'Embauche</li>
            <li>Gestion de la mutuelle</li>
            <li>Déclaration des mouvements du personnel</li>
            <li>Gestion des congés payés</li>
            <li>Gestion des visites médicales</li>
            <li>Gestion des tickets restaurant</li>
            <li>Demande de formation</li>
          </ul>
        </div>
      </div>
      <div className="col-md-5">
        <img
          className="featurette-image img-responsive center-block"
          alt="Gestion des ressources humaines"
          width="500"
          height="500"
          src={paye}
          data-holder-rendered="true"
        />
      </div>
    </section>
  );
};

export default GestionHumaine;
