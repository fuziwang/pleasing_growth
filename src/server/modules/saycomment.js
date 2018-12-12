const db = require('./database.js');

var SayComment = function(){};

SayComment.prototype.getAll = function(cb){
  const sql = 'select scid,sccontent,sctime,scstatus from SayComment';
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

SayComment.prototype.selectComment = function(content,cb){
  const sql = 'select scid,sccontent,sctime,scstatus from SayComment where sccontent like ?';
  db.query(sql,['%' + content +'%'],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

SayComment.prototype.addItem = function(obj,cb){
  const sql = 'insert into SayComment values(?,?,?,?,?,?)';
  db.query(sql,[obj.scid,obj.sccontent,Date().slice(0,24),1,obj.uid,obj.sid],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

SayComment.prototype.deleteItem = function(id,cb){
  const sql = 'delete from SayComment where scid = ?';
  db.query(sql,[id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

SayComment.prototype.updateItem = function(status,id,cb){
  const sql = 'update SayComment set scstatus = ? where scid = ?';
  db.query(sql,[status,id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = SayComment;
