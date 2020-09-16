import React from 'react';
import tel from './tel.png';

const GestionTel = () => {
  return (
    <section id="gestion_tel" className="row">
      <div className="col-md-5">
        <img
          className="featurette-image img-responsive center-block"
          alt="Acceuil téléphonique"
          width="500"
          height="500"
          src={tel}
          data-holder-rendered="true"
        />
      </div>
      <div className="col-md-7">
        <h1 className="featurette-heading">
          Accueil Téléphonique <span className="text-muted"></span>
        </h1>
        <div className="lead">
          <ul>
            <li>Standard</li>
            <li>Prise de RDV</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GestionTel;
