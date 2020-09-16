import React from 'react';
import { Helmet } from 'react-helmet';
import About from 'sections/about.section';
import Accueil from 'sections/accueil/accueil.section';
import Copyright from 'sections/copyright.section';
import Features from 'sections/features/features.section';
import GestionAdmin from 'sections/gestion-admin/gestion-admin.section';
import GestionComm from 'sections/gestion-comm/gestion-comm.section';
import GestionHumaine from 'sections/gestion-humaine/gestion-humaime.section';
import GestionTel from 'sections/gestion-tel/gestion-tel.section';
import Interest from 'sections/interest.section';
import Presentation from 'sections/presentation.section';
import Prices from 'sections/prices/prices.section';
import Why from 'sections/why.section';
import Header from './sections/header/header.section';

const App = () => {
  const title = "Assist' Addict, assistante administrative indépendante à Lyon";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <Meta />
      </Helmet>
      <Header />
      <Accueil />

      <div className="container marketing">
        <Presentation />
        <Why />

        <Interest />
        <hr className="featurette-divider" />
        <Features />
        <hr className="featurette-divider" />
        <GestionAdmin />
        <hr className="featurette-divider" />
        <GestionComm />
        <hr className="featurette-divider" />
        <GestionHumaine />
        <hr className="featurette-divider" />
        <GestionTel />

        <Prices />
        <About />
        {/* <Contact /> */}
        <Copyright />
      </div>
    </>
  );
};

const Meta = () => {
  return (
    <>
      <meta
        name="description"
        content="Anne-Lyse Cusin, assistante administrative indépendante à lyon, une solution idéale pour les TPE et PME. Assist Addict est une société qui s'adapte à vos besoins. Gestion admnistrative, gestion commerciale, gestion des ressources humaines, accueil téléphonique pour votre société. Sur site ou à distance."
      />
      <meta
        name="keywords"
        content="assitante secrétaire administrative independante externalise a distance Lyon (69) region Rhone-Alpes"
      />
      <meta name="keywords" content="factures deductibles solution ideale societe TPE PME" />
      <meta name="keywords" content="gestion administrative commerciale ressources humaines accueil telephonique" />
      <meta name="keywords" content="Anne-Lyse Cusin, assistante administrative à Lyon" />
      <meta name="author" content="Anne-Lyse Cusin" />
      <meta name="google-site-verification" content="qiFdXC_3J0GXknFYqktWNMz9ifVx_m4kXn44rKxkG9w" />

      <link rel="alternate" hreflang="fr" href="https://assistaddict.com" />
      <link type="text/plain" rel="author" href="https://assistaddict.com/humans.txt" />
    </>
  );
};

export default App;
