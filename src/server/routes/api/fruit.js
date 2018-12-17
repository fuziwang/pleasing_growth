var express = require('express');
var router = express.Router();
var multer = require('multer');
var Fruit = require('../../modules/api/fruit.js');

var fruit = new Fruit();
router.get('/',(req,res,next)=>{
  fruit.getAll((err,result)=>{
    if(err){res.statusCode=500;}
    else{
      var obj=JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  });
});
router.get('/:tid',(req,res,next)=>{
  var obj=req.params;
  console.log(obj);
  fruit.getFruit(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;  
    } else {
      var obj=JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  })
})
/*
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/back');          
  },
  filename: function (req, file, cb) {
      cb(null, req.body.rtel + "-" + file.originalname);        
  }
});

var upload = multer({ storage: storage   });
*/
router.post('/',(req,res,next)=>{
  var obj = {};
  fruit.selectFid((err,result)=>{
    if(err){
      res.statusCode = 500;        
    }
    var fid = JSON.parse(JSON.stringify(result))[0].c;
    obj.fid = fid;
    if(obj.fid){
      obj.fname = req.body.fname,
      obj.tid = req.body.tid;
      fruit.insertItem(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
          res.send('error');
        }else{
          res.send('ok');
        }
      });
    }
  });
});

module.exports = router;
