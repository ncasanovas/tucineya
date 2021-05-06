import React from "react";

export const Premiere = () => {
  return (
    <div id="premiere" className="mb-3">
      <h1>Próximos Estrenos</h1>
      <div className="mb-3 d-flex justify-content-center w-100">
        <img
          className="premiere"
          src="https://i.pinimg.com/originals/f0/6f/f7/f06ff76b83cabc89b7ab475bf36691b6.jpg"
          alt="poster"
        />
      </div>
      <h2>Trailer:</h2>
      <iframe
        className="d-flex justify-content-center w-100 p-2 h-100 d-inline-block"
        src="https://www.youtube.com/embed/XEMwSdne6UE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};
