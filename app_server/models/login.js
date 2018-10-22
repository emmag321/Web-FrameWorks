const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({ 
 userName: String,
 password: {
	 type: String, 
	 require: true,
	 lowercase: true,
	 min: 6
	 max: 8
	}	 
});

