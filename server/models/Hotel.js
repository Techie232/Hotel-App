const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   image: {
      type: String,
   },
   price: {
      type: Number,
      required: true,
   },
   country: {
      type: String,
      required: true,
   },
   location: {
      type: String,
      required: true,
   }
})

module.exports = mongoose.model('Hotel', hotelSchema);