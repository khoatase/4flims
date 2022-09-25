import React, { useState } from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const changeStateMenu = () => {
    console.log(clickMenu);
    setClickMenu(!clickMenu);
  };
  const dataMenu = [
    "mua vé",
    "phim",
    "góc điện ảnh",
    "sự kiện",
    "rạp/ giá vé",
    "hỗ trợ",
    "thành viên",
  ];
  return (
    <div className="homepage">
      <div className="home__menu">
        <a src="/">
          <img
            className="menu__img"
            src="https://www.galaxycine.vn/website/images/galaxy-logo-mobile.png"
            alt=""
          />
        </a>
        <div className="menu__search">
          <input placeholder="Tìm tên phim, diễn viên..." name="searchValue" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="menu__accounts">
          <div className="menu__accounts__login">
            <i className="fa-solid fa-user"></i>
            <p>Đăng nhập</p>
          </div>
          <p className="languages">
            <p className="languages_VN"> VN </p> |{" "}
            <p className="languages_EN"> EN </p>
          </p>
          <div
            className={!clickMenu ? "icon_menu" : "icon_menu clickMenu"}
            onClick={() => {
              changeStateMenu();
            }}
          ></div>
        </div>
      </div>
      <ul className={!clickMenu ? "list__menu" : "list__menu show"}>
        {dataMenu.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Header;
