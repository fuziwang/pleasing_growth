var express = require('express');
var router = express.Router();
var ArticleComment = require('../modules/articlecomment.js');

var articlecomment = new ArticleComment();

router.get('/', function (req, res, next) {
  res.render('articlecomment-add');
});

router.post('/',function(req,res,next){
  //console.log(req.body);
  //console.log(req.file);
  var obj = {
    acid:req.body.acid,
    accontent:req.body.accontent,
    uid:req.body.uid,
    sid:req.body.sid
  };
  //console.log(obj);
  if(obj !== ''){
    articlecomment.addItem(obj,(err)=>{
      var html = '<h3 style="font-weight:normal;font-size:16px;text-align:center;margin-top:30px;">'+ (err?'添加失败':'添加成功') + ',请关闭</h3>';
      if(err){
        res.send(html);
      }else{
        res.send(html);
      }
    });
  }
});

module.exports = router;
