// Import the Car model
const { OEMSpecsModel } = require('../model/oemspecs.model');


const data=[
    {
      "model": "Honda City",
      "year": 2021,
      "listPrice": 20000,
      "colors": ["White", "Silver", "Black"],
      "mileage": 5000,
      "power": 150,
      "maxSpeed": 180
    },
    {
      "model": "Toyota Corolla",
      "year": 2018,
      "listPrice": 18000,
      "colors": ["Red", "Blue", "Gray"],
      "mileage": 8000,
      "power": 140,
      "maxSpeed": 170
    },
    {
      "model": "BMW 3 Series",
      "year": 2019,
      "listPrice": 30000,
      "colors": ["Black", "White", "Silver"],
      "mileage": 6000,
      "power": 200,
      "maxSpeed": 200
    },
    {
      "model": "Audi A4",
      "year": 2020,
      "listPrice": 28000,
      "colors": ["Blue", "Gray", "White"],
      "mileage": 7000,
      "power": 180,
      "maxSpeed": 190
    },
    {
      "model": "Mercedes-Benz C-Class",
      "year": 2017,
      "listPrice": 25000,
      "colors": ["Black", "Silver", "Red"],
      "mileage": 9000,
      "power": 160,
      "maxSpeed": 180
    },
    {
      "model": "Maruti Swift",
      "year": 2019,
      "listPrice": 12000,
      "colors": ["Red", "Blue", "White"],
      "mileage": 10000,
      "power": 100,
      "maxSpeed": 150
    },
    {
      "model": "Hyundai Tucson",
      "year": 2020,
      "listPrice": 22000,
      "colors": ["White", "Silver", "Black"],
      "mileage": 8000,
      "power": 150,
      "maxSpeed": 180
    },
    {
      "model": "Ford Mustang",
      "year": 2018,
      "listPrice": 35000,
      "colors": ["Blue", "Black", "Yellow"],
      "mileage": 6000,
      "power": 300,
      "maxSpeed": 250
    },
    {
      "model": "Chevrolet Camaro",
      "year": 2019,
      "listPrice": 33000,
      "colors": ["Red", "Black", "White"],
      "mileage": 7000,
      "power": 280,
      "maxSpeed": 240
    },
    {
      "model": "Nissan Altima",
      "year": 2020,
      "listPrice": 19000,
      "colors": ["Black", "Gray", "Silver"],
      "mileage": 9000,
      "power": 160,
      "maxSpeed": 190
    }
  ]
  


//add cars in oemSpecs
exports.addOemCar=async(req,res)=>{
    try{
        const carData = await OEMSpecsModel.insertMany(data);
        res.status(200).send({carData})
    }catch(error){
        console.log(error.message);
        res.send(error.message);
    }
}


// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new car
exports.addCar = async (req, res) => {
  try {
    // Logic to add a new car
    // Retrieve car data from the request body
    const { make, model, year, price } = req.body;

    // Create a new car instance
    const newCar = new Car({ make, model, year, price });

    // Save the car to the database
    const savedCar = await newCar.save();

    // Respond with the saved car
    res.status(200).json(savedCar);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
};

// Edit a car by ID
exports.editCar = async (req, res) => {
  try {
    // Logic to edit a car
    const carId = req.params.id;
    // Retrieve car data from the request body
    const { make, model, year, price } = req.body;

    // Find the car by ID and update its properties
    const updatedCar = await Car.findByIdAndUpdate(carId, { make, model, year, price }, { new: true });

    // Respond with the updated car
    res.status(200).json(updatedCar);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
};

// Delete a car by ID
exports.deleteCar = async (req, res) => {
  try {
    // Logic to delete a car
    const carId = req.params.id;

    // Find the car by ID and remove it from the database
    await Car.findByIdAndRemove(carId);

    // Respond with a success message
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
};
