var express = require('express');
var router = express.Router();
var Photos = require('../modules/photos.js');
const fs = require('fs');

var photos = new Photos();
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.query);
  if(JSON.stringify(req.query) !== "{}"){
    if(req.query.status && req.query.id){
      photos.updateItem(req.query.status,req.query.id,(err,result)=>{
        if(err) res.statusCode = 500;
        else{
          req.query.status == 1?res.send('已启用'):res.send('已停用');
        }
      });
    }else if(req.query.id){
      photos.deleteItem(req.query.id,(err,result)=>{
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
        photos.deleteItem(e,(err,result)=>{
            if(err) res.statusCode = 500;
        });
      });
      res.send('已删除');
    }  
  }else{
    photos.getAll((err,result)=>{
      if(err){
        res.statusCode = 500;
        return;
      }else{
        var item = JSON.stringify(result);
        var obj = JSON.parse(item);
        //console.log(obj);
        if(obj.length !==0 && obj[0].xid == null) obj = [];
        //console.log(obj);
      }
      res.render('photos-list',{obj:obj});
    });
  } 
});

router.post('/',(req,res,next)=>{
  photos.selectPhotos(req.body.xname,(err,result)=>{
    if(err){
      res.statusCode = 500;
      return;
    }else{
      var obj = JSON.parse(JSON.stringify(result));
      res.render('photos-list',{obj:obj});
    }
  })
});
module.exports = router;
