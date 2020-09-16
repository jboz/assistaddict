import React from 'react';
import facture from './facture.png';

const GestionComm = () => {
  return (
    <section id="gestion_comm" className="row">
      <div className="col-md-5">
        <img
          className="featurette-image img-responsive center-block"
          alt="Gestion commerciale"
          width="500"
          height="500"
          src={facture}
          data-holder-rendered="true"
        />
      </div>
      <div className="col-md-7">
        <h1 className="featurette-heading">
          Gestion Commerciale<span className="text-muted"></span>
        </h1>
        <div className="lead">
          <ul>
            <li>Création / Tenue des tableaux de bord</li>
            <li>Gestion des devis / factures</li>
            <li>Relance des impayés</li>
            <li>Suivi des achats</li>
            <li>Gestion de planning</li>
            <li>Organisation des déplacements</li>
            <li>Organisation d'évènements</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GestionComm;
