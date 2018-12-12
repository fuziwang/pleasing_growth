const db = require('../database.js');

var SayComment = function(){};

SayComment.prototype.selectScid = function(cb){
    const sql = 'select min(scid+1) c from SayComment c where not exists (select scid from SayComment where scid = c.scid+1);';
    db.query(sql,(err,result)=>{
      if(err){
        cb(true);
        return;                  
      }
      cb(false,result);     
    });
}

SayComment.prototype.getAll = function(cb){
  const sql = 'select scid,sccontent,sctime,uname,uimage,sid from SayComment,User where SayComment.uid = User.uid';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

SayComment.prototype.getSayComment = function(obj,cb){
  const sql = 'select scid,sccontent,sctime,uname,uimage,sid from SayComment,User where SayComment.uid = User.uid and scid = ?';
  db.query(sql,[obj.scid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
SayComment.prototype.insertItem =function(obj,cb){
  const sql = 'insert into SayComment values(?,?,?,?,?,?)';
  db.query(sql,[obj.scid,obj.sccontent,Date().slice(0,24),1,obj.uid,obj.sid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = SayComment;
