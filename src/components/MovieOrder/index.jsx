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

  return (
    <>
      {movie ? (
        <>
          <section className="movie_order">
            <p>주문정보</p>
            <div className="order_box">
              <img src={movie.image} alt="" />
              <div className="order_detail_area">
                <div className="order_detail">
                  영화 제목
                  <div className="order_title">
                    {movie.title.replace(/[</b>]/gi, "")}
                  </div>
                  <div className="order_subtitle">
                    {movie.subtitle.replace(/[</b>]/gi, "")}
                  </div>
                </div>
                <div className="order_info">
                  가격
                  <div className="order_money">{movie.price}</div>
                </div>
              </div>
            </div>
            <div className="order_button">
              <button>
                결제<span class="material-icons-outlined">payments</span>
              </button>
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
