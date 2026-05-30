import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  /**
   * BookingForm component - handles table reservations for Little Lemon restaurant
 * Includes full form validation and accessible markup
 */
  function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
    name: '',
    email: '',
    phone: '',
});

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data) => {
    const newErrors = {};
    if (!data.date) newErrors.date = 'Date is required.';
    else if (new Date(data.date) < new Date().setHours(0,0,0,0))
      newErrors.date = 'Date cannot be in the past.';
    if (!data.time) newErrors.time = 'Time is required.';
    if (!data.guests || data.guests < 1 || data.guests > 10)
      newErrors.guests = 'Guests must be between 1 and 10.';
    if (!data.name || data.name.trim().length < 2)
      newErrors.name = 'Name must be at least 2 characters.';
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = 'Valid email is required.';
    if (!data.phone || !/^\+?[\d\s\-()]{7,15}$/.test(data.phone))
      newErrors.phone = 'Valid phone number is required.';
    return newErrors;
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'date' && dispatch) {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
}
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
}
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
}
    setSubmitted(true);
    navigate('/confirmed', { state: { bookingData: formData } });
};

  const isFormValid = () => {
    return (
      formData.date &&
      formData.time &&
      formData.guests >= 1 &&
      formData.guests <= 10 &&
      formData.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^\+?[\d\s\-()]{7,15}$/.test(formData.phone)
    );
};

  return (
    <section className="booking-form-section" aria-label="Table Reservation Form">
      <h1>Reserve a Table</h1>
      <form
        onSubmit={handleSubmit}
        aria-label="Booking form"
        noValidate
        data-testid="booking-form"
      >
{/* Date */}
        <div className="form-field">
          <label htmlFor="date">
            Choose date <span aria-hidden="true">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
            aria-required="true"
            aria-describedby={errors.date ? 'date-error' : undefined}
            aria-invalid={errors.date ? 'true' : 'false'}
            data-testid="res-date"
          />
{errors.date && (
            <span id="date-error" role="alert" className="error-message">
{errors.date}
            </span>
          )}
        </div>

{/* Time */}
        <div className="form-field">
          <label htmlFor="time">
            Choose time <span aria-hidden="true">*</span>
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            aria-required="true"
            aria-describedby={errors.time ? 'time-error' : undefined}
            aria-invalid={errors.time ? 'true' : 'false'}
            data-testid="res-time"
          >
            <option value="" disabled>
              Select a time
            </option>
{availableTimes && availableTimes.length > 0 ? (
              availableTimes.map((t) => (
                <option key={t} value={t}>
{t}
                </option>
              ))
            ) : (
              <>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="21:30">9:30 PM</option>
              </>
            )}
          </select>
{errors.time && (
            <span id="time-error" role="alert" className="error-message">
{errors.time}
            </span>
          )}
        </div>

{/* Guests */}
        <div className="form-field">
          <label htmlFor="guests">
            Number of guests <span aria-hidden="true">*</span>
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            required
            aria-required="true"
            aria-describedby={errors.guests ? 'guests-error' : undefined}
            aria-invalid={errors.guests ? 'true' : 'false'}
            data-testid="guests"
          />
{errors.guests && (
            <span id="guests-error" role="alert" className="error-message">
{errors.guests}
            </span>
          )}
        </div>

{/* Occasion */}
        <div className="form-field">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            data-testid="occasion"
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Date Night">Date Night</option>
            <option value="Business Meal">Business Meal</option>
            <option value="Other">Other</option>
          </select>
        </div>

{/* Name */}
        <div className="form-field">
          <label htmlFor="name">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
{errors.name && (
            <span id="name-error" role="alert" className="error-message">
{errors.name}
            </span>
          )}
        </div>

{/* Email */}
        <div className="form-field">
          <label htmlFor="email">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
{errors.email && (
            <span id="email-error" role="alert" className="error-message">
{errors.email}
            </span>
          )}
        </div>

{/* Phone */}
        <div className="form-field">
          <label htmlFor="phone">
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            aria-required="true"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            aria-invalid={errors.phone ? 'true' : 'false'}
          />
{errors.phone && (
            <span id="phone-error" role="alert" className="error-message">
{errors.phone}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!isFormValid()}
          aria-label="Make your reservation"
          data-testid="submit-booking"
        >
          Make Your Reservation
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
