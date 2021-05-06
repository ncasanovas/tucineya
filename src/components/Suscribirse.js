import React, { useState } from "react";
import "../index.css";
import { PopUp } from "./PopUp";

export const Suscribirse = () => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);

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

  const popUp = () => {
    setMostrarPopUp(!mostrarPopUp);
  };

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
            <form action="">
              <div className="contenedor-inputs">
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo" />
              </div>
              <input type="submit" className="btn-submit" value="Suscribirse" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
