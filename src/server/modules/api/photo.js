const db = require('../database.js');

var Photo = function(){};

Photo.prototype.selectPid = function(cb){
    const sql = 'select min(pid+1) c from Photo c where not exists (select pid from Photo where pid = c.pid+1);'
    db.query(sql,(err,result)=>{
      if(err){
        cb(true);
        return;                  
      }
      cb(false,result);     
    });
}

Photo.prototype.getAll = function(cb){
  const sql = 'select pid,pname,ptype,ptime,xname,Photo.xid from Photo,Photos where Photo.xid = Photos.xid';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Photo.prototype.getPhoto = function(obj,cb){
  const sql = 'select pid,pname,ptype,ptime,Photo.xid,xname from Photo,Photos where Photo.xid = Photos.xid and pid = ?';
  db.query(sql,[obj.pid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Photo.prototype.insertItem =function(obj,cb){
  const sql = 'insert into Photo values(?,?,?,?,?,?,?)';
  db.query(sql,[obj.pid,obj.pname,obj.ptype,obj.plocal,Date().slice(0,24),1,obj.xid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Photo;
