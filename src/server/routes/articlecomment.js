var express = require('express');
var router = express.Router();
var ArticleComment = require('../modules/articlecomment.js');
const fs = require('fs');

/* GET users listing. */
var articlecomment = new ArticleComment();

router.get('/', function (req, res, next) {
  //console.log(req.query);
  if(JSON.stringify(req.query) !== "{}"){
    if(req.query.status && req.query.id){
      articlecomment.updateItem(req.query.status,req.query.id,(err,result)=>{
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
      articlecomment.deleteItem(req.query.id,(err,result)=>{
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
        articlecomment.deleteItem(e,(err,result)=>{
            if(err) res.statusCode = 500;
        });
      });
      res.send('已删除');
    }  
  }else{
    articlecomment.getAll((err,result)=>{
      if(err){
        res.statusCode = 500;
        return;
      }else{
        var item = JSON.stringify(result);
        var obj = JSON.parse(item);
        //console.log(obj);
        if(obj.length !==0 && obj[0].acid == null) obj = [];
        //console.log(obj);
      }
      res.render('articlecomment-list',{obj:obj});
    });
  } 
});

router.post('/',(req,res,next)=>{
  articlecomment.selectComment(req.body.accontent,(err,result)=>{
    if(err){
      res.statusCode = 500;
      return;
    }else{
      var obj = JSON.parse(JSON.stringify(result));
      res.render('articlecomment-list',{obj:obj});
    }
  })
});
module.exports = router;
