import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import './App.css';

function App() {
  return (
      <Router>
            <div className="App">
                    <Header />
                            <main>
                                      <Routes>
                                                  <Route path="/" element={<HomePage />} />
                                                              <Route path="/booking" element={<BookingPage />} />
                                                                          <Route path="/confirmed" element={<ConfirmedBooking />} />
                                                                                    </Routes>
                                                                                            </main>
                                                                                                    <Footer />
                                                                                                          </div>
                                                                                                              </Router>
                                                                                                                );
                                                                                                                }
                                                                                                                
                                                                                                                export default App;
