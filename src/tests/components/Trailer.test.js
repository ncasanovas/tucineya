import React from "react";
import "@testing-library/jest-dom";
import { Trailer } from "../../components/Trailer";
import { shallow } from "enzyme";

describe("Pruebas en componente <Trailer />", () => {
    const movieTest = {
        title: "MovieTest",
        poster_path: "12345",
        vote_average: "50",
        release_date: "2020",
    };

    const wrapper = shallow(<Trailer movie={movieTest} />);

    test("Mostrar correctamente el componente <Trailer /> ", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("El botón debe tener la palabra Trailer", () => {

        const title = "Trailer";

        const button = wrapper.find("Button").at(0);
        expect(button.text().trim()).toBe(title);
    });

    test("Debe de mostrar el modal al hacer click al botón Trailer", () => {
        wrapper.find("Button").at(0).simulate("click");
        expect(wrapper.find("Modal").prop("show")).toBe(true);
    });
    
    test("Debe cerrar el modal", () => {
        expect(
            wrapper.find("Button").at(0).simulate("click").prop("active")
        ).toBe(false);
    });


});