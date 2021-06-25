import React from "react";
import PropTypes from "prop-types";

export const PremiereItem = ({ title, url }) => {
  return (
    <div className="card card-poster animate__animated animate__fadeIn">
      <p id="title-premiere">{title}</p>
      <img
        id="posters-premiere"
        src={`https://image.tmdb.org/t/p/w500${url}`}
        alt={title}
      />
    </div>
  );
};

PremiereItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
