import React from "react";
import { Form } from "./Form";
import { Premiere } from "./Premiere";

export const Home = () => {
  return (
    <div>
      <div className="row ">
        <div className="col">
          <Form />
        </div>
        <div className="col premiere">
          <Premiere />
          <div className="mb-3">
            <button type="button" className="btn btn-primary ">
              Ver Catálogo de Películas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
