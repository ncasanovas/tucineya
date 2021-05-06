import React from "react";

export const Header = () => {
  return (
    <div id="header" className="row">
      <div className="col-3">
        <img
          className="icons-home rounded float-start img-fluid"
          src="./3d-glasses.png"
          alt=""
        />
      </div>
      <div className="col-6 ">
        <h1 id="tucineya" className="fs-auto">
          TU CINE YA
        </h1>
      </div>
      <div className="col-3">
        <img
          className="icons-home rounded float-end img-fluid"
          src="./clapperboard.png"
          alt=""
        />
      </div>
    </div>
  );
};
