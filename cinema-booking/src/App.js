import React from "react";
import movies from "./data/movies";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div>
      <h1 style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "36px",
        fontFamily: "sans-serif"
      }}>
        <span style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 15px",
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px"
        }}>
          Film
        </span>
        <span style={{
          backgroundColor: "#ffc107", 
          color: "#000",
          padding: "10px 15px",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px"
        }}>
          Hub
        </span>
      </h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
