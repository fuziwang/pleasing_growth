var express = require('express');
var router = express.Router();
var Back = require('../modules/back.js');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/back');    
  },
  filename: function (req, file, cb) {
      cb(null, req.body.rid + "-" + file.originalname);               
  }
});

var upload = multer({ storage: storage  });

/* GET home page. */
var back = new Back();

router.get('/', function (req, res, next) {
  res.render('back-add');
});

router.post('/',upload.single('rimage'),function(req,res,next){
  console.log(req.body);
  console.log(req.file);
  var obj = {
    rid:req.body.rid,
    rimage:req.file.filename,
    rcontent:req.body.rcontent,
    uid:req.body.uid,
    rtime:req.body.rtime,
    rtel:req.body.rtel
  };
  //console.log(obj);
  //console.log(parseInt(obj.uid));
  if(obj !== ''){
    //console.log(id);
    back.addItem(obj,(err)=>{
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
