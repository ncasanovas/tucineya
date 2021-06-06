import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { HashRouter, Link } from "react-router-dom";

import { AdminMovies } from "./AdminMovies";
import { MoviesContext } from "../MoviesContext";
import { AdminUsers } from "./AdminUsers";

export const Admin = () => {
  const [users, setUsers] = useState();

  const { moviesContext, setMoviesContext } = useContext(MoviesContext);

  useEffect(() => {
    const data = async () => {
      await axios
        //.get("https://tucineya.herokuapp.com/api/users/")
        .get("http://localhost:4000/api/users/")
        .then((res) => {
          setUsers(res.data[0]);
        });
    };
    const datamovies = async () => {
      await axios
        //.get("https://tucineya.herokuapp.com/api/movies/")
        .get("http://localhost:4000/api/movies/")
        .then((res) => {
          setMoviesContext(res.data[0]);
        });
    };
    data();
    datamovies();
  }, [moviesContext]);

  return (
    <div className="container-fluid row">
      <div className="d-flex justify-content-end">
        <HashRouter>
          <Link to="/" className="col-2">
            Atras
          </Link>
        </HashRouter>
      </div>
      <div className="col-sm-7 col-md-3 col-lg-3">
        <h4 className="mb-4">Lista de usuarios</h4>
        <AdminUsers users={users} />
      </div>
      <div className="col-sm-12 col-md-9 col-lg-9">
        <h4 className="mb-4">Peliculas</h4>
        <AdminMovies />
      </div>
    </div>
  );
};

export default Admin;
