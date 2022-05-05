import React, { useEffect, useState } from "react";
import Hedaer from "../Header";
import "./index.css";
import axios from "axios";

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
      <Hedaer />
      <div className="main">
        <ul>
          <li>
            {movieData.map((movie, index) => (
              <div key={index} className="main_movie">
                <img src={movie.image} alt=""></img>
                <div>{movie.title.replace(/[</b>]/gi, "")}</div>
                <div>{movie.subtitle.replace(/[</b>]/gi, "")}</div>
                <div>{movie.director.replace(/[|]/gi, "")}</div>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Main;
