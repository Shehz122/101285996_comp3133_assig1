const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter your user name'],
        unique: [true, "Username already exists"],
        trim: true,
        lowercase: true,
    },
     firstname: {
        type: String,
        required: [true, 'Please enter first name'],
        trim: true,
        lowercase: true
      },
      lastname: {
        type: String,
        alias: 'surname',
        required: true,
        trim: true,
        lowercase: true
      },
      password:{
        type: String,
        required: [true, 'Please enter your password'],
        match: [/^[A-Za-z0-9#$&_]+$/, 'Password must be min 6 characters length and can contain only upper/lower alphabets, 0-9, #, $, &, _'],

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
    type: {
        type: String,
        required: true,
        enum: ['admin', 'customer'],
        trim: true,
        lowercase: true
    }
        
})
const User = mongoose.model('User', UserSchema);
module.exports = User;