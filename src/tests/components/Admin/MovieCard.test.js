import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { MovieCard } from "../../../components/Admin/MovieCard";

describe("Pruebas en componente <MovieCard />", () => {
  const movieTest = {
    title: "MovieTest",
    poster_path: "12345",
    vote_average: "50",
    release_date: "2020",
  };

  const wrapper = shallow(<MovieCard movie={movieTest} />);
  test("Mostrar correctamente el componente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Agregar pelicula a la base de datos al hacer click", () => {
    expect(wrapper.find("Button").at(0).simulate("click").prop("active")).toBe(
      false
    );
  });
});
