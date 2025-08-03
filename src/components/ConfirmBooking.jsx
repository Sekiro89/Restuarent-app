import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import '../assets/ConfirmBooking.css';

const ConfirmBooking = () => {
    return (
        <div className="confirm-container">
            <div className="confirm-card">
                <h1>🎉 Booking <span>Confirmed!</span></h1>
                <p>Thank you for reserving with <strong>Little Lemon</strong>.</p>
                <p>We look forward to serving you!</p>
                <Link to="/">
                    <button className="back-btn">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ConfirmBooking;