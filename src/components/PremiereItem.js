import React from "react";
import PropTypes from 'prop-types';

export const PremiereItem = ({ title, url, video}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img id="posters" src={`https://image.tmdb.org/t/p/w500${url}`} alt={title} />
            
         
        </div>
    )
}

PremiereItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
}
