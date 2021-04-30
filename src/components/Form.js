import React,  { Fragment } from 'react';

export const Form = () => {
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
        </Fragment>
    )
}
