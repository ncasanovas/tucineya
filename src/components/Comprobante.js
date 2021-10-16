import React from "react";
import { useHistory, HashRouter, Link } from "react-router-dom";

export const Comprobante = () => {
  const printReceipt = () => {
    var prtContent = document.getElementById("tarjeta");
    var WinPrint = window.open(
      "",
      "",
      "left=200,top=200,width=800,height=900,toolbar=0,scrollbars=0,status=0"
    );
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  const printReceipt2 = () => {
    var prtContent = document.getElementById("tarjeta2");
    var WinPrint = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
    );
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  const { idNombrePelicula, idNumeroSala, fechaYhora, nombre } = JSON.parse(
    sessionStorage.getItem("Pelicula")
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <HashRouter>
            <Link className="col-1" to="/buscarPelicula">
              Atras
            </Link>
          </HashRouter>
          <div className="card-body" id="tarjeta2" z-index="3200">
            <h5 className="card-title">Comprobante</h5>

            <div>
              <h3>{idNombrePelicula[0]}</h3>
              <p>Sala numero:{idNumeroSala}</p>
              <p>Precio: {sessionStorage.getItem("precioTotal")}</p>
              <p>Cine: {nombre}</p>
              <p>
                Butacas elegidas:{" "}
                {JSON.stringify(sessionStorage.getItem("butacasElegidas"))}
              </p>
              <p>Fecha: {fechaYhora}</p>

              <h1>Tu Cine Ya</h1>
            </div>
          </div>
        </div>

        <button
          className="hide-on-print btn btn-primary"
          onClick={printReceipt2}
        >
          Imprimir
        </button>
      </header>
    </div>
  );
};

export default Comprobante;
