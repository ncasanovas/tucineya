import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { DeleteUser } from "../../../components/Admin/DeleteUser";

describe("Pruebas en componente <DeleteUser /> ", () => {
  const userTest = [
    {
      nombre: "test",
      apellido: "test",
      mail: "test@test.com",
      username: "test",
    },
  ];

  const wrapper = shallow(<DeleteUser deleteUsers={userTest} />);
  test("Mostrar componente correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el modal", () => {
    wrapper.find("Button").at(0).simulate("click"); //Boton de eliminar y simulacion de click

    expect(wrapper.find("Modal").prop("show")).toBe(true); //Si se abre el modal, la prop "show" pasa a true
  });

  test('Debe cerrar el modal al apretar el boton de "Volver"', () => {
    wrapper.find("Button").at(1).simulate("click"); //Boton de volver y simulacion de click

    expect(wrapper.find("Modal").prop("show")).toBe(false); //Si se cierra el modal, la prop "show" pasa a false
  });
});
