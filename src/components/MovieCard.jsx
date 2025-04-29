import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, poster, title, description, genre, seanceTimes }) => {
  return (
    <div className="relative group w-full max-w-[340px] h-[480px] sm:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-pink-500/30 transition-shadow duration-300">
      <div className="absolute inset-0 z-0">
        <img
          src={poster}
          alt={`Poster ${title}`}
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6">
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-4 sm:p-5 border border-white/10 shadow-inner">
          <h2 className="text-lg sm:text-2xl font-bold text-white text-center mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-100 text-center mb-3 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md ring-1 ring-white/20">
              {genre}
            </span>
            <div className="flex flex-col items-center gap-2">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs sm:text-sm rounded-full">
                  {seanceTimes}
                </span>
            <Link
              to={`/booking/${id}`}
              className="mt-1 px-4 py-2 bg-white text-pink-600 font-semibold text-xs sm:text-sm rounded-full hover:bg-pink-100 transition duration-200" >
              Купити квиток
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
