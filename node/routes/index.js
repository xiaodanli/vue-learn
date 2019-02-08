var express = require('express');
var router = express.Router();
var mymongo1610 = require('mymongo1610');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/newslist',function(req,res,next){
  mymongo1610.find('newslist', function (err, result) {
      if (err) {
          throw err;
      }
      res.json({code:1,data:result})
  });
})

module.exports = router;
