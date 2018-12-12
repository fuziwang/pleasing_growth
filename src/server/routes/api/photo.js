var express = require('express');
var router = express.Router();
var Photo = require('../../modules/api/photo.js');
var multer = require('multer');
var photo = new Photo();

router.get('/',(req,res,next)=>{
  photo.getAll((err,result)=>{
    if(err){res.statusCode = 500;}
    else{
      //console.log(result);
      var obj = JSON.parse(JSON.stringify(result));
      //console.log(obj);
      res.json(obj);
    }
  });
});

router.get('/:pid',(req,res,next)=>{
  var obj = req.params;
  console.log(obj);
  photo.getPhoto(obj,(err,result)=>{
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
    cb(null, 'public/static/photos/photos');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.pid + "-" + file.originalname);            
  }
});

var upload = multer({ storage: storage    });

router.post('/',upload.single('plocal'),(req,res,next)=>{
    var obj = {};
    photo.selectPid((err,result)=>{
      if(err){
        res.statusCode = 500;
      }
      var pid = JSON.parse(JSON.stringify(result))[0].c;
      obj.pid = pid;            
    });
    obj.plocal = req.file.filename;
    obj.xid = req.body.xid;
    obj.pname = req.body.pname;
    obj.ptype = req.body.ptype;
    photo.insertItem(obj,(err,result)=>{
      if(err){
        res.statusCode = 500;
        res.send('error');
      }else{
        res.send('ok');
      }
    });
});

module.exports = router;
