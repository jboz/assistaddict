import React from 'react';
import temps_administratif from './temps_administratif.png';

const GestionAdmin = () => {
  return (
    <section id="gestion_admin" className="row">
      <div className="col-md-7">
        <h1 className="featurette-heading">
          Gestion Administrative <span className="text-muted"></span>
        </h1>
        <div className="lead">
          <ul>
            <li>Courriers</li>
            <li>Rédaction de compte-rendu</li>
            <li>Mise en forme de documents</li>
            <li>Préparation des documents comptables</li>
            <li>Classement / Archivage</li>
          </ul>
        </div>
      </div>
      <div className="col-md-5">
        <img
          className="featurette-image img-responsive center-block"
          alt="Gestion administrative"
          width="500"
          height="500"
          src={temps_administratif}
          data-holder-rendered="true"
        />
      </div>
    </section>
  );
};

export default GestionAdmin;
