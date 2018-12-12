var express = require('express');
var router = express.Router();
var ArticleComment = require('../../modules/api/articlecomment.js');
var multer = require('multer');
var articlecomment = new ArticleComment();

router.get('/',(req,res,next)=>{
  articlecomment.getAll((err,result)=>{
    if(err){res.statusCode = 500;}
    else{
      //console.log(result);
      var obj = JSON.parse(JSON.stringify(result));
      //console.log(obj);
      res.json(obj);
    }
  });
});

router.get('/:acid',(req,res,next)=>{
  //console.log(req.params);
  var obj =req.params;
  //console.log(obj);
  articlecomment.getArticleComment(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var obj = JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  });
});
/*
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/say');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.aid + "-" + file.originalname);            
  }
});

var upload = multer({ storage: storage    });
*/
router.post('/',(req,res,next)=>{
    var obj = {};
    articlecomment.selectAcid((err,result)=>{
      if(err){
        res.statusCode = 500;
      }
      var acid = JSON.parse(JSON.stringify(result))[0].c;
      obj.acid = acid;            
    });
    obj.uid = req.body.uid;
    obj.aid = req.body.aid;
    obj.accontent = req.body.accontent;
    articlecomment.insertItem(obj,(err,result)=>{
      if(err){
        res.statusCode = 500;
        res.send('error');
      }else{
        res.send('ok');
      }
    });
});

module.exports = router;
