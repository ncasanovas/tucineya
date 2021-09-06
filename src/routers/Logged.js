import React, { useContext, useState } from "react";
import { Switch } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { AdminRoute } from "./AdminRoute";
import { AuthContext } from "../auth/AuthContext";

import { Registro } from "../components/Registro";
import { Admin } from "../components/Admin/Admin";
import { BuscadorPelicula } from "../components/BuscadorPelicula";
import { MovieContext } from "../components/MovieContext";
import { Butacas } from "../components/Butacas";

export const Logged = () => {
  const { state } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [idCine, setIdCine] = useState();
  const [idSala, setIdSala] = useState();
  const [butacas, setButacas] = useState();

  return (
    <>
      <Switch>
        <PrivateRoute
          path="/registro"
          exact
          component={Registro}
          isAuthenticated={state.logged}
        />
        <AdminRoute
          path="/admin"
          exact
          component={Admin}
          isAuthenticated={state.logged}
          admin={state.admin}
        />
        <MovieContext.Provider
          value={{
            movies,
            setMovies,
            idSala,
            setIdSala,
            idCine,
            setIdCine,
            butacas,
            setButacas,
          }}
        >
          <PrivateRoute
            path="/buscarPelicula"
            exact
            component={BuscadorPelicula}
            isAuthenticated={state.logged}
          />
          <PrivateRoute
            path="/elegirButaca"
            exact
            component={Butacas}
            isAuthenticated={state.logged}
          />
        </MovieContext.Provider>
      </Switch>
    </>
  );
};

