var express = require('express');
var router = express.Router();
var Photos = require('../../modules/api/photos.js');
var multer = require('multer');
var photos = new Photos();

router.get('/',(req,res,next)=>{
  photos.getAll((err,result)=>{
    if(err){res.statusCode = 500;}
    else{
      //console.log(result);
      var obj = JSON.parse(JSON.stringify(result));
      //console.log(obj);
      res.json(obj);
    }
  });
});

router.get('/:xid',(req,res,next)=>{
  var obj = req.params;
  console.log(obj);
  photos.getPhotos(obj,(err,result)=>{
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
    cb(null, 'public/static/photos');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.xid + "-" + file.originalname);            
  }
});

var upload = multer({ storage: storage    });

router.post('/',upload.single('xlocal'),(req,res,next)=>{
    var obj = {};
    photos.selectXid((err,result)=>{
      if(err){
        res.statusCode = 500;
      }
      var xid = JSON.parse(JSON.stringify(result))[0].c;
      obj.xid = xid;            
    });
    obj.xlocal = req.file.filename;
    obj.uid = req.body.uid;
    obj.xname = req.body.xname;
    obj.xcount = req.body.xcount;
    photos.insertItem(obj,(err,result)=>{
      if(err){
        res.statusCode = 500;
        res.send('error');
      }else{
        res.send('ok');
      }
    });
});

module.exports = router;
