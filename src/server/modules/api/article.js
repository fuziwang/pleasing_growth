const db = require('../database.js');

var Article = function(){};

Article.prototype.selectAid = function(cb){
    const sql = 'select min(aid+1) c from Article c where not exists (select aid from Article where aid = c.aid+1);';
    db.query(sql,(err,result)=>{
      if(err){
        cb(true);
        return;                  
      }
      cb(false,result);     
    });
}

Article.prototype.getAll = function(cb){
  const sql = 'select aid,atitle,acontent,atime,acomment,aimage,uname from Article,User where Article.uid = User.uid';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Article.prototype.getArtile = function(obj,cb){
  const sql = 'select aid,atitle,acontent,atime,acomment,aimage,uname from Article,User where Article.uid = User.uid and aid = ?';
  db.query(sql,[obj.aid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Article.prototype.insertItem =function(obj,cb){
  const sql = 'insert into Article values(?,?,?,?,?,?,?,?,?)';
  db.query(sql,[obj.aid,obj.atitle,obj.acontent,Date().slice(0,24),obj.acomment,obj.aimage,1,obj.aprivate,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Article;
