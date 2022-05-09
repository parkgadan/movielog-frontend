import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./index.css";

function MovieDetail() {
  const [movieData, setMovieData] = useState([]);
  const dataUrl = "/data/data1.json";

  useEffect(() => {
    axios.get(dataUrl).then((response) => {
      setMovieData(response.data.movie);
    });
  }, []);

  const params = useParams();
  const movie = movieData[params.movieId];

  return (
    <>
      {movie ? (
        <>
          <div className="movie_detail">
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
                    {movie.userRating}
                  </div>
                </div>
              </div>
              <div className="button_box">
                <Link to="/review/posts">
                  <button className="detail_review">
                    리뷰<span className="material-icons-outlined">edit</span>
                  </button>
                </Link>
                <Link to={`/movie/order/${movie.id}`}>
                  <button className="detail_order">
                    구매
                    <span className="material-icons-outlined">
                      shopping_bag
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>X</>
      )}
    </>
  );
}

export default MovieDetail;
