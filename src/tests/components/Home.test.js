import React from "react";
import {shallow} from 'enzyme';
import {Home} from "../../components/Home";


describe('Pruebas en <Home />', () => {

    let wrapper;

    test('debe de mostrarse correctamente', () => {

        wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();

    });

    
});