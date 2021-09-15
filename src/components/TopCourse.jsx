import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../redux/actions";
import CourseItem from "./CourseItem";
import Spinner from "./Spinner";

export default function TopCourse() {
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log(1);
    dispatch(fetchCourse());
  }, []);
  const listCourse = useSelector((state) => state.courseReducer);
  const [row, setRow] = useState(1);
  // more or less
  const handleOnClick = (flag) => {
    return () => {
      if (flag) setRow(row + 1);
      else {
        window.scrollBy(0, -470);
        setRow(row - 1);
      }
    };
  };
  const renderTopCourseList = (list) => {
    if (list.length) {
      return list
        .filter((item, index) => 4 <= index && index <= 3 + row * 3) // 3 + row*3 to render (row) of course list
        .map((item) => {
          return (
            <div className="col-md-4 my-5 col-box">
              <CourseItem course={item} key={item.maKhoaHoc} />
            </div>
          );
        });
    }
  };
  return (
    <section className="top-course">
      <h3 className="title">Our Top Courses</h3>
      <p className="subtitle">
        Join over 100 instructors who use Teachable to share their knowledge.
        <br />
        Easily register for an online course
      </p>
      {listCourse.loading === true && (
        <Spinner className={"top-course-spinner"} />
      )}
      {listCourse.data !== null && (
        <>
          <div className="course-list container d-flex">
            <div className="row w-100">
              {renderTopCourseList(listCourse.data)}
            </div>
          </div>
          <div className="btn-show d-flex justify-content-center">
            {/* maximum: 5 rows  */}
            {row < 5 && (
              <button
                className="btn btn-more"
                id="more"
                onClick={handleOnClick(true)}
              >
                Show more
                <i className="fa fa-angle-double-down ml-2"></i>
              </button>
            )}
            {row > 1 && (
              <button
                className="btn btn-less"
                id="less"
                onClick={handleOnClick(false)}
              >
                Show less
                <i className="fa fa-angle-double-up ml-2"></i>
              </button>
            )}
            <button className="btn btn-all">
              Show all
              <i className="fa fa-angle-double-right ml-2"></i>
            </button>
          </div>
        </>
      )}
    </section>
  );
}
