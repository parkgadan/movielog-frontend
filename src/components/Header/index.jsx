import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./index.css";

function Header({ nickname }) {
  return (
    <>
      <header>
        <nav className="navbar">
          <Link className="navbar_logo" to="/movie">
            MovieLog
          </Link>
          <li className="navbar_menu">
            <Link to="/movie">영화</Link>
            <Link to="/review/posts">리뷰</Link>
            <Link to="/my">MY</Link>
          </li>
          {nickname ? (<div>{nickname}</div>) : (
            <li className="login">
              <Link to="/user/login">로그인</Link>
            </li>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
