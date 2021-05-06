import React from "react";

export const Footer = () => {
  return (
    <div className="d-flex justify-content-between footer mt-auto p-2 bd-highlight">
      <div className="col-3">
        <h3>TU CINE YA</h3>
      </div>
      <div className="col-3">
        <img className="icon" src="../instagram.png" alt=""></img>
      </div>
      <div className="col-3">
        <img className="icon" src="../facebook.png" alt=""></img>
      </div>
      <div className="col-3">
        <img className="icon" src="../twitter.png" alt=""></img>
      </div>
    </div>
  );
};
