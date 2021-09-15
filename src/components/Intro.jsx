import React from "react";
import bgImg from "../assets/img/1.jpg";
export default function Intro() {
  const scrollDown = () => {
    // console.log("a");
    window.scroll({
      top: 650,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="intro">
      <div className="overflow"></div>
      <img src={bgImg} alt="background" className="imgBg" />
      <div className="content">
        <h1 className="head-title">Getting started with Dux Elearning</h1>
        <p className="subtitle">
          We pride ourselves on providing the most up-to-date content for
          <br></br> our students to learn each course
        </p>
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="What course are you looking for?"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-search">
            Search
          </button>
        </div>
        <div className="arrow-down" onClick={scrollDown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
