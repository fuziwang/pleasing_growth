var express = require('express');
var router = express.Router();
var Photo = require('../modules/photo.js');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/photos/photos' + req.body.xid);    
  },
  filename: function (req, file, cb) {
      cb(null, req.body.pid + "-" + file.originalname);               
  }
});

var upload = multer({ storage: storage  });

/* GET home page. */
var photo = new Photo();

router.get('/', function (req, res, next) {
  res.render('photo-add');
});

router.post('/',upload.single('pimage'),function(req,res,next){
  //console.log(req.body);
  //console.log(req.file);
  var obj = {
    pid:req.body.pid,
    pname:req.file.filename,
    ptype:req.file.mimetype,
    plocal:req.file.destination,
    xid:req.body.xid,
  };
  //fs.mkdirSync('/public/static/photos/photos' + obj.xid);
  console.log(obj);
  //console.log(parseInt(obj.uid));
  if(obj !== ''){
    //console.log(id);
    photo.addItem(obj,(err)=>{
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
