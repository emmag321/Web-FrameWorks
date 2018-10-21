/* GET 'home' page */
const homelist = function(req, res){
res.render('index', { title: 'E-Food' });
};
/* GET 'register Info' page */
const registerInfo = function(req, res){
res.render('index', { title: 'Register' });
};

/* GET 'login Info' page */
const loginInfo = function(req, res){
res.render('index', { title: 'Login' });
};

/* GET 'foods Info' page */
const foodsInfo = function(req, res){
res.render('index', { title: 'Foods' });
};

/* GET 'cart Info' page */
const cartInfo = function(req, res){
res.render('index', { title: 'Cart' });
};


module.exports = {
homelist,
registerInfo,
loginInfo,
foodsInfo,
cartInfo
};
