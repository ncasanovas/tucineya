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
  const { movies, idSala, butacas } = useContext(MovieContext);

  useEffect(async () => {
    if (idSala !== null) {
      //setButacasConfirmadas(butacas.split(","));
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
    history.replace("./");
  };

  return (
    <div className="row">
      <div className="d-flex justify-content-end">
        <HashRouter>
          <Link
            className="col-2 align-items-center"
            onClick={() => {
              localStorage.removeItem("butacas");
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
      {movies === [] ? null : (
        <div className="col">
          <h1 className="text-white">{movies[0].idNombrePelicula}</h1>
          <img
            src={movies[0].posterPelicula}
            alt={movies[0].idNombrePelicula}
          />
        </div>
      )}
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

