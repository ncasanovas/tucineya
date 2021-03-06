import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useHistory, HashRouter, Link } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import { MovieContext } from "./MovieContext";

export const Butacas = () => {
  const asientosFila = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const filas = ["1", "2", "3", "4", "5", "6", "7"];
  const [butacaElegida, setButacaElegida] = useState([]);
  const [butacasConfirmadas, setButacasConfirmadas] = useState([]);
  const [confirmar, setConfirmar] = useState(false);
  const [precioSala, setPrecioSala] = useState(0);
  const [precioTotalSala, setPrecioTotalSala] = useState(0);
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const { idSala, setIdSala } = useContext(MovieContext);

  useEffect(async () => {
<<<<<<< HEAD
    setPrecioSala(
      JSON.parse(sessionStorage.getItem("Precio")) ||
        JSON.parse(sessionStorage.getItem("Pelicula")).precioSala
    );
    setIdSala(JSON.parse(sessionStorage.getItem("Pelicula")).idNumeroSala);

    /* setButacasConfirmadas(
      JSON.parse(sessionStorage.getItem("Pelicula")).butacas.split(",")
    ); */
    /* 
    await axios
      //.post(`http://localhost:4000/api/sala/${idSala}`)
      .post(`https://tucineya.herokuapp.com/api/sala/${idSala}`)
      .then((res) => {
        setPrecioSala(res.data.precio); //Está peticion me trae el precio de la sala
        sessionStorage.setItem("Precio", res.data.precio);
      });
 */
    await axios
      /* .get(
        `http://localhost:4000/api/butacas/${
          JSON.parse(sessionStorage.getItem("Pelicula")).idNumeroSala
        }`
      ) */
      .get(
        `https://tucineya.herokuapp.com/api/butacas/${
          JSON.parse(sessionStorage.getItem("Pelicula")).idNumeroSala
        }`
      )
      .then((res) => {
        //console.log(res.data[0][0].butacas);
        setButacasConfirmadas(res.data[0][0].butacas.split(","));
        //console.log(res.data[0][0].butacas.split(",").sort());
      });
=======
    if (idSala !== null) {
      setButacasConfirmadas(butacas.split(","));
        await axios
        //.get(`http://localhost:4000/api/butacas/${idSala}`)
        .get(`https://tucineya.herokuapp.com/api/butacas/${idSala}`)
        .then((res) => {
          console.log(res);
          if (res.data !== null) {
            if (
              res.data[0][0].butacas === "" ||
              res.data[0][0].butacas === null
            ) {
              localStorage.setItem("butacas", "");
              setButacasConfirmadas(localStorage.getItem("butacas"));
            } else {
              let butacas = res.data[0][0].butacas.split(",");
              localStorage.setItem("butacas", butacas);
              setButacasConfirmadas(butacas);
            }
          } else {
            setButacasConfirmadas(localStorage.getItem("butacas"));
          }
        }); 
      await axios
        //.post(`http://localhost:4000/api/sala/${idSala}`)
        .post(`https://tucineya.herokuapp.com/api/sala/${idSala}`)
        .then((res) => {
          console.log(res.data.precio);
          setPrecioSala(res.data.precio); //Está peticion me trae el precio de la sala
        });
    }
>>>>>>> 56848fc323e4fbb8d8ddab030471eebc7a5dfb0f
  }, [confirmar]);

  const seleccionarButaca = (fila, asiento) => {
    if (butacaElegida.includes(fila + asiento)) {
      // includes busca si el asiento ya está en el array "butacaElegida" devuelve true
      let index = butacaElegida.indexOf(fila + asiento); // Guardo el indice en donde esté la butaca
      butacaElegida.splice(index, 1); // Y la borro del array segun el indice que encontró, el segundo argumento es para que borre solo ese registro, que borre 1 solo indice apenas en cuentre coincidencias
      setButacaElegida([...butacaElegida]); // setea las butacas con el array y ya sin la que borramos
      setPrecioTotalSala(precioTotalSala - precioSala); //Seteo el precio total restando el total y el precio de sala cuando deseleccione una butaca disponible
    } else {
      setButacaElegida([...butacaElegida, fila + asiento]); // setea las butacas seleccionadas si no está en el array de butacaElegida
      setPrecioTotalSala(precioTotalSala + precioSala); //Seteo el precio total sumando el total y el precio de sala cuando seleccione una butaca disponible
    }
  };

  const confirmarSeleccion = async () => {
    let movie = JSON.parse(sessionStorage.getItem("Pelicula"));
    //console.log(butacaElegida);
    sessionStorage.setItem("butacasElegidas", butacaElegida);
    sessionStorage.setItem("precioTotal", precioTotalSala);
    await axios
      /* .post("http://localhost:4000/checkout", { */
      .post("https://tucineya.herokuapp.com/checkout", {
        cantButacas: butacaElegida.length,
        precio: precioSala,
        pelicula: movie,
      })
      .then(async (res) => {
        if (butacaElegida.length !== 0) {
          await axios
            .post("https://tucineya.herokuapp.com/api/butacas", {
              /* .post("http://localhost:4000/api/butacas", { */
              butacas: butacaElegida,
              idSala: idSala,
            })
            .then(() => {
              window.location = `${res.data.link}`;
              //setButacaElegida([]);
              setConfirmar(!confirmar);
              //setPrecioTotalSala(0); //Seteo el precio total a 0 para que no siga sumando cuando seleccione más butacas
            });
        }
      });
    if (butacaElegida.length !== 0) {
      await axios
        .post("https://tucineya.herokuapp.com/api/butacas", {
        //.post("http://localhost:4000/api/butacas", {
          butacas: butacaElegida,
          idSala: idSala,
        })
        .then(() => {
          setButacaElegida([]);
          setConfirmar(!confirmar);
          setPrecioTotalSala(0); //Seteo el precio total a 0 para que no siga sumando cuando seleccione más butacas
        });
    }
  };

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    sessionStorage.clear();
    history.replace("./");
  };

  return (
    <div className="row">
      <div className="d-flex justify-content-end">
        <HashRouter>
          <Link
            className="col-2 align-items-center"
            onClick={() => {
              sessionStorage.removeItem("Pelicula");
              sessionStorage.removeItem("Peliculas");
            }}
            to="/buscarPelicula"
          >
            Atras
          </Link>
        </HashRouter>
        <button
          className="nav-item nav-link btn white-text"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>

      <div className="col">
        <h1 className="text-white">
          {JSON.parse(sessionStorage.getItem("Pelicula")).idNombrePelicula[0]}
        </h1>
        <img
          src={JSON.parse(sessionStorage.getItem("Pelicula")).posterPelicula}
          alt={
            JSON.parse(sessionStorage.getItem("Pelicula")).idNombrePelicula[0]
          }
        />
      </div>

      <div className="col">
        <ul className="showcase">
          <li>
            <div className="seat"></div>
            <small>Disponible</small>
          </li>
          <li>
            <div className="seat selected"></div>
            <small>Seleccionado</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>Ocupado</small>
          </li>
        </ul>

        <div className="container ">
          <div className="screen"></div>
          <div className="row">
            {filas.map((fila, j) => {
              return (
                <div className="row" key={j} value={fila}>
                  {asientosFila.map((asiento, i) => {
                    return (
                      <div
                        className={
                          butacasConfirmadas.includes(fila + asiento)
                            ? "seat occupied"
                            : butacaElegida.includes(fila + asiento)
                            ? "seat selected"
                            : "seat"
                        }
                        style={
                          butacasConfirmadas.includes(fila + asiento)
                            ? { pointerEvents: "none" }
                            : null
                        }
                        disabled
                        unselectable="true"
                        key={i}
                        value={asiento}
                        onClick={() => seleccionarButaca(fila, asiento)}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => confirmarSeleccion()}
          >
            Confirmar
          </button>
        </div>

        <p className="text">
          Seleccionaste <span id="count">{butacaElegida.length}</span> asientos
          por el precio total de $<span id="total">{precioTotalSala}</span>!
        </p>
      </div>
    </div>
  );
};

