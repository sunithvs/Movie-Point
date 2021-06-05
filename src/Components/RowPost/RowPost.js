import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imgUrl } from "../../Constants/Constants";
import axios from "../../axios";

function RowPost({ type, url}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [url])

  return (
    <div className="row">
      <h1>{type}</h1>
      <div className="posters">
        {movies.map((obj, index) => {
         
          return (
            <div key={index.toString()} className="poster">
              <img
                className="img"
                src={ obj.backdrop_path ? imgUrl + obj.backdrop_path : '' }
                alt="poster"
              />
              <h2>{obj.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RowPost;
