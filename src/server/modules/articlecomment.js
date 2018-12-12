const db = require('./database.js');

var ArticleComment = function(){};

ArticleComment.prototype.getAll = function(cb){
  const sql = 'select acid,accontent,actime,acstatus from ArticleComment';
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

ArticleComment.prototype.selectComment = function(content,cb){
  const sql = 'select acid,accontent,actime,acstatus from ArticleComment where accontent like ?';
  db.query(sql,['%' + content +'%'],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

ArticleComment.prototype.addItem = function(obj,cb){
  const sql = 'insert into ArticleComment values(?,?,?,?,?,?)';
  db.query(sql,[obj.acid,obj.accontent,Date().slice(0,24),1,obj.uid,obj.sid],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

ArticleComment.prototype.deleteItem = function(id,cb){
  const sql = 'delete from ArticleComment where acid = ?';
  db.query(sql,[id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

ArticleComment.prototype.updateItem = function(status,id,cb){
  const sql = 'update ArticleComment set acstatus = ? where acid = ?';
  db.query(sql,[status,id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = ArticleComment;
