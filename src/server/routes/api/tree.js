var express = require('express');
var router = express.Router();
var multer = require('multer');
var Tree = require('../../modules/api/tree.js');

var tree = new Tree();
router.get('/',(req,res,next)=>{
  tree.getAll((err,result)=>{
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
  tree.getTree(obj,(err,result)=>{
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
  tree.selectTid((err,result)=>{
    if(err){
      res.statusCode = 500;        
    }
    var tid = JSON.parse(JSON.stringify(result))[0].c;
    obj.tid = tid;
    if(obj.tid){
      obj.tcount=req.body.tcount,
      obj.uid = req.body.uid;
      tree.insertItem(obj,(err,result)=>{
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
