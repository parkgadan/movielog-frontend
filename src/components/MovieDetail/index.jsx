import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

function MovieDetail({ nickname }) {
  const [movieData, setMovieData] = useState([]);
  const params = useParams();
  const movieId = Number(params.no);
  const movie = movieData.find((movie) => movie.movieId === movieId);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/movie/${movieId}`,
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      setMovieData(response.data);
    });
  }, [movieId]);

  return (
    <>
      {movie ? (
        <>
          <section className="movie_detail">
            <div className="detail_area">
              <div className="detail_box">
                <img src={movie.image} alt="" />
                <div className="detail_info">
                  <div className="info_title">{movie.title}</div>
                  <div className="info_subtitle">{movie.subtitle}</div>
                  <div className="info_director">{movie.director}</div>
                  <div className="info_actor">{movie.actor}</div>
                  <div className="info_data">{movie.pub_date}</div>
                  <div className="info_rating">
                    <span className="material-icons-outlined">star</span>
                    {movie.user_rating}
                  </div>
                </div>
              </div>
            </div>
            {nickname ? (
              <div className="button_box">
                <Link
                  to={`/review/write/${movie.movieId}`}
                  movieId={movieId}
                  movieTitle={movie.title}
                >
                  <button className="detail_review">
                    리뷰<span className="material-icons-outlined">edit</span>
                  </button>
                </Link>
                <Link to={`/order/${movie.movieId}`}>
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
