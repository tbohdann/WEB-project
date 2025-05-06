import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <a
            href="/home"
            className="text-3xl font-extrabold bg-gradient-to-r from-white via-rose-100 to-pink-200 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
          >
            FilmHub
          </a>

          {/* Навігація для великих екранів */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/home"
              className="text-white font-medium hover:text-rose-200 transition-colors duration-300"
            >
              Головна
            </a>
            <a
              href="https://mistokyia.ua/leisure/top-20-naibilsh-ochikuvanykh-filmiv-2025-roku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-rose-200 transition-colors duration-300"
            >
              Новинки
            </a>
          </nav>

          {/* Кнопка меню для мобільних */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-all"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-white transition duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-3'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Мобільне меню */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-2 px-4 py-4">
            <a
              href="/home"
              className="w-full text-center text-white py-3 rounded-lg bg-rose-600/60 hover:bg-rose-500/70 transition-all duration-300"
            >
              Головна
            </a>
            <a
              href="https://mistokyia.ua/leisure/top-20-naibilsh-ochikuvanykh-filmiv-2025-roku"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-white py-3 rounded-lg bg-rose-600/60 hover:bg-rose-500/70 transition-all duration-300"
            >
              Новинки
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;