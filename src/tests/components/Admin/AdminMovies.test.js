import React, { useState, useContext } from "react";
import "@testing-library/jest-dom";
import { AdminMovies } from "../../../components/Admin/AdminMovies";
import { Admin } from "../../../components/Admin/Admin";
import { mount, shallow } from "enzyme";
import { MoviesContext } from "../../../components/MoviesContext";
import axios from "axios";

describe("Pruebas en componente <AdminMovies />", () => {
  const movieTest = {
    nombrePelicula: "MovieTest",
    posterPelicula: "http://demo.test.com",
    sinopsis: "Pelicula de prueba",
  };
  let wrapper = mount(
    <MoviesContext.Provider value={{ movieTest }}>
      <AdminMovies />
    </MoviesContext.Provider>
  );

  test("Debe mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe traer las peliculas de la base de datos", async () => {
    await axios.get("http://localhost:4000/api/movies/").then((res) => {
      expect(res.data).not.toEqual([[]]);
      expect(typeof res.data.length).toBe("number");
    });
  });
});
