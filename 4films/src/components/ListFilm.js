import React, { useEffect, useState } from "react";

const ListFilm = ({ data }) => {
  const renderListFilm = () => {
    return data.map((item) => {
      return (
        <div key={item.nameEng} className="film_container">
          <div className="film_item">
            <img src={item.imgLink} />
            <div className="layer">
              <p>{item.ageSpecific}</p>
              <button className="btn">mua vé</button>
            </div>
            <p>{item.nameEng}</p>
            <p>{item.nameVie}</p>
          </div>
        </div>
      );
    });
  };

  return <div className="listFilm">{renderListFilm()}</div>;
};

export default ListFilm;

// Flux architecture
