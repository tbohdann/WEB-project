import React from "react";
import "./MovieCard.css"; 

const MovieCard = ({ title, description, genre, dateTime, poster }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h2>{title}</h2>
        <p><strong>Жанр:</strong> {genre}</p>
        <p><strong>Опис:</strong> {description}</p>
        <p><strong>Сеанс:</strong> {dateTime}</p>
      </div>
    </div>
  );
};

export default MovieCard;
