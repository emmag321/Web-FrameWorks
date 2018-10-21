/* GET home page */
const index = function(req, res){ 
res.render('index', { title: 'Express' }); 
};
module.exports = { 
index 
};

/* GET register page */
const register = function(req, res){
  res.render('index', { title: 'Register' });
};

/* GET login page */
const login = function(req, res){
  res.render('index', { title: 'Login' });
};

/* GET foods page */
const foods = function(req, res){
  res.render('index', { title: 'Foods' });
};

module.exports = {
  register,
  login,
  foods
};



