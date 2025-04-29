import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-rose-500 to-pink-600 shadow-md backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <a href="/home" className="text-3xl font-extrabold bg-gradient-to-r from-white via-rose-100 to-pink-200 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
              FilmHub
            </a>
          </div>
          

          <nav className="hidden md:flex space-x-8 items-center">
            <a
              href="/home"
              className="text-white font-medium hover:text-rose-200 transition-colors duration-300 relative group"
            >
              <span className="group-hover:underline underline-offset-4">Головна</span>
            </a>
            <a href="/new" className="text-white font-medium hover:text-rose-200 transition-colors duration-300">
                Новинки
            </a>

          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-white/10 transition-all"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                <span className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-3'}`} />
                <span className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-40' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-2 px-4 py-4">
            <a
              href="/home"
              className="w-full text-center text-white py-3 rounded-xl bg-rose-600/60 hover:bg-rose-500/70 backdrop-blur-md transition-all duration-300 font-medium"
            >
              Головна
            </a>
            <a href="/new" className="text-white font-medium hover:text-rose-200 transition-colors duration-300">
                Новинки
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
