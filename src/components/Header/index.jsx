import React from "react";
import "./index.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar_logo">MovieLog</div>
        <ul className="navbar_menu">
          <li>
            <a href="#movie">영화</a>
          </li>
          <li>
            <a href="#review">리뷰</a>
          </li>
          <li>
            <a href="#my">MY</a>
          </li>
        </ul>
        <ul>
          <li className="login">
            <a href="#login">로그인</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
