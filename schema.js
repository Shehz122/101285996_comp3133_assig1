const { gql } = require('apollo-server-express');

exports.typeDefs = gql`

    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }
    type Booking {
        id: ID!
        listing_id: String!
        booking_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        username: String!
    }
    type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Int!
        email: String!
        username: String!
    }
    type Query {
        getUser: User!
        getBooking: [Booking]
        getListingByCity(city: String!): [Listing]
        getListing(username: String!): [Listing]
        getListingByName(listing_title: String!): [Listing]
        getListingByPostalCode(postal_code: String!): [Listing]
    }
    type Mutation {
        addUser(
            username: String!
            firstname: String!
            lastname: String!
            email: String!
            password: String!
            type: String!
        ): User
        login(
            username: String!
            password: String!
        ): String
        addListing(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!
        ): Listing
        addBooking(
            listing_id: String!
            booking_id: String!
            booking_start: String!
            booking_end: String!
            username: String!
        ): Booking
    }
`

