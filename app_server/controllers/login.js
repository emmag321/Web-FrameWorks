/* GET 'home' page */
const homelist = function(req, res){
res.render('index', { title: 'Home' });
};
/* GET 'Login info' page */
const locationInfo = function(req, res){
res.render('index', { title: 'Login info' });
};
/* GET 'Add review' page */
const addReview = function(req, res){
res.render('index', { title: 'Add review' });
};
module.exports = {
homelist,
locationInfo,
addReview
};