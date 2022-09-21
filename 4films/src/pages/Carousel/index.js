import React, { useEffect, useState } from "react";
import "./styles/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const CarouselHome = () => {
  const data = [
    {
      src: "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/l/d/ld_poster_nkc_m_i_1_.jpg",
      name: "Love destiny",
    },
    {
      src: "https://photo-cms-nghenhinvietnam.zadn.vn/w700/Uploaded/2022/cadwpqrnd/2020_07_07/ransomware_ejct_duuo.png",
      name: "Full film",
    },
    {
      src: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/3/1040917/279439500_3960908423.jpg",
      name: "3rd",
    },
    {
      src: "https://cdn.nguyenkimmall.com/images/detailed/740/phim-bo-gia-tran-thanh-viet-nam.jpg",
      name: "Old father",
    },
    {
      src: "https://i.ytimg.com/vi/9exPYven00U/maxresdefault.jpg",
      name: "Project",
    },
    {
      src: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/4/22/1036985/Peenak3-Main_Poster_.jpg",
      name: "3",
    },
    {
      src: "https://kenh14cdn.com/2020/4/20/0fuqbmycabnkawvgqzyblkpsga4p2a3ac188mdkv-15873522964131163180487.png",
      name: "13 sister",
    },
    {
      src: "https://cdn.vietnammoi.vn/171464242508312576/2021/12/24/bnn-relaunch-poster-web-ver-1757-1640345202114786883347.jpeg",
      name: "sweet",
    },
  ];

  const dataType = [
    {
      msg: "Chọn phim",
      name: "film",
    },
    {
      msg: "Chọn ngày",
      name: "date",
    },
    {
      msg: "Chọn rạp",
      name: "cinema",
    },
    {
      msg: "Chọn suất",
      name: "showtime",
    },
  ];
  const [choiceTypeBooking, setChoiceTypeBooking] = useState("film");

  const [typeBooking, setTypeBooking] = useState(dataType);
  const changeStateBooking = (type) => {
    setChoiceTypeBooking(type);
    changeTypeBooking(type);
  };

  const changeTypeBooking = (type) => {
    const newDatatype = [...dataType];
    const findIndexType = newDatatype.findIndex((item) => item.name === type);
    const itemDelete = newDatatype.splice(findIndexType, 1);
    setTypeBooking([...itemDelete, ...newDatatype]);
  };
  return (
    <div className="carousel">
      <Carousel
        //   showArrows={true}
        autoPlay={true}
        centerMode={true}
        infiniteLoop={true}
        interval={2000}
        dynamicHeight={true}
        //   onChange={onChange}
        //   onClickItem={onClickItem}
        //   onClickThumb={onClickThumb}
      >
        {data.map((item) => {
          return (
            <div className="carousel_item">
              <img src={item.src} />
              <p className="legend">{item.name}</p>
            </div>
          );
        })}
      </Carousel>
      <div className="booking__tickets">
        <h3>
          mua vé nhanh <p className="noti"></p>
        </h3>
        <div className="tickets__menu">
          <p
            className={choiceTypeBooking === "film" ? "choice" : null}
            onClick={() => {
              changeStateBooking("film");
            }}
          >
            Theo phim
          </p>
          <p
            className={choiceTypeBooking === "date" ? "choice" : null}
            onClick={() => {
              changeStateBooking("date");
            }}
          >
            Theo ngày
          </p>
          <p
            className={choiceTypeBooking === "cinema" ? "choice" : null}
            onClick={() => {
              changeStateBooking("cinema");
            }}
          >
            Theo rạp
          </p>
        </div>

        <form className="tickets_form">
          {typeBooking.map((item) => {
            return (
              <select name={item.name}>
                <option>{item.msg}</option>
              </select>
            );
          })}
          <input className="btn_buy_tickets" value="mua vé" />
        </form>
      </div>
    </div>
  );
};

export default CarouselHome;
