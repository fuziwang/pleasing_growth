var express = require('express');
var router = express.Router();
var SayComment = require('../../modules/api/saycomment.js');
var multer = require('multer');
var saycomment = new SayComment();

router.get('/',(req,res,next)=>{
  saycomment.getAll((err,result)=>{
    if(err){res.statusCode = 500;}
    else{
      console.log(result);
      var obj = JSON.parse(JSON.stringify(result));
      console.log(obj);
      res.json(obj);
    }
  });
});

router.get('/:scid',(req,res,next)=>{
  //console.log(req.params);
  var obj =req.params;
  //console.log(obj);
  saycomment.getArticleComment(obj,(err,result)=>{
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
    saycomment.selectScid((err,result)=>{
      if(err){
        res.statusCode = 500;
      }
      var scid = JSON.parse(JSON.stringify(result))[0].c;
      obj.scid = scid;
      obj.uid = req.body.uid;
      obj.sid = req.body.sid;
      obj.sccontent = req.body.sccontent;
      saycomment.insertItem(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
          res.send('error');
        }else{
          res.send('ok');
        }
      });
    });
});

module.exports = router;
