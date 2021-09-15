import classNames from "classnames";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  // Error?? setState doesn't work
  const prevScrollPos = useRef(0);
  const [state, setState] = useState({
    visible: true,
    homePage:
      window.location.pathname === "/" || window.location.pathname === "/home",
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const curScrollPos = window.pageYOffset;
    const visible_cur = curScrollPos < prevScrollPos.current;
    const homePage =
      curScrollPos < 80 &&
      (window.location.pathname === "/" ||
        window.location.pathname === "/home");
    prevScrollPos.current = curScrollPos;
    //console.log(prevScrollPos.current);
    // state here is the initial state, but out of this func, the state is changed.
    // if using state here to compare, it's nothing change.
    // So we need to use useRef
    setState({
      visible: visible_cur,
      homePage: homePage,
    });
  };

  //window.addEventListener("scroll", handleScroll);

  // Using JS
  // var prevScrollpos = window.pageYOffset;
  // const handleScroll1 = () => {
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("header").style.transform = "translateY(0)";
  //       if (currentScrollPos === 0) {
  //         document.getElementById("header").style.backgroundColor =
  //           "transparent";
  //       } else {
  //         document.getElementById("header").style.backgroundColor = "#045581";
  //       }
  //     } else {
  //       document.getElementById("header").style.transform = "translateY(-100%)";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };
  // };
  // useEffect(handleScroll, [prevScrollpos]);

  return (
    <header
      className={classNames("header", {
        "header-hidden": !state.visible,
        "header-home": state.homePage,
      })}
      id="header"
    >
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
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Course
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navbar-right">
          <div className="cart">
            <i className="fa fa-shopping-cart cart-icon"></i>
            <div className="amount">
              <span>0</span>
            </div>
            <div className="info-cart">
              <div className="no-course">
                Không có khóa học nào trong giỏ hàng
              </div>
            </div>
          </div>
          <div className="account">
            <button className="btn btn-signin">SIGN IN</button>
            <button className="btn btn-signup">SIGN UP</button>
          </div>
        </div>
      </div>
    </header>
  );
}
