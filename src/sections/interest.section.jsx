import React from 'react';

const Interest = () => {
  return (
    <section id="interest" className="row">
      <div className="col-md-12">
        <h1>Les Avantages</h1>
        <h2>Factures déductibles des charges</h2>
        <div>
          <ul>
            <li>
              Pas de charges liées à l'embauche : pas de charges patronales, pas de visite médicale, aucun gonflement de la masse salariale
            </li>
            <li>Pas d'investissement de matériel</li>
          </ul>
        </div>
        <h2>Souplesse de la prestation</h2>
        <div>
          <ul>
            <li>Simplicité de la démarche</li>
            <li>Pas d'engagement de durée</li>
          </ul>
        </div>
        <h2>Image de marque</h2>
        <div>
          <ul>
            <li>L'assistante renforce le sérieux de votre entreprise</li>
            <li>Votre société est toujours joignable</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Interest;
