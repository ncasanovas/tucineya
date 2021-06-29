import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";

import Admin from "../../../components/Admin/Admin";
import { MoviesContext } from "../../../components/MoviesContext";

describe("Pruebas en componente <Admin/>", () => {
  const movieTest = {
    nombrePelicula: "MovieTest",
    posterPelicula: "http://demo.test.com",
    sinopsis: "Pelicula de prueba",
  };

  const wrapper = mount(
    //mount sirve como reemplazo al shallow para renderizar lo que está dentro del Context.Provider
    <MoviesContext.Provider value={{ movieTest }}>
      <Admin />
    </MoviesContext.Provider>
  );

  test("debe mostrar el componente renderizado correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
