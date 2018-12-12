const db = require('./database.js');

var Photo = function(){};

Photo.prototype.getAll = function(cb){
  const sql = 'select pid,pname,ptype,plocal,ptime,pstatus from Photo';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Photo.prototype.selectPhoto = function(content,cb){
  const sql = 'select pid,pname,ptype,plocal,ptime,pstatus from Photo where pname like ?';
  db.query(sql,['%' + content + '%'],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Photo.prototype.deleteItem = function(id,cb){
  const sql = 'delete from Photo where pid = ?';
  db.query(sql,[id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Photo.prototype.updateItem = function(status,id,cb){
  const sql = 'update Photo set pstatus = ? where pid = ?';
  db.query(sql,[status,id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Photo.prototype.addItem = function(obj,cb){
  const sql='insert into Photo values(?,?,?,?,?,?,?)';
  db.query(sql,[obj.pid,obj.pname,obj.ptype,obj.plocal,Date().slice(0,24),1,obj.xid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Photo;
