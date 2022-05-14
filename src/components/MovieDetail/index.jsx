import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

function MovieDetail({ nickname }) {
  const [movieData, setMovieData] = useState([]);
  const params = useParams();
  const movieIndex = Number(params.no);
  const movie = movieData.find((movie) => movie.no === movieIndex);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://4f224638-023e-470d-9712-7d4a643f8966.mock.pstmn.io/movie",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      setMovieData(response.data.data);
    });
  }, []);

  return (
    <>
      {movie ? (
        <>
          <section className="movie_detail">
            <div className="detail_area">
              <div className="detail_box">
                <img src={movie.image} alt="" />
                <div className="detail_info">
                  <div className="info_title">
                    {movie.title.replace(/[</b>]/gi, "")}
                  </div>
                  <div className="info_subtitle">
                    {movie.subtitle.replace(/[</b>]/gi, "")}
                  </div>
                  <div className="info_director">
                    {movie.director.replace(/[|]/gi, "")}
                  </div>
                  <div className="info_actor">
                    {movie.actor.replace(/[|]/gi, ",\n")}
                  </div>
                  <div className="info_rating">
                    <span className="material-icons-outlined">star</span>
                    {movie.user_rating}
                  </div>
                </div>
              </div>
            </div>
            {nickname ? (
              <div className="button_box">
                <Link to="write">
                  <button className="detail_review">
                    리뷰<span className="material-icons-outlined">edit</span>
                  </button>
                </Link>
                <Link to={`/movie/order/${movie.no}`}>
                  <button className="detail_order">
                    구매
                    <span className="material-icons-outlined">
                      shopping_bag
                    </span>
                  </button>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </section>
          <></>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MovieDetail;
