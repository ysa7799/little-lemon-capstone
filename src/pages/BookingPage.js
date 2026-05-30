import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';

// Seeded random function for deterministic time generation
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
    };

    // Fetch available times from simulated API
    export const fetchAPI = (date) => {
      const times = [];
        const dateObj = new Date(date);
          const seed = dateObj.getDate() + dateObj.getMonth() * 30;
            const allTimes = ['17:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
              const numTimes = Math.floor(seededRandom(seed) * 5) + 3;
                for (let i = 0; i < numTimes; i++) {
                    const index = Math.floor(seededRandom(seed + i) * allTimes.length);
                        if (!times.includes(allTimes[index])) {
                              times.push(allTimes[index]);
                                  }
                                    }
                                      return times.sort();
                                      };

                                      // Submit booking to API (simulated)
                                      export const submitAPI = (formData) => {
                                        return true;
                                        };

                                        // Reducer for managing available times
                                        const timesReducer = (state, action) => {
                                          switch (action.type) {
                                              case 'UPDATE_TIMES':
                                                    return fetchAPI(action.payload);
                                                        default:
                                                              return state;
                                                                }
                                                                };

                                                                // Initial times state
                                                                const initializeTimes = () => {
                                                                  const today = new Date().toISOString().split('T')[0];
                                                                    return fetchAPI(today);
                                                                    };

                                                                    /**
                                                                     * BookingPage - main booking page for Little Lemon restaurant
                                                                      * Manages available times state using useReducer
                                                                       */
                                                                       function BookingPage() {
                                                                         const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

                                                                           return (
                                                                               <section className="booking-page" aria-label="Booking Page">
                                                                                     <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                                                                                         </section>
                                                                                           );
                                                                                           }

                                                                                           export default BookingPage;
