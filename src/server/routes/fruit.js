var express = require('express');
var router = express.Router();
var Fruit = require('../modules/fruit.js');
const fs = require('fs');

var fruit = new Fruit();
/* GET users listing. */
router.get('/', function (req, res, next) {
  //console.log(req.query);
  if(JSON.stringify(req.query) !== "{}"){
    if(req.query.status && req.query.id){
      fruit.updateItem(req.query.status,req.query.id,(err,result)=>{
        if(err) res.statusCode = 500;
        else{
          req.query.status == 1?res.send('已启用'):res.send('已停用');
        }
      });
    }else if(req.query.id){
      fruit.deleteItem(req.query.id,(err,result)=>{
        if(err){
          res.statusCode = 500;
        }else{
          res.send('已删除');
        }
      });
    } else if(req.query.data){
      //console.log(1);
      var data = req.query.data.split(',');
      data.forEach((e)=>{
        fruit.deleteItem(e,(err,result)=>{
            if(err) res.statusCode = 500;
        });
      });
      res.send('已删除');
    }  
  }else{
    fruit.getAll((err,result)=>{
      if(err){
        res.statusCode = 500;
        return;
      }else{
        var item = JSON.stringify(result);
        var obj = JSON.parse(item);
        //console.log(obj);
        if(obj.length !==0 && obj[0].fid == null) obj = [];
        //console.log(obj);
      }
      res.render('fruit-list',{obj:obj});
    });
  } 
});

router.post('/',(req,res,next)=>{
  fruit.selectFruit(req.body.fname,(err,result)=>{
    if(err){
      res.statusCode = 500;
      return;
    }else{
    
      var obj = JSON.parse(JSON.stringify(result));
      res.render('fruit-list',{obj:obj});
    }
  })
});
module.exports = router;
