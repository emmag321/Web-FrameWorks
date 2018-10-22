const mongoose = require('mongoose');

const foodsSchema = new mongoose.Schema({ 
	foodName: {
	 type:String,
	 require: true,
	 lowercase: true
	 } 
	 
	 FoodQtySelected: {
	 type:Number,
	 require: false,
	 min: 1
	 max: 50
	 }
	 
	 foodTypes: {
	 type:String,
	 require: true,
	 lowercase: true
	 }
});
