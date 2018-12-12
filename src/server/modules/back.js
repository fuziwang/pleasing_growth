const db = require('./database.js');

var Back = function(){};

Back.prototype.getAll = function(cb){
  const sql = 'select rid,rcontent,rimage,rtime,rtel,rstatus from Back';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Back.prototype.selectBack = function(content,cb){
  const sql = 'select rid,rcontent,rimage,rtime,rtel,rstatus from Back where rcontent like ?';
  db.query(sql,['%' + content + '%'],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Back.prototype.deleteItem = function(id,cb){
  const sql = 'delete from Back where rid = ?';
  db.query(sql,[id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Back.prototype.updateItem = function(status,id,cb){
  const sql = 'update Back set rstatus = ? where rid = ?';
  db.query(sql,[status,id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Back.prototype.addItem = function(obj,cb){
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
