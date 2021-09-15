import React, { useEffect } from "react";
import wallpaper from "../assets/img/bg-3.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategory } from "../redux/actions";
import bg1 from "../assets/img/1.jpg";
import bg2 from "../assets/img/2.jpg";
import bg3 from "../assets/img/3.jpg";
import bg4 from "../assets/img/4.jpg";
import bg5 from "../assets/img/5.jpg";
import bg6 from "../assets/img/6.jpg";
import Spinner from "./Spinner";

export default function Category() {
  const bgArr = [bg1, bg2, bg3, bg4, bg5, bg6];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseCategory());
    //eslint-disable-next-line
  }, []);
  const state = useSelector((rootState) => rootState.courseCategoryReducer);
  //console.log(state.data);
  const renderCategory = (arr) => {
    return arr?.map((item, index) => {
      return (
        <div key={index} className="topic-item">
          <div className="overflow"></div>
          <img src={bgArr[index]} alt="backgroundForItem" />
          <div className="content text-center">
            <h6>{item.tenDanhMuc}</h6>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="category">
      <div className="wallpaper">
        <img src={wallpaper} alt="wallpaper" />
      </div>
      <h3 className="title">Our category</h3>
      {state.loading === true && <Spinner className={"category-spinner"} />}
      <div className="topic container">
        {state.data && renderCategory(state.data)}
      </div>
    </section>
  );
}
