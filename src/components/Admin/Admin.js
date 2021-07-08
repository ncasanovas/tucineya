import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

import { AdminMovies } from "./AdminMovies";
import { AdminUsers } from "./AdminUsers";

export const Admin = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace("./");
  };

  return (
    <div className="container-fluid row">
      <div className="d-flex justify-content-end">
        <button className="nav-item nav-link btn white-text" onClick={handleLogout}>
        Cerrar Sesión
        </button>
      </div>
      <div className="col-sm-7 col-md-3 col-lg-3">
        <h4 className="mb-4 white-text">Lista de usuarios</h4>
        <AdminUsers />
      </div>
      <div className="col-sm-12 col-md-9 col-lg-9">
        <h4 className="mb-4 white-text">Peliculas</h4>
        <AdminMovies />
      </div>
    </div>
  );
};

export default Admin;
