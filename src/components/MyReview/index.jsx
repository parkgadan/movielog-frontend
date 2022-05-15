import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function MyReview(user) {
  const [reviewList, setReviewList] = useState([]);
  const userId = Number(user.userId);
  const userFind = reviewList.filter((review) => review.userId === userId);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      setReviewList(response.data);
    });
  }, []);

  return (
    <>
      <section className="my_review">
        <ul>
          {userFind ? (
            <>
              {userFind.map((list, index) => (
                <>
                  <li key={index}>
                    <div className="my_review_title">
                      <p>리뷰 제목</p>
                      {list.title}
                    </div>
                    <div className="my_review_content">
                      <p>리뷰 내용</p>
                      {list.body}
                    </div>
                    <div className="my_review_btn">
                      <button type="button">삭제</button>
                      <button type="button">수정</button>
                    </div>
                  </li>
                </>
              ))}
            </>
          ) : (
            <></>
          )}
        </ul>
      </section>
    </>
  );
}

export default MyReview;
