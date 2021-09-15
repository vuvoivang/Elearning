import React from "react";
import wallpaper from "../assets/img/group-3.png";
export default function StepRegister() {
  return (
    <section className="step-register">
      <div className="wallpaper">
        <img src={wallpaper} alt="wallpaper" />
      </div>
      <h3 className="title">
        Register Your Course In Four <br /> Simple Steps
      </h3>
      <div className="steps d-flex">
        <div className="item">
          <div className="step-index-1">
            <span className="amount">1</span>
            <span>STEP</span>
          </div>
          <p className="step-todo">
            Choose the course <br /> you want
          </p>
        </div>
        <div className="item">
          <div className="step-index-2">
            <span className="amount">2</span>
            <span>STEP</span>
          </div>
          <p className="step-todo">
            Add <br /> shopping cart
          </p>
        </div>
        <div className="item">
          <div className="step-index-3">
            <span className="amount">3</span>
            <span>STEP</span>
          </div>
          <p className="step-todo">
            Pay <br /> your course
          </p>
        </div>
        <div className="item">
          <div className="step-index-4">
            <span className="amount">4</span>
            <span>STEP</span>
          </div>
          <p className="step-todo">
            Check <br /> your course
          </p>
        </div>
      </div>
    </section>
  );
}
