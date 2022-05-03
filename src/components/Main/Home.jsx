import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios.get("/data/data.json").then((response) => {
      setMovieData(response.data.data);
    });
  }, []);

  return (
    <div className="home">
      <ul>
        <li>
          {movieData.map((movie, index) => (
            <div key={index} className="home_movie">
              <img src={movie.movie_image} alt=""></img>
              <div>{movie.movie_title}</div>
              <div>{movie.movie_subtitle}</div>
              <div>{movie.director}</div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Home;
