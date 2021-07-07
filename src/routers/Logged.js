import React, { useContext } from "react";
import { Switch } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { AdminRoute } from "./AdminRoute";
import { AuthContext } from "../auth/AuthContext";

import { Registro } from "../components/Registro";
import { Admin } from "../components/Admin/Admin";
import { BuscadorPelicula } from "../components/BuscadorPelicula";

export const Logged = () => {
  const { state } = useContext(AuthContext);

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
        <PrivateRoute
          path="/buscarPelicula"
          exact
          component={BuscadorPelicula}
          isAuthenticated={state.logged}
        />
      </Switch>
    </>
  );
};
