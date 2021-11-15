const express = require('express');
const app = express();
const doctorRoute = express.Router();
//Doctor model
let Doctor = require ('../models/Doctor')

//add Doctor
doctorRoute.route('/create').post((req, res, next) => {
    Doctor.create(req.body, (error, data) => {
          if (error) {
              return next(error)
          } else {
              res.json(data)
          }
      })
  });
  
  //get all Doctor
  doctorRoute.route('/').get((req, res) => {
    Doctor.find((error, data) => {
          if (error) {
              return next (error)
          } else {
              res.json(data)
          }
      })
  })
  
  // Get single Doctor
  doctorRoute.route('/read/:id').get((req, res) => {
    Doctor.findById(req.params.id, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    })
  
  // Update Doctor
  doctorRoute.route('/update/:id').put((req, res, next) => {
      Doctor.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
          console.log(error)
        } else {
          res.json(data)
          console.log('Data updated successfully')
        }
      })
    })
  
  //delete Doctor
  doctorRoute.route('/delete/:id').delete((req, res, next) => {  
      Doctor.findByIdAndRemove(req.params.id, (error, data) => {
          if(error) {
              return next(error);
          } else {
              res.status(200).json({
                  msg: data
              })
          }
      })
  })

  module.exports = doctorRoute;
  