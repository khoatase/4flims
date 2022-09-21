import React from "react";
import "./styles/style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerUp">
        <div className="footerIntroduce">
          <h4 className="introduce__title">
            <p className="notiFoot"></p>
            Giới thiệu
          </h4>
          <ul className="introduce__list">
            <li>
              <i class="fa-solid fa-angles-right"></i> về chúng tôi
            </li>
            <li>
              <i class="fa-solid fa-angles-right"> </i> thỏa thuận sử dụng
            </li>
            <li>
              <i class="fa-solid fa-angles-right"></i> quy chế hoạt động
            </li>
            <li>
              <i class="fa-solid fa-angles-right"></i> chính sách bảo mật
            </li>
          </ul>
        </div>
        <div className="footerIntroduce">
          <h4 className="introduce__title">
            <p className="notiFoot"></p>
            Góc điện ảnh
          </h4>
          <ul className="introduce__list">
            <li>
              <i class="fa-solid fa-angles-right"></i> thể loại phim
            </li>
            <li>
              <i class="fa-solid fa-angles-right"> </i> bình luận phim
            </li>
            <li>
              <i class="fa-solid fa-angles-right"></i> blog điện ảnh
            </li>
            <li>
              <i class="fa-solid fa-angles-right"></i> phim hay tháng
            </li>
          </ul>
        </div>
        <div className="footerIntroduce">
          <h4 className="introduce__title">
            <p className="notiFoot"></p>
            Hỗ trợ
          </h4>
          <ul className="introduce__list">
            <li>
              <i class="fa-solid fa-angles-right"></i> góp ý
            </li>
            <li>
              <i class="fa-solid fa-angles-right"> </i> sale & services
            </li>
            <li>
              <i class="fa-solid fa-angles-right"></i> rạp / giá vé
            </li>
            <li>
              <i class="fa-solid fa-angles-right"></i> tuyển dụng
            </li>
          </ul>
        </div>
        <div className="footerIntroduce">
          <div className="connect__socials">
            <h4 className="introduce__title">
              <p className="notiFoot"></p>
              kết nối galaxy cinema
            </h4>
            <ul className="introduce__list listconnect">
              <li>
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i class="fa-brands fa-youtube"></i>
              </li>
              <li>
                <i class="fa-brands fa-square-instagram"></i>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="introduce__title">
              <p className="notiFoot"></p>
              DOWNLOAD APP
            </h4>
            <ul className="introduce__list listconnect">
              <li>
                <i class="fa-brands fa-apple"></i>
              </li>
              <li>
                <i class="fa-brands fa-android"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="imgCheck">
          <img src="https://i0.wp.com/tuvannhathuong.com/wp-content/uploads/2018/07/t%E1%BA%A3i-xu%E1%BB%91ng.png?resize=365%2C138&ssl=1" />
        </div>
      </div>
      <hr className="hrFooter" />
      <div className="footerDown">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXJmI1oVv4RnNI_F65eSAud-6Q4DEggjdhw&usqp=CAU" />
        <p>
          Công Ty Cổ Phần Phim Thiên Ngân, Tầng 5, Toà Nhà Mặt Trời Sông Hồng,
          23 Phan Chu Trinh, Phường Phan Chu Trinh, Quận Hoàn Kiếm, Hà Nội
        </p>
      </div>
    </div>
  );
};

export default Footer;
