var express = require('express');
var router = express.Router();
var SayComment = require('../modules/saycomment.js');

var saycomment = new SayComment();

router.get('/', function (req, res, next) {
  res.render('saycomment-add');
});

router.post('/',function(req,res,next){
  //console.log(req.body);
  //console.log(req.file);
  var obj = {
    scid:req.body.scid,
    sccontent:req.body.sccontent,
    uid:req.body.uid,
    sid:req.body.sid
  };
  //console.log(obj);
  if(obj !== ''){
    saycomment.addItem(obj,(err)=>{
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
