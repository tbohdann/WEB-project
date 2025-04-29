import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';

const MovieList = ({ movies }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 8; 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
    };

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
        setCurrentPage(1); 
    };

    const genres = [...new Set(movies.map((movie) => movie.genre))];

    const filteredMovies = movies.filter((movie) => {
        const matchesTitle = movie.title && movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre ? movie.genre === selectedGenre : true;
        return matchesTitle && matchesGenre;
    });


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="bg-gradient-to-tr from-pink-50 via-white to-violet-50 p-4 sm:p-6 md:p-10 min-h-screen">
            <div className="max-w-6xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="🔍 Пошук фільмів..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-3 bg-white/60 border border-pink-200 rounded-xl shadow-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 backdrop-blur-md mb-4"
                />
                <select
                    value={selectedGenre}
                    onChange={handleGenreChange}
                    className="w-full px-4 py-3 bg-white/60 border border-pink-200 rounded-xl shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 backdrop-blur-md"
                >
                    <option value="">Всі жанри</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {currentMovies.map((movie, index) => (
                        <div key={index} className="w-full flex justify-center">
                            <MovieCard
                                id={movie.id}
                                poster={movie.poster}
                                title={movie.title}
                                description={`${movie.description.slice(0, 100)}${movie.description.length > 100 ? '...' : ''}`}
                                genre={movie.genre}
                                seanceTimes={movie.seanceTimes}
                            />
                        </div>
                    ))}
                </div>
            </div>

           

            {filteredMovies.length === 0 && (
                <div className="text-center mt-16">
                    <p className="text-2xl font-semibold text-rose-500">
                        Нічого не знайдено 😢
                    </p>
                </div>
            )}
        </div>
    );
};

export default MovieList;