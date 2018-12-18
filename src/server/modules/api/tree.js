const db = require('../database.js');

var Tree = function(){};

Tree.prototype.selectTid = function(cb){
  const sql = 'select min(tid+1) c from Tree c where not exists (select tid from Tree where tid = c.tid+1);';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Tree.prototype.updateItem = function(obj,cb){
  const sql = 'update Tree set tcount = tcount + 1 where tid = ?';
  db.query(sql,[obj.tid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Tree.prototype.updateTcount = function(obj,cb){
  const sql= 'update Tree set tcount=tcount-1 where tid = ?';
  db.query(sql,[obj.tid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Tree.prototype.insertItem = function(cb){
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
