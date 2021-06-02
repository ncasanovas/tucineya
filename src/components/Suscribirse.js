import React from "react";
import "../index.css";

export const Suscribirse = () => {
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

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
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
            <form onSubmit={sendEmail}>
              <div className="contenedor-inputs">
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo" />
              </div>
              <input type="submit" className="btn-submit" value="Suscribirse"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
