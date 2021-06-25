import React from "react";
import {shallow} from 'enzyme';
import {Registro} from "../../components/Registro";


describe('Pruebas en <Registro />', () => {

    const wrapper = shallow(<Registro />);
   

    test('debe de mostrarse correctamente', () => {
  
        expect(wrapper).toMatchSnapshot();

    });

  test('debe de tener un párrafo con el título FORMULARIO DE REGISTRO', () => {

      const title = 'FORMULARIO DE REGISTRO';

      const p = wrapper.find('p').at(0);
      expect(p.text().trim()).toBe(title);
  });

  test('debe de tener un párrafo que diga DATOS PERSONALES', () => {

    const title = 'DATOS PERSONALES';

    const p = wrapper.find('p').last();
 
    expect(p.text().trim()).toBe(title);
  });

  
  test('debe de tener los primeros 6 inputs', () => {

    const col = wrapper.find('.form-group').childAt(0);
 
    expect(col.children().length).toEqual(6);
  });

  test('debe de tener los 4 inputs restantes y el button', () => {

    const col = wrapper.find('.form-group').childAt(1);
    const button = wrapper.find('button');

    expect(col.children().length).toEqual(5);
    expect(col.children().last()).toEqual(button);
  });
});