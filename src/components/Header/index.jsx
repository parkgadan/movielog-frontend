import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./index.css";

function Header({ nickname, userId }) {
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
            {nickname ? (
              <Link to="/my/order" userId={userId}>
                MY
              </Link>
            ) : (
              <></>
            )}
          </li>
          {nickname ? (
            <>
              <li className="login">
                <a href="/movie">로그아웃</a>
                <Link to="/user/" userId={userId}>
                  {nickname}님
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="login">
                <Link to="/join">회원가입</Link>
                <Link to="/user/login">로그인</Link>
              </li>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
