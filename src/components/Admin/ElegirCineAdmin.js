import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

export const ElegirCineAdmin = ({ setIdCine }) => {
  const [localidades, setLocalidades] = useState();
  const [barrio, setBarrio] = useState([]);

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

  const barrios = (barrio) => {
    setIdCine(barrio.idCine);
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
                      onClick={() => barrios(barrio)}
                      style={{ cursor: "pointer" }}
                    >
                      {barrio.Barrio}
                      {" - "}
                      {barrio.nombre}
                    </li>
                  </div>
                );
              })}
        </ul>
      </div>
    </Dropdown>
  );
};
