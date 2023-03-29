import React from "react";
import { useState } from "react";

const SingleCard = ({ movie, handleWatchTime }) => {
  // console.log(handleWatchTime);
  const [disab, setDisab] = useState(false);

  return (
    <div className="container card col-md-6 text-center w-100 m-auto p-3">
      <div className="w-25 m-auto">
        <img className="w-75" src={movie.poster} alt="" />
      </div>
      <h3 className="my-3">{movie.movieName}</h3>
      <p>{movie.description}</p>
      <div className="d-flex justify-content-around">
        <p>WatchTime: {movie.watchTime}</p>
        <p>Rating: {movie.imdbRating}</p>
      </div>
      <button
        onClick={() => handleWatchTime(movie.watchTime)}
        className="btn btn-info w-75 fs-5 fw-bold m-auto"
      >
        Book Now
      </button>
    </div>
  );
};

export default SingleCard;
