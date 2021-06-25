import React from "react";
import {shallow} from 'enzyme';
import {Premiere} from "../../components/Premiere";

describe('Pruebas en <Premiere />', () => {

    let wrapper;
    const title = 'Próximos Estrenos';


    test('debe de mostrarse correctamente', () => {

        wrapper = shallow(<Premiere />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar correctamente Próximos Estrenos en el h1', () => {

        const titulo = wrapper.find('h1');
        expect(titulo.text().trim()).toBe(title);
    });

   /* test('debe de tener el iframe con la url correspondiente', () => {

        const domain = 'https://www.youtube.com/embed/XEMwSdne6UE';
        const iframe = wrapper.find('iframe');
      
        expect(iframe.prop('src')).toBe(domain);
       
    });*/
    
 
});