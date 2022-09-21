import React, { useEffect, useState } from "react";

const ListFilm = () => {
  const data = [
    {
      nameEng: "avatar",
      nameVie: null,
      ageSpecific: 15,
      imgLink:
        "https://www.looper.com/img/gallery/20-epic-movies-like-avatar-you-need-to-watch-next/l-intro-1645555067.jpg",
    },
    {
      nameEng: "6/45",
      nameVie: "Bỗng dưng trúng số",
      ageSpecific: 25,
      imgLink:
        "https://m.media-amazon.com/images/M/MV5BZjhiM2I4MmQtNTRiMy00ZTdhLWJlY2UtOTZhMzgwMDViMmUyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    },
    {
      nameEng: "Love destiny the movie",
      nameVie: "Ngược dòng thời gian để yêu anh",
      ageSpecific: 30,
      imgLink:
        "https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/l/d/ld_teaser_fb_1_.jpg",
    },
    {
      nameEng: "ISEKAI QUARTET THE MOVIE: ANOTHER WORLD",
      nameVie: "BỘ TỨ DỊ GIỚI: THẾ GIỚI SONG SONG",
      ageSpecific: 18,
      imgLink: "https://i.ytimg.com/vi/sKQdlX-EWNY/maxresdefault.jpg",
    },
    {
      nameEng: "SATAN'S SLAVES 2",
      nameVie: "NÔ LỆ CỦA QUỶ 2",
      ageSpecific: 18,
      imgLink:
        "https://images.squarespace-cdn.com/content/v1/511eea22e4b06642027a9a99/1591130854035-J8W8CK3Q3XPBYTACQBYE/Satan%27s+Slaves.jpg",
    },
    {
      nameEng: "SEMANTIC ERROR",
      nameVie: "LỖI LOGIC",
      ageSpecific: 15,
      imgLink:
        "https://congluan-cdn.congluan.vn/files/content/2022/03/27/semantic-error-gay-bao-mang-xa-hoi-han-quoc-bang-cach-nao-215206458.jpg",
    },
  ];
  
  return (
    <div className="listFilm">
      {data.map((item) => {
        return (
          <div className="film_container">
            <div className="film_item">
              <img src={item.imgLink} />
              <p>{item.nameEng}</p>
              <p>{item.nameVie}</p>
            </div>
            <div className="layer">
              <p>{item.ageSpecific}</p>
              <button className="btn">mua vé</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListFilm;
