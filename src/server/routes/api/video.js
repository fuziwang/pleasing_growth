var express = require('express');
var router = express.Router();
var Video = require('../../modules/api/video.js');
var multer = require('multer');
var video = new Video();

router.get('/',(req,res,next)=>{
  video.getAll((err,result)=>{
    if(err){res.statusCode = 500;}
    else{
      //console.log(result);
      var obj = JSON.parse(JSON.stringify(result));
      //console.log(obj);
      res.json(obj);
    }
  });
});

router.get('/:vid',(req,res,next)=>{
  var obj = req.params;
  console.log(obj);
  video.getVideo(obj,(err,result)=>{
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
    cb(null, 'public/static/video');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.vid + "-" + file.originalname);            
  }
});

var upload = multer({ storage: storage    });

router.post('/',upload.single('vlocal'),(req,res,next)=>{
    var obj = {};
    video.selectVid((err,result)=>{
      if(err){
        res.statusCode = 500;
      }
      var vid = JSON.parse(JSON.stringify(result))[0].c;
      obj.vid = vid;            
    });
    obj.plocal = req.file.filename;
    obj.uid = req.body.uid;
    obj.vname = req.body.vname;
    obj.vtype = req.body.vtype;
    video.insertItem(obj,(err,result)=>{
      if(err){
        res.statusCode = 500;
        res.send('error');
      }else{
        res.send('ok');
      }
    });
});

module.exports = router;
