import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/img/17.jpg";
export default function Footer() {
  return (
    <section className="footer" style={{ backgroundImage: `url(${bg1})` }}>
      <div className="overflow"></div>
      <div className="container">
        <Link to="/home" className="logo">
          <div>
            <p className="lead">
              <span className="logo-name" style={{ marginRight: "12px" }}>
                Dux
              </span>
              Elearning
            </p>
          </div>
        </Link>
        <div className="row">
          <div className="col-md-4 col-6 policy">
            <h3 className="title">Chính sách và quy định</h3>
            <div className="content">
              <a href="#">Thỏa thuận sử dụng</a>
              <a href="#">Quy chế hoạt động</a>
              <a href="#">Chính sách bảo mật</a>
              <a href="#">Quyền lợi thành viên</a>
            </div>
          </div>
          <div className="col-md-4 col-6 link">
            <h3 className="title">Liên kết</h3>
            <div className="content">
              <a href="https://www.facebook.com/nhoi.em" class="facebook">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#" className="youtube">
                <i class="fa fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-6 contact">
            <h3 className="title">Liên hệ</h3>
            <div className="content">
              <p>
                <i class="fa fa-envelope"></i>
                vuprotk21@gmail.com
              </p>
              <p>
                <i class="fa fa-envelope"></i>
                vohoangvu.dev99@gmail.com
              </p>
              <p>
                <i class="fa fa-mobile"></i>
                0836215664
              </p>

              <p>
                <i class="fa fa-mobile"></i>
                0836215664
              </p>
            </div>
          </div>
        </div>
        <div className="line-mid"></div>
        <div className="final">
          <img
            src="https://hocmai.vn/theme/new2/images/congthuong.png"
            alt="certified"
          />
          <p className="note">
            SẢN PHẨM ĐƯỢC CODE BỞI VÕ HOÀNG VŨ <br /> DỰA TRÊN GIAO DIỆN VÀ THAM
            KHẢO SOURCE CODE CỦA CÔNG ĐỨC &amp; THANH PHONG <br /> ĐỊA CHỈ: 82
            UNG VĂN KHIÊM - BÌNH THẠNH, TP.HCM <br /> 2021 © DUX Elearning. ALL
            RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
}
