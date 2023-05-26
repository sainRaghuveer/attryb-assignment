const express = require('express');
const carRouter = express.Router();

const carController = require('../controllers/cars.controller');

// Car routes

 // Get all cars
carRouter.get('/cars', carController.getAllCars);

//post data in oemSpecs
carRouter.post('/cars/oemspecs', carController.addOemCar);


// Add a new car
carRouter.post('/cars', carController.addCar); 

// Edit a car by ID
carRouter.put('/cars/:id', carController.editCar);

// Delete a car by ID
carRouter.delete('/cars/:id', carController.deleteCar); 

module.exports = {
    carRouter
};
