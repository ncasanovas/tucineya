import React,  { Fragment } from 'react';

export const Form = () => {
    window.onload = function () {

            var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
                overlay = document.getElementById('overlay'),
                popup = document.getElementById('popup'),
                btnCerrarPopup = document.getElementById('btn-cerrar-popup');

            btnAbrirPopup.addEventListener('click', function(){
                overlay.classList.add('active');
                popup.classList.add('active');
            });

            btnCerrarPopup.addEventListener('click', function(e){
                e.preventDefault();
                overlay.classList.remove('active');
                popup.classList.remove('active');
            });
    }

    return (   
        <Fragment>
            <form action="/action_page.php">
                <label for="fname">Email:</label><br />
                <input type="text" id="fname" name="fname" value="pedro@gmail.com"/><br />
                <label for="lname">Contraseña:</label><br />
                <input type="text" id="lname" name="lname"/><br /><br />
                <input type="submit" value="Ingresar"/><br /><br />
                <p>¿Todavía no te registraste?</p>
                <input type="submit" value="Registrarme"/>
            </form> 

            <button id="btn-abrir-popup" class="btn-abrir-popup btn btn-primary">Subscribirse</button>

            <div class="contenedor">
              

                <div class="overlay" id="overlay">
                    <div class="popup" id="popup">
                        <a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
                        <h3>SUSCRIBETE</h3>
                       
                        <h4>y recibe las novedades.</h4>
                        <form action="">
                            <div class="contenedor-inputs">
                                <input type="text" placeholder="Nombre"/>
                                <input type="email" placeholder="Correo"/>
                            </div>
                            <input type="submit" class="btn-submit" value="Suscribirse"/>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
