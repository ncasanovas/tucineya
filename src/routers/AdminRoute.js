import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router";

export const AdminRoute = ({
  isAuthenticated,
  admin,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated && admin ? (
          <Component {...props} />
        ) : (
          (alert("No puede ingresar al componente admin"),
          (<Redirect to="/buscarPelicula" />))
        )
      }
    />
  );
};

AdminRoute.protoTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
