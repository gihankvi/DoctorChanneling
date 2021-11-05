const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Doctor = new Schema({
   firstName: {
      type: String
   },
   lastName: {
      type: String
   },
   dob: {
      type: String
   },
   gender: {
      type: String
   },
   speciality: {
        type: String
    },
    phone: {
        type: Number
     },
     email: {
        type: String
     },
     webUrl: {
        type: String
     },
     image: {
        type: String
     },
     need: {
        type: String
     }
}, {
   collection: 'doctors'
})

module.exports = mongoose.model('Doctor', Doctor)