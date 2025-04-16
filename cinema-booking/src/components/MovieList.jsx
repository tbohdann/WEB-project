import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MOVIES_PER_PAGE = 7;

const MovieList = ({ movies }) => {
  const [selectedGenre, setSelectedGenre] = useState("Усі");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Унікальні жанри
  const genres = ["Усі", ...new Set(movies.flatMap(movie => movie.genre.split(", ").map(g => g.trim())))];

  // Пошук + фільтрація
  const filteredMovies = movies.filter(movie => {
    const matchGenre = selectedGenre === "Усі" || movie.genre.includes(selectedGenre);
    const matchTitle = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGenre && matchTitle;
  });

  // Пагінація
  const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);
  const indexOfLastMovie = currentPage * MOVIES_PER_PAGE;
  const indexOfFirstMovie = indexOfLastMovie - MOVIES_PER_PAGE;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // При зміні фільтру або пошуку — скидати сторінку
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="movie-list-container">
      <div className="controls">
        <input
          type="text"
          placeholder="Пошук за назвою..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <select
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="movie-grid">
        {currentMovies.length > 0 ? (
          currentMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        ) : (
          <p>Фільмів не знайдено.</p>
        )}
      </div>

      {/* Пагінація */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
