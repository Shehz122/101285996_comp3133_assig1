const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
    },
    booking_id: {
        type: String,
        required: true,
    },
    booking_date: {
        type: Date,
    },
    booking_start: {
        type: Date,
    },
    booking_end: {
        type: Date,
    },
    username: {
        type: String,
        required: [true, 'Please enter your user name'],
        trim: true,
        uppercase: true,
    },
})
const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;