import React, { useState } from "react";
import axios from "axios";

export const Registro = () => {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    username: "",
    password: "",
    rePassword: "",
    celular: "",
    direccion: "",
    piso: "",
    dpto: "",
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
    await axios.post("https://tucineya.herokuapp.com/api/register/", user);
    setUser({
      nombre: "",
      apellido: "",
      email: "",
      username: "",
      password: "",
      rePassword: "",
      celular: "",
      direccion: "",
      piso: "",
      dpto: "",
    });
  };

  return (
    <>
      <div className="mb-3 row">
        <div className="justify-content-center">
          <p className="fs-1">FORMULARIO DE REGISTRO</p>
          <form onSubmit={onSubmit} className="px-4 py-3">
            <p>DATOS PERSONALES</p>
            <div className="form-group row">
              <div className="col">
                <input
                  type="text"
                  id="name"
                  className="form-control mb-3"
                  name="nombre"
                  placeholder="Nombre"
                  onChange={onChange}
                />
                <input
                  type="text"
                  id="surname"
                  className="form-control mb-3"
                  name="apellido"
                  placeholder="Apellido"
                  onChange={onChange}
                />
                <input
                  type="email"
                  id="email"
                  className="form-control mb-3"
                  name="email"
                  placeholder="Mail"
                  onChange={onChange}
                />
                <input
                  type="text"
                  id="username"
                  className="form-control mb-3"
                  name="username"
                  placeholder="Nombre de usuario"
                  onChange={onChange}
                />
                <input
                  type="text"
                  id="lname"
                  className="form-control mb-3"
                  name="password"
                  placeholder="Contraseña"
                  onChange={onChange}
                />
                <input
                  type="text"
                  id="lname"
                  className="form-control mb-3"
                  name="rePassword"
                  placeholder="Confirma Contraseña"
                  onChange={onChange}
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  id="celular"
                  className="form-control mb-3"
                  name="celular"
                  placeholder="Celular"
                  onChange={onChange}
                />
                <input
                  type="text"
                  id="direccion"
                  className="form-control mb-3"
                  name="direccion"
                  placeholder="Dirección"
                  onChange={onChange}
                />
                <input
                  type="number"
                  id="piso"
                  className="form-control mb-3"
                  name="piso"
                  placeholder="Piso"
                  onChange={onChange}
                />
                <input
                  type="text"
                  id="dpto"
                  className="form-control mb-3"
                  name="dpto"
                  placeholder="Dpto"
                  onChange={onChange}
                />
                <button type="submit" className="btn btn-success mb-3">
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
