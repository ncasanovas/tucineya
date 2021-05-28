import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { HashRouter, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { AdminModal } from "./AdminModal";
import { AdminMovies } from "./AdminMovies";
import { MoviesContext } from "./MoviesContext";

export const Admin = () => {
  const [users, setUsers] = useState();
  const [deleteUsers, setDeleteUsers] = useState([]);

  const { setMoviesContext } = useContext(MoviesContext);

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
        //.get("https://tucineya.herokuapp.com/api/users/")
        .get("http://localhost:4000/api/movies/")
        .then((res) => {
          setMoviesContext(res.data[0]);
        });
    };
    data();
    datamovies();
  }, []);

  const onChangeCheck = (e) => {
    if (e.target.checked) {
      setDeleteUsers([...deleteUsers, e.target.value]);
    } else {
      for (let i = 0; i < deleteUsers.length; i++) {
        if (deleteUsers[i] === e.target.value) {
          deleteUsers.splice(i, 1);
          setDeleteUsers([...deleteUsers]);
        }
      }
    }
  };

  return (
    <div id="admin" className="p-3 container-fluid row">
      <div className="d-flex justify-content-end">
        <HashRouter>
          <Link to="/" className="col-2">
            Atras
          </Link>
        </HashRouter>
      </div>
      <div className="col">
        <h4 className="mb-5">Lista de usuarios</h4>
        <div className="form-check">
          {users ? (
            <ul className="border list-group text-start">
              {users.map((user, i) => {
                return (
                  <li className="list-group-item" key={i}>
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value={user.mail}
                      aria-label="..."
                      onChange={onChangeCheck}
                    />
                    {user.nombre} {user.apellido}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="spinner-border text-primary m-6" role="status">
              <span className="visually-hidden ">Loading...</span>
            </div>
          )}
        </div>
        <div>
          {users ? (
            <div>
              <AdminModal
                deleteUsers={deleteUsers}
                setDeleteUsers={setDeleteUsers}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="col">
        <h4 className="mb-5">Peliculas</h4>
        <AdminMovies />
      </div>
    </div>
  );
};

export default Admin;
