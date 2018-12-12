var express = require('express');
var router = express.Router();
var Say = require('../modules/say.js');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/say');    
  },
  filename: function (req, file, cb) {
      cb(null, req.body.sid + "-" + file.originalname);               
  }
});

var upload = multer({ storage: storage  });

/* GET home page. */
var say = new Say();

router.get('/', function (req, res, next) {
  res.render('say-add');
});

router.post('/',upload.single('simage'),function(req,res,next){
  console.log(req.body);
  console.log(req.file);
  var obj = {
    sid:req.body.sid,
    simage:req.file.filename,
    scontent:req.body.scontent,
    uid:req.body.uid,
  };
  //console.log(obj);
  //console.log(parseInt(obj.uid));
  if(obj !== ''){
    //console.log(id);
    say.addItem(obj,(err)=>{
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
