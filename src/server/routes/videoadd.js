var express = require('express');
var router = express.Router();
var Video = require('../modules/video.js');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/video');    
  },
  filename: function (req, file, cb) {
      cb(null, req.body.vid + "-" + file.originalname);               
  }
});

var upload = multer({ storage: storage  });

/* GET home page. */
var video = new Video();

router.get('/', function (req, res, next) {
  res.render('video-add');
});

router.post('/',upload.single('video'),function(req,res,next){
  console.log(req.body);
  console.log(req.file);
  var obj = {
    vid:req.body.vid,
    vname:req.file.filename,
    vtype:req.file.mimetype,
    vlocal:req.file.destination,
    uid:req.body.uid,
  };
  //fs.mkdirSync('/public/static/photos/photos' + obj.xid);
  console.log(obj);
  //console.log(parseInt(obj.uid));
  if(obj !== ''){
    //console.log(id);
    video.addItem(obj,(err)=>{
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
