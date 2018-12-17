const db = require('./database.js');

var Fruit = function(){};

Fruit.prototype.getAll = function(cb){
  const sql = 'select fid,fname,ftime,fstatus from Fruit';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Fruit.prototype.selectFruit = function(name,cb){
  const sql = 'select fid,fname,ftime,fstatus from Fruit where fname like ?';
  db.query(sql,['%' + name + '%'],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Fruit.prototype.deleteItem = function(id,cb){
  const sql = 'delete from Fruit where fid = ?';
  db.query(sql,[id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  });
}

Fruit.prototype.updateItem = function(status,id,cb){
  const sql = 'update Fruit set fstatus = ? where fid = ?';
  db.query(sql,[status,id],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Fruit.prototype.addItem = function(obj,cb){
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
