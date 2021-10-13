import React from "react";
import { shallow } from "enzyme";
import { MercadoPagoForm } from "../../components/MercadoPago/MercadoPagoForm";

describe("Pruebas en <MercadoPagoForm />", () => {

  let wrapper;

  test("debe de mostrarse correctamente", () => {
    wrapper = shallow(<MercadoPagoForm />);
    expect(wrapper).toMatchSnapshot();
  });
  

  test("debe de mostrar correctamente Pagar en el botón", () => {
    const title = "Pagar";
    const titulo = wrapper.find("button");
    expect(titulo.text().trim()).toBe(title);
  });
});
