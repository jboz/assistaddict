import React from 'react';

const Copyright = () => {
  const membre = 'Membre de la coopérative d’activités Escale Création';
  const address = '7 rue Robert et Reynier 69190 Saint-Fons | SCIC SARL à capital variable - Siret 480 127 414 00013';
  return (
    <section id="copyright" className="row">
      <div className="col-md-12">
        {membre}
        <br />• {address}
      </div>
    </section>
  );
};

export default Copyright;
