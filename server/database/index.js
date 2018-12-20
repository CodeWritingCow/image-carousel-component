////////////////////////////////////////////////////////////
//
//    Connect to DB and Export Connection

// db is an object who's keys define the interface to the database
const db = {};

/////////////////////////////////////////
//  Import ORM and connect to db

const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect(
  'mongodb://localhost/listingImages',
  { useNewUrlParser: true }
);

// Expose database connection
db.connection = mongoose.connection;

db.connection.on('error', err => {
  console.log('Error connecting to database', err);
});
db.connection.once('open', () => {
  console.log('Successfully connected to database');
});


// Import schema and expose them on the db object
const { ListingImages, listingImagesSchema } = require('./schema.js');

db.ListingImages = ListingImages;
db.listingImagesSchema = listingImagesSchema;

module.exports = db;
