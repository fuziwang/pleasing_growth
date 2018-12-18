var express = require('express');
var router = express.Router();
var multer = require('multer');
var Fruit = require('../../modules/api/fruit.js');
var Tree = require('../../modules/api/tree.js');

var fruit = new Fruit();
var tree = new Tree();

router.get('/:tid',(req,res,next)=>{
  var obj=req.params;
  console.log(obj);
  fruit.getAll(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;  
    } else {
      var obj=JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  })
})

router.post('/delete',(req,res,next)=>{
  var obj = req.body;
  fruit.deleteItem(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
      res.send('error');
    } else {
      tree.updateTcount(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
          res.send('error');
        } else {
          res.send('ok');
        }
      });
    }
  });
})

router.post('/update',(req,res,next)=>{
  var obj = req.body;
  fruit.updateItem(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
      res.send('error');
    } else {
      res.send('ok');
    }
  });
})

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
          tree.updateItem(obj,(err,result)=>{
            if(err){
              res.statusCode = 500;
              res.send('error');
            } else {
              res.send('ok');
            }
          });
        }
      });
    }
  });
});

module.exports = router;
