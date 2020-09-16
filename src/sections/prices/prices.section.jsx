import React from 'react';
import plaquette_assistaddict from './plaquette_assistaddict.pdf';

const Prices = () => {
  return (
    <section id="tariffs" className="row section-even">
      <div className="col-md-12">
        <h1>Démarche</h1>
        <p>Après un premier contact (téléphonique, mail), un rendez-vous est fixé afin d'échanger au mieux sur vos besoins.</p>
        <p>
          Un devis personnalisé, basé sur les éléments transmis, vous est envoyé. Si le devis vous convient, il est alors à renvoyer daté et
          signé avec la mention "bon pour accord".
        </p>
        <p>
          La prestation commence alors et se termine selon ce qui a été prévu initialement. La facture est envoyée en fin de mission ou en
          fin de mois pour les prestations récurrentes. En cas de prolongation, un nouveau devis sera établi correspondant au nouveau
          besoin.
        </p>
        <p>
          Les tarifs varient en fonction de la complexité de la demande ainsi que de sa récurrence. Les prestations sont soumis à T.V.A.
        </p>
        <p>
          <a className="btn btn-lg btn-primary" href={plaquette_assistaddict} role="button" title="Télécharger la plaquette commerciale">
            Télécharger la plaquette commerciale
          </a>
        </p>
      </div>
    </section>
  );
};

export default Prices;
