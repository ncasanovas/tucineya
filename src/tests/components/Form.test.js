import React from "react";
import {shallow} from 'enzyme';
import {Form} from "../../components/Form";



describe('Pruebas en <Form />', () => {

    let wrapper;
    

    test('debe de mostrarse correctamente', () => {

        wrapper = shallow(<Form />);
        expect(wrapper).toMatchSnapshot();

    });
    
});