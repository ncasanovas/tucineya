import React from "react";
import { useFetchPremieres } from "../hooks/useFetchPremieres";
import { PremiereItem } from "./PremiereItem";

export const Premiere = (estrenos) => {
  const { data: movies } = useFetchPremieres(estrenos);

  return (
    <div id="premiere" className="mb-3">
      <h1>Próximos Estrenos</h1>
      <div>
        {movies.length != [] ? (
          movies.map((movie) => <PremiereItem key={movie.id} {...movie} />)
        ) : (
          <h4 className="mt-5">No se encontraron próximos estrenos</h4>
        )}
      </div>
    </div>
  );
};
