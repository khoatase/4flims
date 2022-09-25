import React, { useEffect, useState } from "react";
import ListFilm from "../../components/ListFilm";
import Carousel from "../Carousel";
import "./styles/style.css";

const initialFilm = [
  {
    nameEng: "avatar",
    nameVie: null,
    ageSpecific: 15,
    imgLink:
      "https://www.looper.com/img/gallery/20-epic-movies-like-avatar-you-need-to-watch-next/l-intro-1645555067.jpg",
    type: "happenning",
  },
  {
    nameEng: "6/45",
    nameVie: "Bỗng dưng trúng số",
    ageSpecific: 25,
    imgLink:
      "https://m.media-amazon.com/images/M/MV5BZjhiM2I4MmQtNTRiMy00ZTdhLWJlY2UtOTZhMzgwMDViMmUyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    type: "prepare",
  },
  {
    nameEng: "Love destiny the movie",
    nameVie: "Ngược dòng thời gian để yêu anh",
    ageSpecific: 30,
    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/l/d/ld_teaser_fb_1_.jpg",
    type: "prepare",
  },
  {
    nameEng: "ISEKAI QUARTET THE MOVIE: ANOTHER WORLD",
    nameVie: "BỘ TỨ DỊ GIỚI: THẾ GIỚI SONG SONG",
    ageSpecific: 18,
    imgLink: "https://i.ytimg.com/vi/sKQdlX-EWNY/maxresdefault.jpg",
    type: "happenning",
  },
  {
    nameEng: "SATAN'S SLAVES 2",
    nameVie: "NÔ LỆ CỦA QUỶ 2",
    ageSpecific: 18,
    imgLink:
      "https://images.squarespace-cdn.com/content/v1/511eea22e4b06642027a9a99/1591130854035-J8W8CK3Q3XPBYTACQBYE/Satan%27s+Slaves.jpg",
    type: "happenning",
  },
  {
    nameEng: "SEMANTIC ERROR",
    nameVie: "LỖI LOGIC",
    ageSpecific: 15,
    imgLink:
      "https://congluan-cdn.congluan.vn/files/content/2022/03/27/semantic-error-gay-bao-mang-xa-hoi-han-quoc-bang-cach-nao-215206458.jpg",
    type: "prepare",
  },
];

const HomePage = () => {
  const [typeSelect, setTypeSelect] = useState("happenning");

  const [dataFilm, setDataFilm] = useState(initialFilm);

  useEffect(() => {
    changeDataFilmByType();
  }, [typeSelect]);

  const changeTypeSelect = (type) => {
    setTypeSelect(type);
  };

  const changeDataFilmByType = () => {
    const getDataFilmByType = initialFilm.filter(
      (item) => item.type === typeSelect
    );

    setDataFilm([...getDataFilmByType]);
  };
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
        <ListFilm data={dataFilm} />
        <div className="show_more">
          <button className="btn btn_viewmore">
            xem thêm
            <i class="fa-sharp fa-solid fa-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
