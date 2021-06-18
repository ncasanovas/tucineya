import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import "../index.css";

export const Suscribirse = () => {

  const [formError, setFormError] = useState(false); 

  window.onload = function () {
    const btnAbrirPopup = document.getElementById("btn-abrir-popup"),
      overlay = document.getElementById("overlay"),
      popup = document.getElementById("popup"),
      btnCerrarPopup = document.getElementById("btn-cerrar-popup");

    btnAbrirPopup.addEventListener("click", function () {
      overlay.classList.add("active");
      popup.classList.add("active");
    });

    btnCerrarPopup.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.classList.remove("active");
      popup.classList.remove("active");
    });
  };

 
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('gmail', 'template_aw5uok9', e.target, 'user_LcLtCbtqDfh0IUE6zlGFi')
      .then((result) => {
            //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            window.location.reload();
            setFormError({ formError: false });  
        }, (error) => {
          setFormError({ formError: true , error });
      });
  }

  
  return (
    <div>
      <button className="btn btn-primary" id="btn-abrir-popup">
        Subscribirse
      </button>
      <div className="contenedor">
        <div className="overlay" id="overlay">
          <div className="popup" id="popup">
            <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup">
              <i className="fas fa-times"></i>
            </a>
            <h3>SUSCRIBETE</h3>
            <h4>y recibe las novedades.</h4>
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="contenedor-inputs">
                <input type="text" placeholder="Nombre" name="to_name"/>
                <input type="email" placeholder="Correo" name="to_email"/>
              </div>
              <input type="submit" className="btn-submit" value="Suscribirse"/>
             
      
            </form>
          </div>
        </div>
      </div>
      <div>
      { !formError ? (
        <div className="contenedor">
        <div className="overlay" id="overlay">
          <div className="popup">
          <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup">
              <i className="fas fa-times"></i>
            </a>
            <div className="popup_inner">
              <h1>Ya estás suscripto</h1>
              <button>close me</button>
            </div>
          </div>
          </div>
          </div>
      ) : (
          <div className="contenedor">
          <div className="overlay" id="overlay">
        <div className="popup">
           <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup">
              <i className="fas fa-times"></i>
            </a>
          <div className="popup_inner">
            <h1>Hubo un error en la suscripción</h1>
            <button>close me</button>
          </div>
        </div>
           </div>
           </div>
      )
      }
      </div>
    </div>
  );
};
