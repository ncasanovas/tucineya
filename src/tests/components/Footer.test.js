import React from "react";
import {shallow} from 'enzyme';
import {Footer} from "../../components/Footer";
import instagram from "./../../../public/instagram.png";
import facebook from "./../../../public/facebook.png";
import twitter from "./../../../public/twitter.png";


describe('Pruebas en <Footer />', () => {

    let wrapper;
    const title = 'TU CINE YA';


    test('debe de mostrarse correctamente', () => {

        wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar correctamente TU CINE YA en el h3', () => {

        const titulo = wrapper.find('h3');
        expect(titulo.text().trim()).toBe(title);
    });

    test('debe de tener la imagen instagram igual a la url', () => {

        const img = wrapper.find('img').first();
        expect(img.prop('src')).toBe(instagram);
    });

    test('debe de tener la imagen facebook igual a la url', () => {

        const img = wrapper.find('img').at(1);
        expect(img.prop('src')).toBe(facebook);
    });
    
    test('debe de tener la imagen twitter igual a la url', () => {

        const img = wrapper.find('img').last();
        expect(img.prop('src')).toBe(twitter);
    });
});