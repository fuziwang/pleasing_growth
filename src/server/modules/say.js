const db = require('./database.js');

var Say = function(){};

Say.prototype.getAll = function(cb){
  const sql = 'select sid,scontent,simage,stime,sstatus from Say';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Say.prototype.selectSay = function(content,cb){
  const sql = 'select sid,scontent,simage,stime,sstatus from Say where scontent like ?';
  db.query(sql,['%' + content + '%'],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Say.prototype.deleteSay = function(id,cb){
  const sql = 'delete from Say where sid = ?';
  db.query(sql,[id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Say.prototype.updateItem = function(status,id,cb){
  const sql = 'update Say set sstatus = ? where sid = ?';
  db.query(sql,[status,id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Say.prototype.addItem = function(obj,cb){
  const sql='insert into Say values(?,?,?,?,?,?)';
  db.query(sql,[obj.sid,obj.scontent,Date().slice(0,24),obj.simage,1,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Say;
