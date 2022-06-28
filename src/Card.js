import React from "react";

function Card(props) {
  const image_url = "https://image.tmdb.org/t/p/w1280";
  function getclass(vote) {
    if (vote >= 8) {
      console.log("here");
      return "green";
    } else if (vote >= 5) {
      console.log("here");
      return "orange";
    } else {
      console.log("here");
      return "red";
    }
  }
  return (
    <div className="movie">
      <img src={image_url + props.item.poster_path} alt="" />
      <div className="info">
        <h3>{props.item.title}</h3>
        <span className={getclass(props.item.vote_average)}>
          {props.item.vote_average}
        </span>
      </div>

      <div className="desc">
        <h3>Overview</h3>
        {props.item.overview}
      </div>
    </div>
  );
}

export default Card;
