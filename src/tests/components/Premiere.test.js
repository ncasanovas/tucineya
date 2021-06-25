import React from "react";
import {shallow} from 'enzyme';
import {Premiere} from "../../components/Premiere";
import { useFetchPremieres } from "../../hooks/useFetchPremieres";
jest.mock('../../hooks/useFetchPremieres');

describe('Pruebas en <Premiere />', () => {

    let wrapper;
    const title = 'Próximos Estrenos';


    test('debe de mostrar <Premiere /> correctamente', () => {

        useFetchPremieres.mockReturnValue({
            data: [],
        });

        wrapper = shallow(<Premiere />);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar correctamente Próximos Estrenos en el h1', () => {

        wrapper = shallow(<Premiere />);
        const titulo = wrapper.find('h1');
        expect(titulo.text().trim()).toBe(title);
    });

    

    test('debe de mostrarse la data de las películas de la api', () => {

        const upcoming = [{
            id: 'ABC',
            url: 'https://localhost/example.jpg',
            title: 'Scary Movie'
        },
        {
            id: '123',
            url: 'https://localhost/example.jpg',
            title: 'Scary Movie 2'
        }]

        useFetchPremieres.mockReturnValue({
            data: upcoming,
        });

        wrapper = shallow(<Premiere />);

        expect(wrapper).toMatchSnapshot();
       
        expect(wrapper.find('PremiereItem').length).toBe(upcoming.length);
    });
    

});