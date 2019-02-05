var express = require('express');
var request = require('request');
var router = express.Router();
var api_key='f981cff44272509c2bd87ca71cdc774f';
/* GET home page. */
router.get('/:pagination', function(req, res, next) {
  var pagination = req.params.pagination;
  request('https://api.themoviedb.org/3/discover/movie?api_key='+api_key+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1', function (error, response, body) {
  // request('https://api.themoviedb.org/3/discover/movie?api_key=f981cff44272509c2bd87ca71cdc774f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var moviesArray = JSON.parse(body).results;
      res.render('index', { movies: moviesArray });
    }
  });
});

module.exports = router;
