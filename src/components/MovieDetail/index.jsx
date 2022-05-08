import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
          <img src={movie.image} alt=""></img>
          <div>{movie.title.replace(/[</b>]/gi, "")}</div>
          <div>{movie.subtitle.replace(/[</b>]/gi, "")}</div>
          <div>{movie.director.replace(/[|]/gi, "")}</div>
        </>
      ) : (
        <>X</>
      )}
    </>
  );
}

export default MovieDetail;
