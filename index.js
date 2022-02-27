const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//import typedefs and resolvers
const TypeDefs = require('./schema')
const Resolvers = require('./resolvers')

//import ApolloServer
const { ApolloServer } = require('apollo-server-express')

//Store sensitive information to env variables
const dotenv = require('dotenv');
dotenv.config();

//mongoDB Atlas Connection String
// const mongodb_atlas_url = process.env.MONGODB_URL;

//Connection String
mongoose.connect("mongodb+srv://Shehzad:Shey123@cluster0.ulz6r.mongodb.net/101285996_comp3133_assig1", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Successfully Mongodb connection')
}).catch(err => {
  console.log('No connection')
});

//Define Apollo Server
const server = new ApolloServer({
  typeDefs: TypeDefs.typeDefs,
  resolvers: Resolvers.resolvers,
})

//Define Express Server
const app = express();
app.use(bodyParser.json());
app.use('*', cors());

//Add Express app as middleware to Apollo Server
server.applyMiddleware({app})

//console.log(server)

//Start listen 
app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`));