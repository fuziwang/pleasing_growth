var express = require('express');
var router = express.Router();
var multer = require('multer');
var Article = require('../modules/article.js');

var artile = new Article();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/content');          
  },
  filename: function (req, file, cb) {
    cb(null, req.body.aid + "-" + file.originalname);          
  }
});

var upload = multer({ storage: storage   });


router.get('/', function (req, res, next) {
  res.render('article-add');
});

router.post('/',upload.fields([{name:'acontent',maxCount:1},{name:'aimage',maxCount:1}]),(req,res,next)=>{
  console.log(req.body);
  console.log(req.files);
  
  var obj = {
    aid:req.body.aid,
    atitle:req.body.atitle,
    acomment:req.body.acomment,
    acolumn:req.body.acolumn,
    acontent:req.files.acontent[0].filename,
    aimage:req.files.aimage[0].filename,
    uid:req.body.uid,
  };
  
  //console.log(obj);
  
  if(obj !== ''){
    if(typeof obj.acolumn == 'string'){
      artile.addColumn(obj.aid,obj.acolumn,(err,result)=>{
        if(err) res.statusCode = 500;
      });
    } else{
      obj.acolumn.forEach((e)=>{
        artile.addColumn(obj.aid,e,(err,result)=>{
          if(err) res.statusCode = 500;
        });
      });
    }
    artile.addArticle(obj,(err,result)=>{
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
