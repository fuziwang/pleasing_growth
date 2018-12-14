var express = require('express');
var router = express.Router();
var Login = require('../modules/login.js');

var login = new Login();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/',function(req,res,next){
  var obj = req.body;
  console.log(obj);
  login.selectAdmin(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var o = JSON.parse(JSON.stringify(result));
      console.log(o);
      if(o.length !== 0){
        res.render('index');
      } else {
        res.send('error');
      }
    }
  })
});
module.exports = router;
