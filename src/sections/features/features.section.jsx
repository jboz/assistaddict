import React from 'react';
import comm from './comm.png';
import events from './events.png';
import folders from './folders.png';
import tel from './tel.png';

const Features = () => {
  return (
    <section id="features" className="row">
      <article className="col-lg-3">
        <img src={folders} className="img-circle" alt="gestion adminitrative" width="140" height="140" />
        <h1>Gestion Administrative</h1>
        <p>
          <a className="btn btn-default" href="#gestion_admin" role="button">
            En savoir plus »
          </a>
        </p>
      </article>
      <article className="col-lg-3">
        <img src={comm} className="img-circle" alt="gestion commerciale" width="140" height="140" />
        <h1>Gestion commerciale</h1>
        <p>
          <a className="btn btn-default" href="#gestion_comm" role="button">
            En savoir plus »
          </a>
        </p>
      </article>
      <article className="col-lg-3">
        <img src={events} className="img-circle" alt="gestion des ressources humaines" width="140" height="140" />
        <h1>Ressources Humaines</h1>
        <p>
          <a className="btn btn-default" href="#gestion_hum" role="button">
            En savoir plus »
          </a>
        </p>
      </article>
      <article className="col-lg-3">
        <img src={tel} className="img-circle" alt="accueil telephonique" width="140" height="140" />
        <h1>Accueil Téléphonique</h1>
        <p>
          <a className="btn btn-default" href="#gestion_tel" role="button">
            En savoir plus »
          </a>
        </p>
      </article>
      <article className="col-lg-12">
        <br />
        <h3>
          Assist Addict est surtout un société qui s'adapte à <strong>vos besoins</strong>.
        </h3>
        <p>
          Contactez-moi pour me faire part de votre besoin, nous élaborerons ensemble <strong>la solution qui vous contient</strong>.
        </p>
      </article>
    </section>
  );
};

export default Features;
