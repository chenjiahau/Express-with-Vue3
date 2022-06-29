var express = require('express');
var router = express.Router();

var newsList = [
  { id: 1, title: 'Et dolores justo diam takimata kasd vero et at sea.' },
  { id: 2, title: 'Tear holy given dote sad oer, the from and earthly.' },
  { id: 3, title: 'Accusam sed dolores accusam duo eirmod et, dolor est invidunt.' },
  { id: 4, title: 'Diam sanctus et magna gubergren erat sed eos ipsum eirmod.' }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Text mode' });
});

router.get('/express-test', function(req, res, next) {
  res.send({ message: 'Your express is connected to react!' });
});

router.get('/list', function(req, res, next) {
  res.send({ data: newsList});
});

router.get('/list/:id', function (req, res, next) {
  let news = newsList.find(news => news.id === parseInt(req.params.id))
  res.send({ data: news});
});

module.exports = router;
