/* GET home page */
const index = function(req, res){ 
res.render('index', { title: 'Express' }); 
};
module.exports = { 
index 
};

/* GET home page */
const about = function(req, res){
  res.render('index', { title: 'About' });
};

/* GET login page */
const login = function(req, res){
  res.render('index', { title: 'login' });
};

/* GET register page */
const register = function(req, res){
  res.render('index', { title: 'register' });
};

/* GET food page */
const food = function(req, res){
  res.render('index', { title: 'food' });
};

module.exports = {
  about
};



