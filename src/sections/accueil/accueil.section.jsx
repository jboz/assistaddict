import React from 'react';
import './carousel.css';

const Accueil = () => {
  return (
    <div id="accueil" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className=""></li>
        <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item">
          <img
            className="first-slide"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="First slide"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Une secrétaire à distance : l'indispensable des TPE/PME</h1>
              <p>
                <a className="btn btn-lg btn-primary" href="#why" role="button">
                  En savoir plus
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="item active">
          <img
            className="second-slide"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Second slide"
          />
          <div className="container">
            <div className="carousel-caption">
              <h2>Grâce à mon savoir-faire, améliorez la rentabilité de votre entreprise</h2>
              <p>
                <a className="btn btn-lg btn-primary" href="#interest" role="button">
                  En savoir plus
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <img
            className="third-slide"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Third slide"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>A tout cadre une assistante, à toute assistante un cadre</h1>
              <p>Avançons ensemble</p>
            </div>
          </div>
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Accueil;
