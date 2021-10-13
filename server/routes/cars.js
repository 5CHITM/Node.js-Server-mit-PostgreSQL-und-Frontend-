const express = require('express');
const { getCars, getCar, deleteCar, changeStatusCar, addCar } = require('../controllers/cars.js');

const router = express.Router();

router.get('/cars', getCars);
router.get('/car/:id', getCar);
router.patch('/car/:id', changeStatusCar);
router.delete('/cars/:id', deleteCar);
router.post('/cars', addCar);

module.exports = router;
