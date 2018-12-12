var express = require('express');
var router = express.Router();
var User = require('../modules/users.js');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/user');    
  },
  filename: function (req, file, cb) {
      cb(null, req.body.uname + "-" + file.originalname);               
  }
});

var upload = multer({ storage: storage  });

/* GET home page. */
var user = new User();

router.get('/', function (req, res, next) {
  res.render('user-add');
});

router.post('/',upload.single('uimage'),function(req,res,next){
  console.log(req.body);
  //console.log(req.file);
  var obj = {
    uid:req.body.uid,
    uimage:req.file.filename,
    uname:req.body.uname,
    usex:req.body.usex,
    uage:req.body.uage,
    uwhere:req.body.uwhere,
    utel:req.body.utel,
    upass:req.body.upass
  };
  console.log(obj);
  if(obj !== ''){
    //console.log(id);
    if(typeof req.body.topic == 'string'){
      user.addTopic(obj.uid,obj.topic,(err,result)=>{
        if(err) res.statusCode = 500;
      })
    }else{
      req.body.topic.forEach((e)=>{
        user.addTopic(obj.uid,e,(err,result)=>{
          if(err) res.statusCode = 500;
        })
      });
    }
    user.addItem(obj,(err)=>{
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
