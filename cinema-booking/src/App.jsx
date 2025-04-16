import React from "react";
import movies from "./data/movies";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>FilmHub</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
