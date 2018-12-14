const db = require('../database.js');

var Say = function(){};

Say.prototype.selectSid = function(cb){
    const sql = 'select min(sid+1) c from Say c where not exists (select sid from Say where sid = c.sid+1);';
    db.query(sql,(err,result)=>{
      if(err){
        cb(true);
        return;                  
      }
      cb(false,result);     
    });
}

Say.prototype.getAll = function(cb){
  const sql = 'select sid,scontent,stime,simage,uname,uimage from Say,User where Say.uid = User.uid';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Say.prototype.getSay = function(obj,cb){
  const sql = 'select sid,scontent,stime,simage,uname from Say,User where Say.uid = User.uid and sid = ?';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Say.prototype.insertItem =function(obj,cb){
  const sql = 'insert into Say values(?,?,?,?,?,?)';
  db.query(sql,[obj.sid,obj.scontent,Date().slice(0,24),obj.simage,1,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Say;
