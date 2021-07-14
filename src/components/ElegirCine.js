import React, { useContext, useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import { MovieContext } from "./MovieContext";

export const ElegirCine = () => {
  const [localidades, setLocalidades] = useState();
  const [barrio, setBarrio] = useState([]);

  const { setMovies } = useContext(MovieContext);

  useEffect(async () => {
    await axios
      //.get("http://localhost:4000/api/cines/")
      .get("https://tucineya.herokuapp.com/api/cines/")
      .then((res) => {
        setLocalidades(res.data[0]);
      });
  }, []);

  const onClick = async (localidad) => {
    await axios
      //.get(`http://localhost:4000/api/cines/${localidad.idLocalidad}`)
      .get(`https://tucineya.herokuapp.com/api/cines/${localidad.idLocalidad}`)
      .then((res) => {
        setBarrio(res.data[0]);
      });
  };

  const verPeliculas = async (barrio) => {
    await axios
      //.get(`http://localhost:4000/api/cines/peliculas/${barrio.idCine}`)
      .get(
        `https://tucineya.herokuapp.com/api/cines/peliculas/${barrio.idCine}`
      )
      .then((res) => {
        setMovies(res.data[0]);
      });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {barrio.length === 0 ? "Localidades" : barrio[0].Localidad}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {localidades === undefined
          ? null
          : localidades.map((localidad, i) => {
              return (
                <Dropdown.Item key={i} onClick={() => onClick(localidad)}>
                  {localidad.nombreLocalidad}
                </Dropdown.Item>
              );
            })}
      </Dropdown.Menu>
      <div>
        <ul className="list-group list-group-flush">
          {barrio.length === 0
            ? null
            : barrio.map((barrio, i) => {
                return (
                  <div key={i}>
                    <li
                      className="list-group-item"
                      onClick={() => verPeliculas(barrio)}
                      style={{ cursor: "pointer" }}
                    >
                      {barrio.Barrio}
                      {" - "}
                      {barrio.nombre} {" , "} {barrio.ubicacion}
                    </li>
                  </div>
                );
              })}
        </ul>
      </div>
    </Dropdown>
  );
};
