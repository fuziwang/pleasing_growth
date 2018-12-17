var express = require('express');
var router = express.Router();
var Welcome = require('../modules/welcome.js');
/* GET users listing. */

var welcome = new Welcome();

router.get('/', function (req, res, next) {
    var obj = {};

    welcome.getUser((err,result)=>{
      if(err){
        res.statusCode = 500;
      } else {
        obj.user = JSON.parse(JSON.stringify(result))[0].c;
        welcome.getArticle((err,result)=>{
          if(err){
            res.statusCode = 500;
          } else {
            obj.article = JSON.parse(JSON.stringify(result))[0].c;
            welcome.getSay((err,result)=>{
              if(err){
                res.statusCode = 500;
              } else {
                obj.say = JSON.parse(JSON.stringify(result))[0].c;
                welcome.getoneAge((err,result)=>{
                  if(err){
                      res.statusCode = 500;
                  } else {
                      obj.oneage = JSON.parse(JSON.stringify(result))[0].c;
                      welcome.gettwoAge((err,result)=>{
                        if(err){
                          res.statusCode = 500;
                        } else {
                          obj.twoage = JSON.parse(JSON.stringify(result))[0].c;
                          welcome.getthreeAge((err,result)=>{
                            if(err){
                              res.statusCode = 500;
                            } else{
                              obj.threeage = JSON.parse(JSON.stringify(result))[0].c;
                              welcome.getfourAge((err,result)=>{
                                if(err){
                                  res.statusCode = 500;
                                } else {
                                  obj.fourage = JSON.parse(JSON.stringify(result))[0].c;
                                  console.log(obj);
                                  res.render('welcome',{obj:obj});
                                }
                              })
                            }
                          })
                        }
                      });
                  }
                });
              }
            });
          }
        });
      }
    });
});

module.exports = router;
