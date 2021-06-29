import { useState, useEffect } from 'react';
import { getPremieres } from '../helpers/getPremieres';


export const useFetchPremieres = (estrenos) => {

    const [state, setstate] = useState({
        data: [],
    });

    useEffect(() => {
        
        getPremieres(estrenos)
            .then(premieres => {
                setstate({
                    data: premieres,
                });
            })
    }, [estrenos]);

    return state; 
}