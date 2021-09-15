import React from "react";
import bg1 from "../assets/img/bg-info-elearning.jpg";
import bg2 from "../assets/img/bg-2.png";

export default function Infor() {
  return (
    <section className="info" style={{ backgroundImage: `url(${bg1})` }}>
      <div
        className="overflow"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      <div className="container content">
        <div className="row">
          <div className="item col-md-4">
            <i class="icon fa fa-bookmark"></i>
            <p className="name-icon">Teachers</p>
            <span className="amount d-block">20</span>
          </div>
          <div className="item col-md-4">
            <i class="icon fa fa-book"></i>
            <p className="name-icon">Lessons</p>
            <span className="amount d-block">100</span>
          </div>
          <div className="item col-md-4">
            <i class="icon fa fa-mortar-board"></i>
            <p className="name-icon">Students</p>
            <span className="amount d-block">4000</span>
          </div>
        </div>
      </div>
    </section>
  );
}
