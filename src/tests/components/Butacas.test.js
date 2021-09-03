import React from "react";
import { mount } from "enzyme";

import { MovieContext } from "../../components/MovieContext";
import { Butacas } from "../../components/Butacas";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en Butacas.js", () => {
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

  let wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MovieContext.Provider value={movieTest}>
        <Butacas />
      </MovieContext.Provider>
    </AuthContext.Provider>
  );

  test("Debe mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  const ultimaButaca = wrapper.find("div.seat").last(); // Guardamos el último div que tenga la clase "seat"
  test("Debe seleccionar correctamente la butaca ", () => {
    //Comprobar si encuentra la última butaca que es la "K10"
    expect(ultimaButaca.prop("value")).toBe("K");
    expect(ultimaButaca.key()).toBe("10");
  });
});
