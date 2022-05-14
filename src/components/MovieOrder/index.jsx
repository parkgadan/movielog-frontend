import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

function MovieOrder() {
  const [movieData, setMovieData] = useState([]);
  const params = useParams();
  const movieIndex = Number(params.no);
  const movie = movieData.find((movie) => movie.no === movieIndex);

  useEffect(() => {
    axios
      .get("/data/data.json", {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        setMovieData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleOrder = () => {};

  return (
    <>
      {movie ? (
        <>
          <section className="movie_order">
            <p>주문정보</p>
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
          </section>
          <></>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MovieOrder;
