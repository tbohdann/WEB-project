import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const [selectedGenre, setSelectedGenre] = useState("Усі");
  const [searchQuery, setSearchQuery] = useState("");

  // Унікальні жанри
  const genres = ["Усі", ...new Set(movies.flatMap(movie => movie.genre.split(", ").map(g => g.trim())))];

  // Пошук + фільтрація
  const filteredMovies = movies.filter(movie => {
    const matchGenre =
      selectedGenre === "Усі" || movie.genre.includes(selectedGenre);
    const matchTitle = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGenre && matchTitle;
  });

  return (
    <div className="movie-list-container" style={{ padding: "0 20px" }}>
      <div className="controls" style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px"
      }}>
        <input
          type="text"
          placeholder="Пошук за назвою..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            minWidth: "200px"
          }}
        />

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            minWidth: "150px"
          }}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="movie-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "18px" }}>Фільмів не знайдено.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
