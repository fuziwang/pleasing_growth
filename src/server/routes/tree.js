var express = require('express');
var router = express.Router();
var Tree = require('../modules/tree.js');
const fs = require('fs');

var tree = new Tree();
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.query);
  if(JSON.stringify(req.query) !== "{}"){
    if(req.query.status && req.query.id){
      tree.updateItem(req.query.status,req.query.id,(err,result)=>{
        if(err) res.statusCode = 500;
        else{
          req.query.status == 1?res.send('已启用'):res.send('已停用');
        }
      });
    } else if(req.query.id){
      //console.log(photoalbum);
      tree.deleteItem(req.query.id,(err,result)=>{
        if(err){
          res.statusCode = 500;
        }else{
          res.send('已删除');
         }
      });
    } else if(req.query.data){
      //console.log(1);
      var data=req.query.data.split(',');
      data.forEach((e)=>{
        tree.deleteItem(e,(err,result)=>{
          if(err) res.statusCode = 500;
        });
      });
      res.send('已删除');
    }
  }else{
    tree.getAll((err,result)=>{
      if(err){
        res.statusCode = 500;
        return;
      }else{
        var item = JSON.stringify(result);
        var obj = JSON.parse(item);
       //console.log(obj);
        if(obj.length !==0 && obj[0].tid == null) obj = [];
        //console.log(obj);
      res.render('tree-list',{obj:obj});
      }
    });
  }
});

router.post('/',(req,res,next)=>{
  tree.selectTree(req.body.tid,(err,result)=>{
    if(err){
      res.statusCode = 500;
      return;
    }else{
    
      var obj = JSON.parse(JSON.stringify(result));
      res.render('tree-list',{obj:obj});
    }
  });
});
module.exports = router;
