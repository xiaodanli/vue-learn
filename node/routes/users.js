var express = require('express');
var router = express.Router();

var mymongo1610 = require('mymongo1610');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/add',function(req,res,next){
  let {name,pwd} = req.body;
  mymongo1610.insert('userlist',{name:name,pwd:pwd},function (err, result) {
      if (err) {
          throw err;
      }
      res.json({code:1,data:result.insertedId})
  });
})

router.get('/api/userlist',function(req,res,next){
  mymongo1610.find('userlist', function (err, result) {
      if (err) {
          throw err;
      }
      res.json({code:1,data:result})
  });
})

router.get('/api/del',function(req,res,next){
  let id = req.query.id;
  mymongo1610.delete('userlist',{_id:id},function (err, result) {
      if (err) {
          throw err;
      }
      res.json({code:1,msg:'删除成功'})
  });
})

module.exports = router;
