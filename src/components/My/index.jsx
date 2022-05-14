import React from "react";
import { Link } from "react-router-dom";

function My(userId) {
  return (
    <>
      <section className="profile">
        <div className="profile_menu">
          <ul>
            <li>
              <Link to={`/movie/myorder/${userId}`} className="profile_link">
                구매내역
              </Link>
            </li>
            <li>
              <Link to={`/review/posts/${userId}`} className="profile_link">
                내 리뷰
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile_area"></div>
      </section>
    </>
  );
}

export default My;
