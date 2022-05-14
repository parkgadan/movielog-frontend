import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

function Main() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/data/data.json",
    }).then((response) => {
      setMovieData(response.data.data);
    });
  }, []);

  return (
    <>
      <main className="main">
        <ul>
          {movieData.map((movie) => (
            <Link key={movie.no} to={`/movie/${movie.no}`}>
              <li>
                <img src={movie.image} alt=""></img>
                <div className="main_info">
                  <div className="main_title">
                    {movie.title.replace(/[</b>]/gi, "")}
                  </div>
                  <div className="main_subtitle">
                    {movie.subtitle.replace(/[</b>]/gi, "")}
                  </div>
                  <div className="main_director">
                    {movie.director.replace(/[|]/gi, "")}
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Main;
