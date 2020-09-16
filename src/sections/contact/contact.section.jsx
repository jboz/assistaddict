import React, { useState } from 'react';

const Contact = () => {
  const [mail, setMail] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState({ value: '', severity: '' });

  // Le message à bien été envoyé, merci. Nous vous contacterons rapidement.
  // Adresse email invalide.
  const sendMail = () => {
    setMessage({ value: 'Envoi en cours ...', severity: 'info' });
  };

  return (
    <section id="contact" class="row">
      <div class="row">
        <article class="col-md-12">
          <h1>Contact</h1>
          <div>
            <address>
              <strong>Anne-Lyse CUSIN</strong>
              <br />7 rue Robert et Reynier 69190 Saint-Fons
              <br /> tel: 07 64 07 19 10
            </address>
          </div>
        </article>
      </div>
      <div class="row">
        <article class="col-md-8">
          <form id="contact-form">
            <input type="text" name="nom" id="contact-form_nom" placeholder="Nom" required value={mail.name} />
            <input type="text" name="email" id="contact-form_email" placeholder="Email" required value={mail.email} />
            <textarea type="text" name="message" id="contact-form_message" placeholder="Message" required value={mail.message}></textarea>
            <button class="btn btn-lg btn-primary" type="submit" id="submit-contact-form" onClick={sendMail()}>
              Envoyer
            </button>
            {message.value ? (
              <div class={`alert alert-${message.severity}`} role="alert">
                {message.value}
              </div>
            ) : (
              ''
            )}
            {message.severity === 'unexpeced' ? (
              <div class="alert alert-danger error-unexpected" style={{ display: 'none' }} role="alert">
                Erreur lors de l'envoie du message. Contrôler vos informations saisies ou bien contactez moi en cliquant sur ce lien{' '}
                <strong>
                  <a href="/" onClick={sendMail()}>
                    pour envoyer un email
                  </a>
                </strong>
              </div>
            ) : (
              ''
            )}
          </form>
        </article>
        <article class="col-md-4">
          <div class="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.123151551502!2d4.85632605163355!3d45.668427979001265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c29f84814499%3A0x7adcc9a58ea1d8de!2sAssist&#39;+Addict!5e0!3m2!1sfr!2sch!4v1535583000743"
              frameBorder="0"
              title="google-map"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
