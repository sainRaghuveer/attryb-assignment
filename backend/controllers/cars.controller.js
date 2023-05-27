// Import the Car model
const { OEMSpecsModel } = require('../model/oemspecs.model');
const { MarketplaceInventoryModel } = require("../model/marketplaceInventory.model")


const data = [
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
exports.addOemCar = async (req, res) => {
  try {
    const carData = await OEMSpecsModel.insertMany(data);
    res.status(200).send({ carData })
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
}

//find total cars in oemSpecs
exports.findOemCar = async (req, res) => {
  try {
    const carData = await OEMSpecsModel.insertMany(data);
    res.status(200).send({ carData })
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
}

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const user = req.headers.userId;
    const cars = await MarketplaceInventoryModel.find().populate("dealer").populate("oemSpec", "username").exec();
    res.status(200).json({ "data": cars });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new car
exports.addCar = async (req, res) => {
  try {
    const user = req.headers.userId;

    const { odometer, majorScratches, originalPaint, previousBuyers, registrationPlace, image } = req.body;
    const newCar = new MarketplaceInventoryModel({ dealer: user, ...req.body });

    // Save the car to the database
    const savedCar = await newCar.save();

    res.status(200).json({ "msg": "Car data saved in database", "data": savedCar });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Edit a car by ID
exports.editCar = async (req, res) => {
  try {
    const carId = req.params.id;
    const user = req.headers.userId;
    const data = req.body;

    const authDealer = await MarketplaceInventoryModel.find({ dealer: user, _id: carId })

    if (authDealer.length > 0) {
      const updatedCar = await MarketplaceInventoryModel.findByIdAndUpdate(carId, data);
      res.status(200).json({ "msg": "data updated successful", "data": updatedCar });
    } else {
      res.status(400).json({ "msg": "You are not authorized to edit this product" });
    }

  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
};


// Delete a car by ID
exports.deleteCar = async (req, res) => {
  try {
    const carId = req.params.id;
    const user = req.headers.userId;

    const authDealer = await MarketplaceInventoryModel.find({ dealer: user, _id: carId })

    if (authDealer.length > 0) {
      const deletedCar = await MarketplaceInventoryModel.findByIdAndDelete(carId);
      res.status(200).json({ "msg": "data deleted successful", "data": deletedCar });
    } else {
      res.status(400).json({ "msg": "You are not authorized to edit this product" });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
