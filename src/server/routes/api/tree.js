var express = require('express');
var router = express.Router();
var multer = require('multer');
var Tree = require('../../modules/api/tree.js');

var tree = new Tree();

router.post('/',(req,res,next)=>{
  var obj = {};
  obj.tid = req.body.uid;
  obj.tcount=0;
  obj.uid = req.body.uid;
  tree.insertItem(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
      res.send('error');
    }else{
      res.send('ok');
    }
  });
});

module.exports = router;
