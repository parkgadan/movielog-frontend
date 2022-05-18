import React, { useState } from "react";
import "./index.css";
import axios from "axios";

function ReviewEdit({ reviewId, reviewTitle, reviewContent, movieTitle }) {
  const [userReview, setUserReview] = useState({
    reviewId: reviewId,
    title: reviewTitle,
    content: reviewContent,
    movie: movieTitle,
  });
  const [isBtnClick, setIsBtnClick] = useState(false);

  const onChangeReview = (event) => {
    setUserReview({
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: `/api/my/review/${userReview.reviewId}`,
      data: {
        reviewId: userReview.reviewId,
      },
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const handleEdit = () => {
    setIsBtnClick(!isBtnClick);
    axios({
      method: "POST",
      url: `/api/my/review/${userReview.reviewId}`,
      data: {
        reviewId: userReview.reviewId,
        title: userReview.title,
        content: userReview.content,
      },
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <>
      {isBtnClick ? (
        <>
          <div className="review_edit_title">
            <p>리뷰 제목</p>
            <input
              type="text"
              value={userReview.title}
              onChange={onChangeReview}
            />
          </div>
          <div className="review_edit_content">
            <p>{userReview.movietitle}</p>
            <p>리뷰 내용</p>
            <textarea
              type="text"
              value={userReview.content}
              onChange={onChangeReview}
            />
          </div>
        </>
      ) : (
        <>
          <div className="review_edit_title">
            <p>리뷰 제목</p>
            {userReview.title}
          </div>
          <div className="review_edit_content">
            <p>{userReview.movietitle}</p>
            <p>리뷰 내용</p>
            {userReview.content}
          </div>
        </>
      )}
      <div className="review_edit_btn">
        <button type="button" onClick={handleDelete}>
          삭제
        </button>
        <button type="button" onClick={handleEdit}>
          수정
        </button>
      </div>
    </>
  );
}

export default ReviewEdit;
