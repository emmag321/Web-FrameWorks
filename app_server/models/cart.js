const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({ 
 foodName: {
	 type:String,
	 require: true,
	 lowercase: true,
	 }
	 
 foodQtySelected: {
	 type:Number,
	 require: true,
	 min: 1
	 max: 50
	 }
});

