import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Suscribirse } from "./Suscribirse";

export const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    const res = await axios.post(
      "https://tucineya.herokuapp.com/api/login/",
      user
    );

    alert(res.data.message);

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <Fragment>
      <div>
        <div className="row justify-content-center">
          <form onSubmit={onSubmit} className="py-3 row justify-content-center">
            <div className="form-group row col-lg-6">
              <label htmlFor="fname">Email:</label>
              <input
                type="email"
                id="fname"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={onChange}
              />
              <label htmlFor="lname">Contraseña:</label>
              <input
                type="text"
                id="lname"
                className="form-control mb-3"
                name="password"
                placeholder="Contraseña"
                onChange={onChange}
              />
            </div>
            <div className="btn-sm ">
              <button type="submit" className="btn btn-primary mb-3">
                Ingresar
              </button>
            </div>
          </form>
          <p>¿Todavía no te registraste?</p>
          <div className="btn-sm">
            <Link type="submit" className="btn btn-success" to="/registro">
              Registrarse
            </Link>
          </div>
          <Suscribirse />
        </div>
      </div>
    </Fragment>
  );
};
