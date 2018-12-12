var express = require('express');
var router = express.Router();
var Back = require('../modules/back.js');
const fs = require('fs');

var back = new Back();
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.query);
  if(JSON.stringify(req.query) !== "{}"){
    if(req.query.status && req.query.id){
      back.updateItem(req.query.status,req.query.id,(err,result)=>{
        if(err) res.statusCode = 500;
        else{
          req.query.status == 1?res.send('已启用'):res.send('已停用');
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
      back.deleteItem(req.query.id,(err,result)=>{
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
        back.deleteItem(e,(err,result)=>{
            if(err) res.statusCode = 500;
        });
      });
      res.send('已删除');
    }  
  }else{
    back.getAll((err,result)=>{
      if(err){
        res.statusCode = 500;
        return;
      }else{
        var item = JSON.stringify(result);
        var obj = JSON.parse(item);
        //console.log(obj);
        if(obj.length !==0 && obj[0].rid == null) obj = [];
        //console.log(obj);
      }
      res.render('back-list',{obj:obj});
    });
  } 
});

router.post('/',(req,res,next)=>{
  back.selectBack(req.body.rcontent,(err,result)=>{
    if(err){
      res.statusCode = 500;
      return;
    }else{
      var obj = JSON.parse(JSON.stringify(result));
      res.render('back-list',{obj:obj});
    }
  })
});
module.exports = router;
