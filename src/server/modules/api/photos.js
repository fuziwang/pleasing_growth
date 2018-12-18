const db = require('../database.js');

var Photos = function(){};

Photos.prototype.selectXid = function(cb){
    const sql = 'select min(xid+1) c from Photos c where not exists (select xid from Photos where xid = c.xid+1);';
    db.query(sql,(err,result)=>{
      if(err){
        cb(true);
        return;                  
      }
      cb(false,result);     
    });
}

Photos.prototype.getAll = function(cb){
  const sql = 'select xid,xname,xcount,xtime,uid from Photos';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Photos.prototype.getPhotos = function(obj,cb){
  const sql = 'select xid,xname,xcount,xtime,uid from Photos where xid = ?';
  db.query(sql,[obj.xid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Photos.prototype.insertItem =function(obj,cb){
  const sql = 'insert into Photos values(?,?,?,?,?,?,?)';
  db.query(sql,[obj.xid,obj.xname,obj.xcount,obj.xlocal,Date().slice(0,24),1,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Photos.prototype.updateItem = function(obj,cb){
  const sql = 'update Photos set xcount = xcount+1 where xid= ?';
  db.query(sql,[obj.xid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
module.exports = Photos;
