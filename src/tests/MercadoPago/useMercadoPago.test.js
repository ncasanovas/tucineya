import React from "react";
import { shallow } from "enzyme";
import useMercadoPago, { MercadoPagoForm } from "../../hooks/useMercadoPago";
import axios from "axios";

describe("Pruebas en <useMercadoPago />", () => {

  let wrapper;

  test("debe de mostrarse correctamente", () => {
    wrapper = shallow(<useMercadoPago />);
    expect(wrapper).toMatchSnapshot();
  });

});