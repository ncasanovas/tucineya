import React from "react";
import {shallow} from 'enzyme';
import {Suscribirse} from "../../components/Suscribirse";

describe('Pruebas en <Suscribirse />', () => {

    let wrapper;
    
    test('debe de mostrarse correctamente', () => {

        wrapper = shallow(<Suscribirse />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar correctamente SUSCRIBETE en el h3', () => {

        const title = "SUSCRIBETE";
        const titulo = wrapper.find('h3');
        expect(titulo.text().trim()).toBe(title);
    });
});