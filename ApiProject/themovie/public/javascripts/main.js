// $("#input_search").on("intput", function(e){
//     //очистить плитку
//     $.get(\\api\find\, function(data){
//         var html =  pugfile(data).compile;
//         plitka.append(html)
//     })
// })


// var loading = false;
// $(window).scroll(function(){
// if((($(window).scrollTop()+$(window).height())+250)>=$(document).height()){
// if(loading == false){
// loading = true;

// // тут мы догружаем?

// var express = require('express');
// var request = require('request');
// var router = express.Router();
// var api_key='f981cff44272509c2bd87ca71cdc774f';
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   request('https://api.themoviedb.org/3/discover/movie?api_key='+api_key+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var moviesArray = JSON.parse(body).results;
//       res.render('index', { movies: moviesArray });
//     }
//   });
// });


// module.exports = router;

// loading = false;
// }
// }
// });


var listElm = document.querySelector('.movie-item');

// Add 20 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 20; i++) {
    var item = document.createElement('div');
    item.innerText = 'Item ' + nextItem++;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

// Initially load some items.
loadMore();