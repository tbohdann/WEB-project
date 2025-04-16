import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"; 

const MovieList = ({ movies }) => {
  const [selectedGenre, setSelectedGenre] = useState("Усі");
  const [searchQuery, setSearchQuery] = useState("");

  // Унікальні жанри
  const genres = ["Усі", ...new Set(movies.flatMap(movie => movie.genre.split(", ").map(g => g.trim())))];

  // Пошук + фільтрація
  const filteredMovies = movies.filter(movie => {
    const matchGenre = selectedGenre === "Усі" || movie.genre.includes(selectedGenre);
    const matchTitle = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGenre && matchTitle;
  });

  return (
    <div className="movie-list-container">
      <div className="controls">
        <input
          type="text"
          placeholder="Пошук за назвою..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        ) : (
          <p>Фільмів не знайдено.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
