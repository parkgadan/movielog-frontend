import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

function MovieOrder({ token }) {
  const [movieData, setMovieData] = useState([]);
  const params = useParams();
  const movieId = Number(params.no);
  const movie = movieData.find((movie) => movie.no === movieId);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/order/${movieId}`,
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      setMovieData(response.data);
    });
  }, [movieId]);

  const handleOrder = () => {
    axios({
      method: "POST",
      url: `/api/order/${movieId}`,
      data: {
        movieId: movieId,
      },
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <>
      {movie ? (
        <>
          <section className="movie_order_page">
            <p>주문정보</p>
            <div className="movie_order">
              <div className="order_box">
                <img src={movie.image} alt="" />
                <div className="order_detail">
                  <span>영화 제목</span>
                  <div className="order_title">
                    {movie.title.replace(/[</b>]/gi, "")}
                  </div>
                  <div className="order_subtitle">
                    {movie.subtitle.replace(/[</b>]/gi, "")}
                  </div>
                </div>
                <div className="order_detail">
                  <span>가격</span>
                  <div className="order_price">{movie.price}원</div>
                </div>
              </div>
              <div className="order_button">
                <button onClick={handleOrder}>결제</button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MovieOrder;
