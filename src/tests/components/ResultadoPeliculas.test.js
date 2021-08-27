import React, { useContext } from "react";
import "@testing-library/jest-dom";
import { ResultadoPeliculas } from "../../components/ResultadoPeliculas";
import { MovieContext } from "../../components/MovieContext";
import { mount } from "enzyme";
import axios from "axios";

describe("Pruebas en componente <ResultadoPeliculas />", () => {

    const movies = [ {
      idCine: 23,
      idNombrePelicula: "Titanic"
    }]

    const setMovies = jest.fn();

    const wrapper = mount(
        <MovieContext.Provider value={{ movies }} >
            <ResultadoPeliculas value={{setMovies}} />
        </MovieContext.Provider>
    );

    test("Debe de mostrar <ResultadoPeliculas /> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

   /* test("Debe de mostrar el compente Trailer", () => {
        const trailer = wrapper.find("Trailer").at(0);
        expect(trailer).toBe(Trailer);
    });*/

    /*test("Debe mostrar la película seleccionada ", async () => {
        jest.setTimeout(30000);
        await axios.post("https://tucineya.herokuapp.com/api/cines/sala/", {
              movies
            })
            .then((res) => {
                expect(res.data).not.toEqual([[]]);
                expect(typeof res.data.length).toBe("number");
            });
    });*/

});
