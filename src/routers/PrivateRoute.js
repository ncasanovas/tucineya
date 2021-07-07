import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router";

export const PrivateRoute = ({
  isAuthenticated,
  admin,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PrivateRoute.protoTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
