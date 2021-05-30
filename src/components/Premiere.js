import React from "react";
import { useFetchPremieres } from '../hooks/useFetchPremieres';
import { PremiereItem } from './PremiereItem';

export const Premiere = (estrenos) => {

  const {data:movies} = useFetchPremieres(estrenos);
  
  return (
    <div id="premiere" className="mb-3">
      <h1>Próximos Estrenos</h1>
      { movies.map(movie => (
          <PremiereItem
            key={movie.id}
              {...movie}                       
          />                 
        ))              
      }           
    </div>
  );
};

