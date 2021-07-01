import React, {useEffect, useState} from 'react'
import { Dropdown } from 'react-bootstrap';


import axios from "axios";

export const ElegirCine = () =>{
    const [Localidades, setLocalidades] = useState([]);
    
    useEffect(() => {
        const data = () => {
          axios
            //.get("https://tucineya.herokuapp.com/api/users/")
            .get("http://localhost:4000/api/cines/")
            .then((res) => {
              setLocalidades(res.data);
              console.log(res.data);
            });
          //setLocalidades(dat.data[0]);
          //setInfo(dat.data[0]);
          console.log(Localidades);
        };
        data();
      }, []);

      console.log(Localidades)
      return (
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {"asd"}
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item href="asd">asd</Dropdown.Item>
          </Dropdown.Menu>
          {/* <p>{localidades[0].barrio}</p> */}
        </Dropdown>
      );
}

