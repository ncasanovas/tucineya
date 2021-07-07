import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { SearchMovie } from "../../../components/Admin/SearchMovie";
import axios from "axios";
describe("Pruebas en componente <SearchMovie/>", () => {
  const wrapper = shallow(<SearchMovie />);

  test("Mostrar componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el modal para buscar peliculas", () => {
    wrapper.find("Button").at(0).simulate("click");
    expect(wrapper.find("Modal").prop("show")).toBe(true);
  });

  test("Debe traer las peliculas de la api externa ", async () => {
    const inputValue = "Superman";
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=350f655333437185ccf33d95346bf8e6&language=en-US&query=${inputValue}&page=1&include_adult=false`
    );
    expect(result.status).toBe(200); //200 es el código OK de la respuesta a la llamada a la api
  });

  test('Cerrar el modal al clickear en el boton "Volver" ', () => {
    wrapper.find("Button").at(2).simulate("click");
    expect(wrapper.find("Modal").prop("show")).toBe(false);
  });
});
