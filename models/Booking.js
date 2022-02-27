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
        required: true,
        default: Date.now,

    },
    booking_start: {
        type: Date,
        required: true
    },
    booking_end: {
        type: Date,
        required: true
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