import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import ReviewEdit from "../ReviewEdit";

function MyReview({ token }) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/my/review",
      data: {
        userId: token,
      },
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      setReviewList(response.data.review_list);
    });
  }, [token]);

  return (
    <>
      <section className="my_review">
        <ul>
          {reviewList.map((list, index) => (
            <>
              <li key={index}>
                <ReviewEdit
                  reviewTitle={list.title}
                  reviewContent={list.body}
                  reviewId={list.reviewId}
                  movieTitle={list.movietitle}
                />
              </li>
            </>
          ))}
        </ul>
      </section>
    </>
  );
}

export default MyReview;
