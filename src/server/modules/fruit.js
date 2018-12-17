const db = require('../database.js');

var Fruit = function(){};

Fruit.prototype.selectFid = function(cb){
  const sql = 'select min(fid+1) c from Fruit c where not exists (select fid from Fruit where fid = c.fid+1);';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
      }
    cb(false,result);
  });
}
Fruit.prototype.getAll = function(cb){
  const sql='select fid,fname,Fruit.tid from Fruit,Tree where Fruit.tid = Tree.tid';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Fruit.prototype.getFruit = function(obj,cb){
  const sql='select fid,fname,Fruit.tid from Fruit,Tree where Fruit.tid= ? and Fruit.tid = Tree.tid';
  db.query(sql,[obj.tid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Fruit.prototype.insertItem = function(cb){
  const sql='insert into Fruit values(?,?,?,?,?)';
  db.query(sql,[obj.fid,obj.fname,Date().slice(0,24),1,obj.tid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Fruit;
