import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";
import MyOrder from "../MyOrder";

function My(userId) {
  return (
    <>
      <section className="my">
        <div className="my_area">
          <ul className="my_menu">
            <li>
              <Link to="/my/order">구매내역</Link>
            </li>
            <li>
              <Link to="/my/review">내 리뷰</Link>
            </li>
          </ul>
        </div>
        <div className="my_area"></div>
        <Outlet />
      </section>
    </>
  );
}

export default My;
