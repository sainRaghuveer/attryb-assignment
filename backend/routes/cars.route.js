const express = require('express');
const carRouter = express.Router();

const carController = require('../controllers/cars.controller');

// Car routes





//OEMSpecs routes
//post data in oemSpecs
carRouter.post('/cars/oemspecs', carController.addOemCar);

//get data from oemSpecs
carRouter.get('/cars/getoemspecs', carController.findOemCar);




//MarketInventory routes
// Get all cars
carRouter.get('/cars/getdata', carController.getAllCars);

// Add a new car
carRouter.post('/cars/addcar', carController.addCar);

// Edit a car by ID
carRouter.patch('/cars/edit/:id', carController.editCar);

// Delete a car by ID
carRouter.delete('/cars/delete/:id', carController.deleteCar);

module.exports = {
    carRouter
};
