import React from "react";
import {shallow} from 'enzyme';
import {Header} from "../../components/Header";
import image from "./../../../public/3d-glasses.png";
import image2 from "./../../../public/clapperboard.png";


describe('Pruebas en <Header />', () => {

    let wrapper;
    const title = 'TU CINE YA';


    test('debe de mostrarse correctamente', () => {

        wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar correctamente TU CINE YA en el h1', () => {

        const titulo = wrapper.find('h1');
        expect(titulo.text().trim()).toBe(title);
    });

    test('debe de tener la imagen izquierda igual a la url', () => {

        const img = wrapper.find('img').first();
        expect(img.prop('src')).toBe(image);
    });
    
    
    test('debe de tener la imagen derecha igual a la url', () => {

        const img = wrapper.find('img').last();
        expect(img.prop('src')).toBe(image2);
    });
});