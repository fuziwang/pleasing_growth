const db = require('./database.js');

var Tree = function(){};

Tree.prototype.getAll = function(cb){
  const sql = 'select tid,tcount,ttime,tstatus from Tree';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Tree.prototype.selectTree = function(id,cb){
  const sql = 'select tid,tcount,ttime,tstatus from Tree where tid like ?';
  db.query(sql,['%' + id + '%'],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Tree.prototype.deleteItem = function(id,cb){
  const sql = 'delete from Tree where tid = ?';
  db.query(sql,[id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Tree.prototype.updateItem = function(status,id,cb){
  const sql = 'update Tree set tstatus = ? where tid = ?';
  db.query(sql,[status,id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Tree.prototype.addItem = function(obj,cb){
  const sql='insert into Tree values(?,?,?,?,?)';
  db.query(sql,[obj.tid,obj.tcount,Date().slice(0,24),1,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Tree;
