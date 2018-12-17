var express = require('express');
var router = express.Router();
var multer = require('multer');
var Back = require('../../modules/api/back.js');

var back = new Back();
router.get('/',(req,res,next)=>{
  back.getAll((err,result)=>{
    if(err){res.statusCode=500;}
    else{
      var obj=JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  });
});
router.get('/:rid',(req,res,next)=>{
  var obj=req.params;
  console.log(obj);
  back.getBack(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;  
    } else {
      var obj=JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  })
})
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static/back');          
  },
  filename: function (req, file, cb) {
    cb(null, req.body.rid + "-" + file.originalname);        
  }
});

var upload = multer({ storage: storage   });

router.post('/',upload.single('rimage'),(req,res,next)=>{
  var obj = {};
  back.selectRid((err,result)=>{
    if(err){
      res.statusCode = 500;        
    }
    var rid = JSON.parse(JSON.stringify(result))[0].c;
    obj.rid = rid;
    if(obj.rid){
      obj.rimage = req.file.filename;
      obj.uid = null;
      obj.rcontent = req.body.rcontent;
      obj.rtel = req.body.rtel;
      back.insertItem(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
          res.send('error');
        }else{
          res.send('ok');
        }
      });
    }
  });
});

module.exports = router;
