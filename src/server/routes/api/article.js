var express = require('express');
var router = express.Router();
var Article = require('../../modules/api/article.js');
var multer = require('multer');
var article = new Article();

router.get('/',(req,res,next)=>{
  article.getAll((err,result)=>{
    if(err){res.statusCode = 500;}
    else{
      //console.log(result);
      var obj = JSON.parse(JSON.stringify(result));
      //console.log(obj);
      res.json(obj);
    }
  });
});

router.get('/:aid',(req,res,next)=>{
  var obj = req.params;
  console.log(obj);
  article.getArtile(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      var obj = JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/content');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.aid + "-" + file.originalname);            
  }
});

var upload = multer({ storage: storage    });

router.post('/',upload.single('aimage'),(req,res,next)=>{
    var obj = {};
    article.selectAid((err,result)=>{
      if(err){
        res.statusCode = 500;
      }
      var aid = JSON.parse(JSON.stringify(result))[0].c;
      obj.aid = aid;
      obj.aimage = null;
      obj.uid = req.body.uid;
      obj.atitle = req.body.atitle;
      obj.acomment = req.body.acomment;
      obj.acontent = req.body.acontent;
      obj.aprivate = req.body.aprivate;
      article.insertItem(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
          res.send('error');
        } else {
          res.send('ok');
        }
      });
    });
});

module.exports = router;
