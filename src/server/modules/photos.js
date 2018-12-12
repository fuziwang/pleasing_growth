const db = require('./database.js');

var Photos = function(){};

Photos.prototype.getAll = function(cb){
  const sql = 'select xid,xname,xcount,xlocal,xtime,xstatus from Photos';
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}


Photos.prototype.selectPhotos = function(name,cb){
  const sql = 'select xid,xname,xcount,xlocal,xtime,xstatus from Photos where xname like ?';
  db.query(sql,['%' + name +'%'],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Photos.prototype.addItem = function(obj,cb){
  const sql = 'insert into Photos values(?,?,?,?,?,?,?)';
  db.query(sql,[obj.xid,obj.xname,obj.xcount,obj.xlocal,Date().slice(0,24),1,obj.uid],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Photos.prototype.deleteItem = function(id,cb){
  const sql = 'delete from Photos where xid = ?';
  db.query(sql,[id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Photos.prototype.updateItem = function(status,id,cb){
  const sql = 'update Photos set xstatus = ? where xid = ?';
  db.query(sql,[status,id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Photos;
