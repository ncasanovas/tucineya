import React from "react";

import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import axios from "axios";

import { AdminUsers } from "../../../components/Admin/AdminUsers";

describe("Pruebas en <AdminUser/>", () => {
  const userTest = [
    {
      nombre: "test",
      apellido: "test",
      mail: "test@test.com",
      username: "test",
    },
  ];
  const wrapper = shallow(<AdminUsers user={userTest} />);

  test("Debe mostrarse correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar los usuarios de la base de datos ", async () => {
    jest.setTimeout(30000);
    await axios.get("https://tucineya.herokuapp.com/api/users/").then((res) => {
      expect(res.data).not.toEqual([[]]);
      expect(typeof res.data.length).toBe("number");
    });
  });
});
