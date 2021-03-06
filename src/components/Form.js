import React, { useContext, useState } from "react";
import axios from "axios";
import { HashRouter, Link, useHistory } from "react-router-dom";
import { types } from "../types/types";

import { AuthContext } from "../auth/AuthContext";
import { Suscribirse } from "./Suscribirse";

export const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    await axios
      .post("https://tucineya.herokuapp.com/api/login/", user)
      /* .post("http://localhost:4000/api/login", user) */
      .then((res) => {
        setUser({
          email: "",
          password: "",
        });

        console.log(res.data);
        if (res.data.admin) {
          dispatch({
            type: types.admin,
            payload: {
              token: res.data.username,
            },
          });
          history.replace("./admin");
        } else if (res.data.encontrado) {
          localStorage.setItem("usuario", res.data.username);
          localStorage.setItem("email", res.data.email);
          dispatch({
            type: types.login,
            payload: {
              token: res.data.username,
            },
          });
          history.replace("./buscarPelicula");
        } else {
          alert(res.data.message);
          //console.log(history);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    //alert(res.data.message);
  };

  return (
    <>
      <div>
        <div className="row justify-content-center">
          <form onSubmit={onSubmit} className="py-3 row justify-content-center">
            <div className="form-group row col-lg-6">
              <label htmlFor="fname" className="white-text">
                Email:
              </label>
              <input
                type="email"
                id="fname"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={onChange}
                required
              />
              <label htmlFor="lname" className="white-text">
                Contrase??a:
              </label>
              <input
                type="password"
                id="lname"
                className="form-control mb-3"
                name="password"
                placeholder="Contrase??a"
                onChange={onChange}
                required
              />
            </div>
            <div className="btn-sm ">
              <button type="submit" className="btn btn-primary mb-3">
                Ingresar
              </button>
            </div>
          </form>
          <p className="white-text">??Todav??a no te registraste?</p>
          <div className="btn-sm">
            <HashRouter>
              <Link to="/registro" className="btn btn-success">
                Registrarse
              </Link>
            </HashRouter>
          </div>
          <Suscribirse />
        </div>
      </div>
    </>
  );
};
