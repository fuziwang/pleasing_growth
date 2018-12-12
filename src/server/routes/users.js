var express = require('express');
var router = express.Router();
var Users = require('../modules/users.js');
const fs = require('fs');

/* GET users listing. */
var users = new Users();
router.get('/', function (req, res, next) {
  //console.log(req.query);
  if(JSON.stringify(req.query) !== "{}"){
    if(req.query.status && req.query.id){
      users.updateItem(req.query.status,req.query.id,(err,result)=>{
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
      users.deleteHobby(req.query.id,(err,result)=>{
        if(err){res.statusCode = 500};
      });
      users.deleteItem(req.query.id,(err,result)=>{
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
        /*
        users.getImage(e,(err,result)=>{
          if(err) res.statusCode = 500;
          else{
            var imageUrl = 'public/staticimage/userimage/' + JSON.parse(JSON.stringify(result))[0].uimage;
            //console.log(imageUrl);
            fs.unlinkSync(imageUrl);
          } 
        });
        */
        users.deleteHobby(e,(err,result)=>{
          if(err) res.statusCode = 500;
        })
        users.deleteItem(e,(err,result)=>{
            if(err) res.statusCode = 500;
        });
      });
      res.send('已删除');
    }  
  }else{
    users.getAll((err,result)=>{
      if(err){
        res.statusCode = 500;
        return;
      }else{
        var item = JSON.stringify(result);
        var obj = JSON.parse(item);
        //console.log(obj);
        if(obj.length !==0 && obj[0].uid == null) obj = [];
        //console.log(obj);
      }
      res.render('user-list',{obj:obj});
    });
  } 
});

router.post('/',(req,res,next)=>{
  users.selectUser(req.body.uname,(err,result)=>{
    if(err){
      res.statusCode = 500;
      return;
    }else{
      var obj = JSON.parse(JSON.stringify(result));
      res.render('user-list',{obj:obj});
    }
  })
});
module.exports = router;
