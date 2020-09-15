const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactrestaurantlist"
);

const restaurantSeed = [
  {
    name: "McDonald's",
    photo: "https://i0.wp.com/www.eatthis.com/wp-content/uploads/2018/12/mcdonalds-drive-through-restaurant.jpg?fit=1200%2C879&ssl=1",
    rating: 3,
    date: new Date(Date.now())
  },
  {
    name: "Al Salaam's Deli",
    photo: "https://lh3.googleusercontent.com/5EEZvnIvEDThdx76Ouz3JcuDyeM8fu_N-f7Fq0LKytf4TP-i8proOHcesJSf2cAGfzONrYv8=w1080-h608-p-no-v0",
    rating: 5,
    date: new Date(Date.now())
  },
  {
    name: "Flying Monk",
    photo: "https://images.squarespace-cdn.com/content/v1/5e96fc836416fa329dc4f15f/1587122276984-N1JAA4IBNATH676QG79A/ke17ZwdGBToddI8pDm48kH9jR5hx3LJk45ByS3O5rHoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcNTUMyDjy6MfpzbzDx3u4H7cWlXq1UTRd8A83eZVuAr1ky3BzvGSm2sXPdSQ-40lO/%C2%A92014+flying+monk+01.jpg",
    rating: 5,
    date: new Date(Date.now())
  },
];

db.Store
  .remove({})
  .then(() => db.Store.collection.insertMany(restaurantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
