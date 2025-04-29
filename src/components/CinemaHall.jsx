import React from 'react';

const CinemaHall = ({ selectedSeats, onSeatSelect, takenSeats }) => {
  const generateSeatMap = () => {
    const seatMap = {};
    const rows = ['1', '2', '3', '4', '5'];

    rows.forEach(row => {
      for (let i = 1; i <= 12; i++) {
        const seatId = `${row}${i}`;
        seatMap[seatId] = {
          id: seatId,
          status: takenSeats.includes(seatId) ? 'taken' : 'available'
        };
      }
    });

    return { seatMap, rows };
  };

  const { seatMap, rows } = generateSeatMap();

  const toggleSeat = (seatId) => {
    if (seatMap[seatId].status === 'taken') return;

    const newSelected = selectedSeats.includes(seatId)
      ? selectedSeats.filter(id => id !== seatId)
      : [...selectedSeats, seatId];

    onSeatSelect(newSelected);
  };

  const getSeatStatus = (seatId) => {
    if (selectedSeats.includes(seatId)) return 'selected';
    return seatMap[seatId].status;
  };

  const getSeatStyles = (status) => {
    const baseStyles = 'rounded-[4px] transition-all duration-150 shadow-sm';
    switch (status) {
      case 'taken':
        return `${baseStyles} bg-white/30 border border-pink-200 cursor-not-allowed`;
      case 'selected':
        return `${baseStyles} bg-blue-500/10 border border-blue-500 ring-2 ring-blue-300 shadow-md`;
      case 'available':
        return `${baseStyles} bg-green-500/10 hover:bg-green-500/20 border border-green-500 cursor-pointer backdrop-blur-sm`;
      default:
        return '';
    }
  };

  return (
    <div className="overflow-x-auto px-4 py-6 sm:px-6 sm:py-8 bg-gradient-to-br from-fuchsia-900 via-indigo-900 to-blue-900 text-white rounded-xl shadow-xl">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-14 sm:h-20 md:h-24 lg:h-28 mb-8 text-center">
          <svg
            viewBox="0 0 500 100"
            className="w-full h-full relative z-10"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 100 Q 250 0 500 100"
              fill="none"
              stroke="#f472b6"
              strokeWidth="4"
            />
          </svg>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl font-bold text-pink-300 drop-shadow-lg">
            ЕКРАН
          </span>
        </div>

        <div className="min-w-max flex flex-col items-center justify-center">
          {rows.map(row => (
            <div key={row} className="flex items-center mb-2">
              <div className="w-5 sm:w-6 text-center text-sm sm:text-base text-pink-100 mr-2">
                {row}
              </div>
              <div className="flex space-x-1 sm:space-x-1.5">
                {Array.from({ length: 10 }, (_, i) => {
                  const seatId = `${row}${i + 1}`;
                  const status = getSeatStatus(seatId);
                  return (
                    <button
                      key={seatId}
                      className={`${getSeatStyles(status)} w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8`}
                      onClick={() => toggleSeat(seatId)}
                      disabled={status === 'taken'}
                      aria-label={`Місце ${seatId}, ${status}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default CinemaHall;
