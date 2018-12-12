var express = require('express');
var router = express.Router();
var Article = require('../modules/article.js');

var artile = new Article();

/* GET home page. */
router.get('/', function (req, res, next) {
  if(JSON.stringify(req.query) !== "{}"){
    if(req.query.status && req.query.id){
      artile.updateItem(req.query.status,req.query.id,(err,result)=>{
        if(err){res.statusCode = 500;res.end('database error');}
        else{
          req.query.status==1?res.send('已启用'):res.send('已停用');
        }
      });
    } else if(req.query.id){
      artile.deleteColumn(req.query.id,(err,result)=>{
        if(err){
          res.statusCode = 500;
        }
      });
      artile.deleteItem(req.query.id,(err,result)=>{
        if(err){
          res.statusCode = 500;
          res.end('databse error');
        }else{
          res.send('已删除');
        }
      });
    } else if(req.query.data){
      console.log(req.query.data);
      var data = req.query.data.split(',');
      console.log(data);
      data.forEach((e)=>{
        console.log(e);
        artile.deleteColumn(e,(err,result)=>{
          if(err) res.statusCode = 500;
        });
        artile.deleteItem(e,(err,result)=>{
          if(err){ res.statusCode = 500;}
        });
      });
      res.send('已删除');
    }
  } else {
    artile.getAll((err,result)=>{
      console.log(err);
      if(err){
        res.statusCode = 500;
        res.end('database error');
      }else{
        var item = JSON.stringify(result);
        var obj = JSON.parse(item);
        //console.log(obj);
        if(obj.length !==0 && obj[0].aid == null) obj = [];
        //console.log(obj);
        res.render('article-list',{obj:obj});
      } 
    });
  }
});

router.post('/',(req,res,next)=>{
  console.log(req.body.uname);
  artile.selectArticle(req.body.uname,(err,result)=>{
    if(err){
      res.statusCode = 500;
      return;
    }else{
      var obj = JSON.parse(JSON.stringify(result));
      res.render('article-list',{obj:obj});
    }
  });
});
module.exports = router;
