import React, { useContext } from "react";
import { mount } from "enzyme";
import { Butacas } from "../../components/Butacas";
import { AuthContext } from "../../auth/AuthContext";
import { MovieContext } from "../../components/MovieContext";
import axios from "axios";

describe('Pruebas en <Butacas />', () => {

    const dispatch = jest.fn();

    const setMovies = jest.fn();

    const setButacasConfirmadas = jest.fn();

    const butacasConfirmadas = 1;

    const wrapper = mount(
  
            <AuthContext.Provider value={{dispatch}}>
                <MovieContext.Provider value={{setMovies}}>
                    <Butacas />
                </MovieContext.Provider>
            </AuthContext.Provider>

    )
    
    test('Debe de mostrar <Butacas /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de mostrar correctamente la palabra Disponible', () => {
       
        const title = "Disponible";
        const titulo = wrapper.find('small').at(0);
        expect(titulo.text().trim()).toBe(title);
    });

    test('Debe de mostrar correctamente la palabra Seleccionado', () => {
       
        const title = "Seleccionado";
        const titulo = wrapper.find('small').at(1);
        expect(titulo.text().trim()).toBe(title);
    });

    test('Debe de mostrar correctamente la palabra Ocupado', () => {
       
        const title = "Ocupado";
        const titulo = wrapper.find('small').at(2);
        expect(titulo.text().trim()).toBe(title);
    });

    test('Debe de mostrar el botón Confirmar', () => {
       
        const title = "Confirmar";
        const titulo = wrapper.find('button').last();
        expect(titulo.text().trim()).toBe(title);
    });

    /*test("Debe mostrar las butacas de la sala ", async () => {

        const idSala = 1;

        const fila = 'A';
        const asiento = '1';

        const butacasConfirmadas = fila + asiento;

        jest.setTimeout(30000);
        await axios.get(`https://tucineya.herokuapp.com/api/butacas/${idSala}`).then((res) => {
        expect(butacasConfirmadas).toBe('A1');
        expect(res.data).not.toEqual([[]]);
        expect(typeof res.data.length).toBe("number");
        });
    });*/

   /* test("Debe confirmar selección de butaca ", async () => {
        jest.setTimeout(30000);
        await axios
            .post("https://tucineya.herokuapp.com/api/butacas", {
                butacas: 'A2',
                idSala: '1',
            })
            .then((res) => {
                expect(res.data).not.toEqual([[]]);
                expect(typeof res.data.length).toBe("number");
            });
    });*/
});
