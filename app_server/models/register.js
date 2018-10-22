const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({ 
 firstName: {
	 type:String,
	 require: true,
	 lowercase: true
	 }
surname: {
	type:String,
	require: true,
	lowercase: true
	}
 Address1: {
	 type:String,
	 require: true,
	 lowercase: true
	 }
 Address2: {
	 type:String,
	 require: true,
	 lowercase: true
	 }
 Town/City:{ 
	type:String,
	require: true,
	lowercase: true
 }
 //county:
 Mob: {
	 type:Number,
	 require: true,
	 lowercase: true,
	 min: 10
	 max: 10
	 }	 
});
