const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
    },
    listing_title: {
        type: String,
        required: [true, 'Please enter the listing title'],
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    street: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    postal_code: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        default: 0.0,
        min: [100, 'Too less price'],
        max: 12000,
        validate(value) {
            if (value < 0.0) {
                throw new Error("Negative price aren't real.");
            }
        }
    },
    email: {
        type: String,
        required: true,
        //index: true, //Optional if unique is defined
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        uppercase: true,
        //minlength:10,
        //maxlength: 50,
        //Custom validation
        validate: function(value) {
          var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailRegex.test(value);
        }
    },
    username: {
        type: String,
        required: [true, 'Please enter your user name'],
        trim: true,
        uppercase: true,
    },
})
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;