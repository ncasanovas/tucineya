import React, { useState } from "react";
import { HashRouter, Link } from "react-router-dom";
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
    console.log(user.nombre);
  };

  const validar = (user) => {
    const errors = {};

    if (user.nombre.length > 15) {
      errors.nombre = "Debe contener 15 letras o menos";
    }
    
    if(!/[A-Za-z]/.test(user.nombre)) {
      errors.nombre = "No debe contener caracteres especiales ni números";
    }

    if (user.apellido.length > 20) {
      errors.apellido = "Debe contener 20 letras o menos";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
      errors.email = "Email invalido";
    }

    if (user.username.length > 10) {
      errors.username = "Debe contener 10 letras o menos";
    }

    if (!user.password) {
      errors.password = "Requerido";
    }

    if (!user.repassword) {
      errors.repassword = "Requerido";
    } else if (user.repassword !== user.password) {
      errors.repassword = "Las contraseñas deben coincidir";
    }

    if (
      parseInt(!user.celular.match(/^[0-9]{8,12}$/i)) ||
      parseInt(user.celular.match(/^[0-9]{12}$/i))
    ) {
      errors.celular = "Celular invalido";
    }

    if (!user.direccion) {
      errors.direccion = "Requerido";
    }

    if (!/^[0-9]{8,12}$/i) {
      errors.piso = "El piso debe ser numerico";
    }

    if (!/^[A-Z0-9._%+-]{1,2}/) {
      errors.dpto = "Departamento invalido";
    }

    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    if (Object.keys(validar(user)).length === 0) {
      await axios
        .post("https://tucineya.herokuapp.com/api/register/", user)
        //.post("http://localhost:4000/api/register/", user)
        .then((res) => {
          alert(res.data.message);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert(JSON.stringify(validar(user)));
    }

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
          <div className="row">
            <HashRouter>
              <Link to="/" className="col-2 align-items-center">
                Atras
              </Link>
            </HashRouter>
            <p className="fs-1 col-8">FORMULARIO DE REGISTRO</p>
          </div>
          <form onSubmit={onSubmit} className="px-4 py-3">
            <p>DATOS PERSONALES</p>
            <div className="form-group row">
              <div className="col">
                <input
                  type="text"
                  id="nombre"
                  className="form-control mb-3"
                  name="nombre"
                  placeholder="Nombre"
                  onChange={onChange}
                  required
                />
                <input
                  type="text"
                  id="apellido"
                  className="form-control mb-3"
                  name="apellido"
                  placeholder="Apellido"
                  onChange={onChange}
                  required
                />
                <input
                  type="email"
                  id="email"
                  className="form-control mb-3"
                  name="email"
                  placeholder="Mail"
                  onChange={onChange}
                  required
                />
                <input
                  type="text"
                  id="username"
                  className="form-control mb-3"
                  name="username"
                  placeholder="Nombre de usuario"
                  onChange={onChange}
                  required
                />
                <input
                  type="text"
                  id="lname"
                  className="form-control mb-3"
                  name="password"
                  placeholder="Contraseña"
                  onChange={onChange}
                  required
                />
                <input
                  type="text"
                  id="lname"
                  className="form-control mb-3"
                  name="repassword"
                  placeholder="Confirma Contraseña"
                  onChange={onChange}
                  required
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
                  required
                />
                <input
                  type="text"
                  id="direccion"
                  className="form-control mb-3"
                  name="direccion"
                  placeholder="Dirección"
                  onChange={onChange}
                  required
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
