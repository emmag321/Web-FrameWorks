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

module.exports = {
  about
};

