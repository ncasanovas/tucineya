import React,  { Fragment } from 'react';

export const Form = () => {
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
            <div class="contenedor">
                <article>
                    <h1>Ventana Emergente Animada</h1>
                    <button id="btn-abrir-popup" class="btn-abrir-popup">Abrir Ventana Emergente</button>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum, tortor ut commodo elementum, felis dui pharetra arcu, id vulputate neque orci ut velit. Vestibulum facilisis mauris sapien, ut rutrum lacus sollicitudin eu. Curabitur odio ligula, eleifend sodales nisl et, feugiat mattis sapien. Nulla commodo gravida est a lacinia. Fusce cursus eleifend dui at tincidunt. Aliquam eu metus odio. Morbi metus erat, mattis sit amet ultricies ullamcorper, dignissim nec ante. Nulla congue purus quis interdum tincidunt. Nam at libero leo. Nunc dignissim auctor turpis sit amet ornare. Duis vulputate faucibus sem id dignissim. Vivamus sed orci odio. Maecenas nec dapibus mauris. Pellentesque a massa et lectus volutpat gravida eget id neque.
                    </p>
                    <p>
                        Nunc eleifend venenatis est vel finibus. Mauris vel arcu sit amet risus vulputate gravida a pulvinar felis. In nulla turpis, dignissim ac orci sit amet, suscipit luctus eros. Ut luctus blandit mi. Donec lacinia vehicula fringilla. Vivamus nec ligula ut dui vestibulum iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ac sem in mi pulvinar eleifend vitae in sapien. Mauris vel dui nibh. Maecenas fermentum ante cursus nisi tincidunt mattis. Phasellus quis sapien sollicitudin, tempor diam nec, ullamcorper sapien.
                    </p>
                    <p>
                        Fusce tempor arcu nec ante congue, nec tempor ipsum eleifend. Pellentesque consequat ac ipsum et euismod. Donec posuere massa in felis scelerisque feugiat. Mauris id arcu enim. Curabitur pulvinar elit nec turpis mollis tincidunt. Curabitur lectus elit, scelerisque nec facilisis ac, semper vel libero. Pellentesque efficitur velit nunc, eu vehicula est pretium quis. Nunc urna tellus, tempus vitae eros eget, efficitur molestie lorem. Phasellus ut facilisis libero. Mauris laoreet libero diam, a tempor risus pharetra eget. Mauris nibh urna, accumsan vel accumsan euismod, lobortis nec lectus. Mauris elementum urna vel feugiat ultrices. Nulla sodales nisl sit amet ante fermentum, sit amet porttitor diam sollicitudin. Pellentesque ut pellentesque turpis. In rutrum augue dui, vel molestie ipsum pulvinar facilisis.
                    </p>
                </article>

                <div class="overlay" id="overlay">
                    <div class="popup" id="popup">
                        <a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
                        <h3>SUSCRIBETE</h3>
                        <h4>y recibe un cupon de descuento.</h4>
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
