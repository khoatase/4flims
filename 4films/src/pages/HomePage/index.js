import React, { useEffect, useState } from "react";
import ListFilm from "../../components/ListFilm";
import Carousel from "../Carousel";
import "./styles/style.css";
const HomePage = () => {
  const [typeSelect, setTypeSelect] = useState("happenning");

  const changeTypeSelect = (type) => {
    setTypeSelect(type);
  };

  const changeDataFilmByType = (type) => {};
  return (
    <div className="homepage">
      <Carousel />
      <div className="films">
        <div className="type_films">
          <p
            className={typeSelect === "happenning" ? "show" : null}
            onClick={() => {
              changeTypeSelect("happenning");
            }}
          >
            phim đang chiếu
          </p>
          <p
            className={typeSelect === "prepare" ? "show" : null}
            onClick={() => {
              changeTypeSelect("prepare");
            }}
          >
            phim sắp chiếu
          </p>
        </div>
        <ListFilm />
        <div className="show_more">
          <button className="btn btn_viewmore">
            xem thêm
            <i class="fa-solid fa-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
