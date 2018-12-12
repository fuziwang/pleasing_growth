const db = require('../database.js');

var Back = function(){};

Back.prototype.selectRid = function(cb){
  const sql = 'select min(rid+1) c from Back c where not exists (select rid from Back where rid = c.rid+1);';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Back.prototype.getAll=function(cb){
  const sql='select rid,rcontent,rtel,rtime,rimage from Back';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Back.prototype.getBack=function(obj,cb){
  const sql='select rid,rcontent,rtel,rimage from Back where rid= ?';
  db.query(sql,[obj.rid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Back.prototype.insertItem = function(cb){
  const sql='insert into Back values(?,?,?,?,?,?,?)';
  db.query(sql,[obj.rid,obj.rcontent,obj.rtel,Date().slice(0,24),obj.rimage,1,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Back;
