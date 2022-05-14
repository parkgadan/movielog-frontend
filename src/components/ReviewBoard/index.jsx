import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function ReviewBoard() {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://8c6fc657-d010-4845-8a73-b6ce8db36833.mock.pstmn.io/review/posts",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      setReviewList(response.data);
    });
  }, []);

  return (
    <>
      <section className="review_board">
        <ul>
          {reviewList.map((review) => (
            <li key={review.id}>
              <div className="board_user">
                <span>닉네임</span>
                {review.userId}
              </div>
              <div className="board_title">
                <p>리뷰 제목</p>
                {review.title}
              </div>
              <div className="board_content">
                <p>리뷰 내용</p>
                {review.body}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ReviewBoard;
