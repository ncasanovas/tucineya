import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

export const ElegirCine = ({ localidades }) => {
  const [barrio, setBarrio] = useState([]);
  const onClick = async (localidad) => {
    await axios
      //.get(`http://localhost:4000/api/cines/${localidad.idLocalidad}`)
      .get(`https://tucineya.herokuapp.com/api/cines/${localidad.idLocalidad}`)
      .then((res) => {
        setBarrio(res.data[0]);
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
      <div className="">
        <ul className="list-group list-group-flush">
          {barrio.length === 0
            ? null
            : barrio.map((barrio, i) => {
                return (
                  <li key={i} className="list-group-item">
                    {barrio.Barrio}
                    {" - "}
                    {barrio.nombre} {" , "} {barrio.ubicacion}
                  </li>
                );
              })}
        </ul>
      </div>
    </Dropdown>
  );
};
