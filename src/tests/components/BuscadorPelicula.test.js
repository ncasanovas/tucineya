import React, {useContext} from "react";
import {mount} from 'enzyme';
import {BuscadorPelicula} from "../../components/BuscadorPelicula";
import { MovieContext } from "../../components/MovieContext";
import { AuthContext } from "../../auth/AuthContext";
import axios from "axios";


describe('Pruebas en <BuscadorPelicula />', () => {
    
    const dispatch = jest.fn();

    const setMovies = jest.fn();

      
    const wrapper = mount(

        <AuthContext.Provider value={{dispatch}}>
            <MovieContext.Provider value={{setMovies}}>
                <BuscadorPelicula />
            </MovieContext.Provider>
        </AuthContext.Provider>

    )

    test('Debe de mostrar <BuscadorPelicula /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar correctamente Bienvenido cuando el usuario ingresa', () => {
        
        const title = "Bienvenido !";
        const titulo = wrapper.find('h4');
        expect(titulo.text().trim()).toBe(title);
    });

    test('Debe de mostrar correctamente el botón Cerrar Sesión', () => {
        
        const title = "Cerrar Sesión";
        const titulo = wrapper.find('button').first();
        expect(titulo.text().trim()).toBe(title);
    });

    test('Debe de mostrar correctamente el botón Buscar', () => {
       
        const title = "Buscar";
        const titulo = wrapper.find('button').at(1);
        expect(titulo.text().trim()).toBe(title);
    });
    
    test("Debe mostrar los cines ", async () => {
        jest.setTimeout(30000);
        await axios.get("https://tucineya.herokuapp.com/api/cines/").then((res) => {
        expect(res.data).not.toEqual([[]]);
        expect(typeof res.data.length).toBe("number");
        });
    });

     
   /* test("Debe de buscar la película ", async () => {

        const inputValue = 'Avengers';
        jest.setTimeout(30000);
        await axios.get(`https://tucineya.herokuapp.com/api/movies/${inputValue}`).then((res) => {
        expect(res.data).not.toEqual([[]]);
        expect(typeof res.data.length).toBe("number");
        });
    });*/

});