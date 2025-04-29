import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import CinemaHall from '../components/CinemaHall';
import UserFormModal from '../components/UserFormModal';
import SnackItem from '../components/SnackItem';
import { getMovie, saveBooking, getTakenSeatsForSeance } from '../services/BookingService';
import Header from '../components/Header';

const Booking = () => {
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [popcornQuantity, setPopcornQuantity] = useState(0);
  const [cokeQuantity, setCokeQuantity] = useState(0);
  const [takenSeats, setTakenSeats] = useState([]);
  const [selectedSeance, setSelectedSeance] = useState(null);
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie(movieId);
      setMovie(data);
    };
    fetchData();
  }, [movieId]);

  useEffect(() => {
    if (movie && movie.seanceTimes && movie.seanceTimes.length > 0) {
      setSelectedSeance(movie.seanceTimes[0]);
    }
  }, [movie]);

  useEffect(() => {
    const fetchTakenSeats = async () => {
      if (selectedSeance) {
        try {
          const seats = await getTakenSeatsForSeance(movieId, selectedSeance);
          setTakenSeats([...seats]);
        } catch (error) {
          console.error('Error fetching taken seats:', error);
          setTakenSeats([]);
        }
      }
    };

    fetchTakenSeats();
  }, [movieId, selectedSeance]);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(`reviews-${movieId}`)) || [];
    setReviews(savedReviews);
  }, [movieId]);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSeanceChange = (seance) => {
    setSelectedSeance(seance);
    setSelectedSeats([]);
  };

  const handleBookingSubmit = async () => {
    localStorage.setItem('bookingData', JSON.stringify(userData));
    if (!validateForm()) return;

    const bookingData = {
      movieId,
      seance: selectedSeance,
      seats: selectedSeats,
      userData,
      snacks: {
        popcorn: popcornQuantity,
        coke: cokeQuantity
      },
      total: selectedSeats.length * 120 + 20 + popcornQuantity * 85 + cokeQuantity * 65,
      timestamp: new Date().toISOString()
    };

    
  };


  const formatSeanceTime = (seance) => {
    const [date, time] = seance.split(' ');
    return `${date} | ${time}`;
  };

  return (
    
      

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Деталі замовлення</h3>
              
              <button
                onClick={() => setShowUserForm(true)}
                disabled={selectedSeats.length === 0 || !selectedSeance}
                className={`w-full mt-6 py-3 rounded-lg font-bold text-white ${
                  selectedSeats.length === 0 || !selectedSeance
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-blue-700'
                }`}
              >
                Забронювати
              </button>
              {showUserForm && (
                <UserFormModal
                  userData={userData}
                  handleInputChange={handleInputChange}
                  errors={errors}
                  setShowUserForm={setShowUserForm}
                  handleBookingSubmit={handleBookingSubmit}
                />
              )}
            </div>

            <div className="md:w-2/3 p-6">
              {movie && (
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex flex-col gap-4 flex-1">
                    <h2 className="text-3xl font-bold text-gray-800">{movie.title}</h2>
                    <div className="flex flex-col items-center text-gray-600 gap-2">
                      <span>{movie.duration}</span>
                      <span className="text-center">{movie.genre}</span>
                      <span className="font-semibold">{movie.rating}</span>
                    </div>
                    <p className="text-gray-700">{movie.description}</p>
                  </div>
                  <div className="w-full sm:w-64 h-80 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {selectedSeance && (
                <div className="mt-6">
                  <CinemaHall
                    takenSeats={takenSeats}
                    selectedSeats={selectedSeats}
                    onSeatSelect={setSelectedSeats}
                  />
                </div>
              )}

              
              
            </div>
          </div>
        </div>
  );
};

export default Booking;
