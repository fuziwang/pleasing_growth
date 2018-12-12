const db = require('./database.js');

var Video = function(){};

Video.prototype.getAll = function(cb){
  const sql = 'select vid,vname,vtype,vlocal,vtime,vstatus from Video';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Video.prototype.selectVideo = function(content,cb){
  const sql = 'select vid,vname,vtype,vlocal,vtime,vstatus from Video where vname like ?';
  db.query(sql,['%' + content + '%'],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Video.prototype.deleteItem = function(id,cb){
  const sql = 'delete from Video where vid = ?';
  db.query(sql,[id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Video.prototype.updateItem = function(status,id,cb){
  const sql = 'update Video set vstatus = ? where vid = ?';
  db.query(sql,[status,id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Video.prototype.addItem = function(obj,cb){
  const sql='insert into Video values(?,?,?,?,?,?,?)';
  db.query(sql,[obj.vid,obj.vname,obj.vtype,obj.vlocal,Date().slice(0,24),1,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Video;
