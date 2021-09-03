import React from "react";
import { mount, shallow } from "enzyme";

import { MovieContext } from "../../components/MovieContext";
import { BuscadorPelicula } from "../../components/BuscadorPelicula";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import axios from "axios";

describe("Tests en componente BuscadorPelicula.js", () => {
  const movieTest = {
    nombrePelicula: "MovieTest",
    posterPelicula: "http://demo.test.com",
    sinopsis: "Pelicula de prueba",
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
    },
  };

  //Se hacen 2 providers por tener en uno para el dispatch del login y el otro para manejar la pelicula buscada
  let wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MovieContext.Provider value={movieTest}>
        <BuscadorPelicula />
      </MovieContext.Provider>
    </AuthContext.Provider>
  );

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar los cines de la base de datos ", async () => {
    // Hace la peticion a la base de datos y esperaría que no regrese un resultado vacío
    jest.setTimeout(5000);
    await axios.get("https://tucineya.herokuapp.com/api/cines/").then((res) => {
      expect(res.data).not.toEqual([[]]);
      expect(typeof res.data.length).toBe("number");
    });
    expect(wrapper.find("#IdDropdown").update()).toHaveLength(1);
  });

  test("Debe mostrar las peliculas de la base de datos, según lo que busque el usuario", async () => {
    // Hace la peticion a la base de datos y esperaría que no regrese un resultado vacío
    const inputValue = "Kong";
    jest.setTimeout(5000);

    await axios
      .get(`https://tucineya.herokuapp.com/api/movies/${inputValue}`)
      .then((res) => {
        expect(res.data).not.toEqual([[]]);
      });
  });
});
