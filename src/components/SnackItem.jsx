import React from 'react';

const SnackItem = ({ icon, name, price, quantity, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center flex-1 min-w-0">
        <img 
          src={icon} 
          alt={name} 
          className="w-12 h-12 object-contain rounded-full border border-gray-200"
        />
        <div className="ml-4 min-w-0">
          <div className="text-gray-900 font-semibold text-lg truncate">
            {name}
          </div>
          <div className="text-gray-500 text-sm">
            {price} грн
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onDecrement}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
          aria-label={`Зменшити кількість ${name}`}
        >
          <span className="text-xl font-bold">−</span>
        </button>
        <span className="text-lg font-bold text-gray-800 w-6 text-center">{quantity}</span>
        <button
          onClick={onIncrement}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition"
          aria-label={`Збільшити кількість ${name}`}
        >
          <span className="text-xl font-bold">+</span>
        </button>
      </div>
    </div>
  );
};

export default SnackItem;
