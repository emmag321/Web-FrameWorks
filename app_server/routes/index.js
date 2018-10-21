const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations'); 
//const ctrlOthers = require('../controllers/others');


/* Locations pages */
router.get('/', ctrlLocations.homelist);
/* Register page */
router.get('/register', ctrlLocations.registerInfo);
/* Login Page */
router.get('/login', ctrlLocations.loginInfo);
/* Foods Page */
router.get('/foods', ctrlLocations.foodsInfo);
/* Cart Page */
router.get('/cart', ctrlLocations.cartInfo);
module.exports = router;



//router.get('/location/register/new', ctrlLocations.addReview);
/* Other pages */
//router.get('/register', ctrlOthers.register);


/* Other pages */
//router.get('/register', ctrlOthers.about);
//module.exports = router;


