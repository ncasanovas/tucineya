import { useState, useEffect } from 'react';
import { getPremieres } from '../helpers/getPremieres';


export const useFetchPremieres = (estrenos) => {

    const [state, setstate] = useState({
        data: [],
    });

    useEffect(() => {
        
        getPremieres(estrenos)
            //Tenemos las imágenes
            .then(premieres => {
                //Ponemos el timeout intencional para hacerlo mas lento
               //setTimeout(() => {
                   //Cuando tenemos la data se llama al setState. Éste cambia la información. Va a disparar una renderización en el componente GifGrid.
                    setstate({
                        data: premieres,
                });
               //}, 1500);
            })
    }, [estrenos]);

    

    return state; 
}