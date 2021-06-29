import React from "react";

export const Footer = () => {
  return (
    <div className="d-flex justify-content-between footer mt-auto p-2 bd-highlight row">
      <div className="col-3">
        <h3 className="title-footer">TU CINE YA</h3>
      </div>
      <div className="col-3">
        <img className="icon" src="instagram.png" alt="Logo Instagram"></img>
      </div>
      <div className="col-3">
        <img className="icon" src="facebook.png" alt="Logo Facebook"></img>
      </div>
      <div className="col-3">
        <img className="icon" src="twitter.png" alt="Logo Twitter"></img>
      </div>
    </div>
  );
};
