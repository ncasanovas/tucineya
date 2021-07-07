import React from "react";
import { shallow } from "enzyme";
import { Suscribirse } from "../../components/Suscribirse";

describe("Pruebas en <Suscribirse />", () => {
  let wrapper;

  test("debe de mostrarse correctamente", () => {
    wrapper = shallow(<Suscribirse />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el modal", () => {
    wrapper.find("Button").at(0).simulate("click"); //Boton de eliminar y simulacion de click

    expect(wrapper.find("Modal").prop("show")).toBe(true); //Si se abre el modal, la prop "show" pasa a true
  });

  test("debe de mostrar correctamente SUSCRIBETE en el titulo del modal", () => {
    const title = "Suscribite";
    const titulo = wrapper.find(".title-sub");
    expect(titulo.text().trim()).toBe(title);
  });
});
