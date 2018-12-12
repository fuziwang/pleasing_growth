var express = require('express');
var router = express.Router();
var SayComment = require('../modules/saycomment.js');
const fs = require('fs');

/* GET users listing. */
var saycomment = new SayComment();

router.get('/', function (req, res, next) {
  //console.log(req.query);
  if(JSON.stringify(req.query) !== "{}"){
    if(req.query.status && req.query.id){
      saycomment.updateItem(req.query.status,req.query.id,(err,result)=>{
        if(err){
          res.statusCode = 500;
        }else{
          req.query.status==1?res.send('已启用'):res.send('已停用');
        }
      });
    }else if(req.query.id){
      /*
      users.getImage(req.query.id,(err,result)=>{
        if(err) res.statusCode = 500;
        else{
          var imageUrl = 'public/staticimage/userimage/' + JSON.parse(JSON.stringify(result))[0].uimage;
          //console.log(imageUrl);
          fs.unlinkSync(imageUrl);
        } 
      });
      */
      saycomment.deleteItem(req.query.id,(err,result)=>{
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
        saycomment.deleteItem(e,(err,result)=>{
            if(err) res.statusCode = 500;
        });
      });
      res.send('已删除');
    }  
  }else{
    saycomment.getAll((err,result)=>{
      if(err){
        res.statusCode = 500;
        return;
      }else{
        var item = JSON.stringify(result);
        var obj = JSON.parse(item);
        //console.log(obj);
        if(obj.length !==0 && obj[0].scid == null) obj = [];
        //console.log(obj);
      }
      res.render('saycomment-list',{obj:obj});
    });
  } 
});

router.post('/',(req,res,next)=>{
  saycomment.selectComment(req.body.sccontent,(err,result)=>{
    if(err){
      res.statusCode = 500;
      return;
    }else{
      var obj = JSON.parse(JSON.stringify(result));
      res.render('saycomment-list',{obj:obj});
    }
  })
});
module.exports = router;
