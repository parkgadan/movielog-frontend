import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

function Main() {
  const [movieData, setMovieData] = useState([]);
  const dataUrl = "/data/data1.json";

  useEffect(() => {
    axios.get(dataUrl).then((response) => {
      setMovieData(response.data.movie);
    });
  }, []);

  return (
    <>
      <main className="main">
        <ul>
          {movieData.map((movie, index) => (
            <Link key={index} to={`/movie/${index}`}>
              <img src={movie.image} alt=""></img>
              <div>{movie.title.replace(/[</b>]/gi, "")}</div>
              <div>{movie.subtitle.replace(/[</b>]/gi, "")}</div>
              <div>{movie.director.replace(/[|]/gi, "")}</div>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Main;
