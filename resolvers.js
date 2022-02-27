const Booking = require('./models/Booking');
const Listing = require('./models/Listing');
const User = require('./models/UserProfile');


exports.resolvers = {
    Query: {
        getUser: async (parent, args, { user, sub }) => {
            return await User.findById(sub);
        },
        getBooking: async (parent, args, { user }) => {
            return await Booking.find({ username: user.username });
        },
        getListing: async (parent, args) => {
            return await Listing.find({ username: args.username });
        },
        getListingByCity: async (parent,args) => {
            return await Listing.find({city: args.city});
        },
        getListingByPostalCode: async (parent,args) => {
            return await Listing.find({postal_code: args.postal_code});
        },
        getListingByName: async (parent,args) => {
            return await Listing.find({listing_title: args.listing_title});
        },

    },

    Mutation: {
        addUser: async (parent, args) => {
            let user = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
            });
            return await user.save();
        },

        login: async (parent, args) => {
            let userProfile = await User.findOne({ username: args.username, password: args.password });
            return  userProfile.id ;
        },
        addListing: async (parent,args) => {
        
            let listing = await Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username
            });
            return await listing.save();
        },

        addBooking: async (parent,args) => {
           
            let booking = await Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username
            });
           return await booking.save();

        },

    }

}

