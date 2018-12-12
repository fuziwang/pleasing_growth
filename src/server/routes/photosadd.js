var express = require('express');
var router = express.Router();
var Photos = require('../modules/photos.js');

var photos = new Photos();

router.get('/', function (req, res, next) {
  res.render('photos-add');
});

router.post('/',function(req,res,next){
  //console.log(req.body);
  //console.log(req.file);
  var obj = {
    xid:req.body.xid,
    xname:req.body.xname,
    xcount:req.body.xcount,
    xlocal:'static/photos/photos' + req.body.xid,
    uid:req.body.uid,
  };
  console.log(obj);
  //console.log(parseInt(obj.uid));
  if(obj !== ''){
    //console.log(id);
    photos.addItem(obj,(err)=>{
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
