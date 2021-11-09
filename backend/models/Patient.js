const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Patient = new Schema({
   firstName: {
      type: String
   },
   lastName: {
      type: String
   },
   date: {
      type: String
   },
   time: {
      type: String
   },
   address: {
        type: String
    },
    age: {
        type: Number
     },
     gender: {
        type: String
     },
     email: {
        type: String
     },
     contactNumber: {
        type: Number
     },
     description: {
        type: String
     },
     image: {
        type: String
     }
}, {
   collection: 'patients'
})

module.exports = mongoose.model('Patient', Patient)