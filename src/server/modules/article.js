const db = require('./database.js');

var Article = function(){};

Article.prototype.getAll = function(cb){
  const sql = 'select Article.aid,atitle,acontent,acomment,aimage,atime,GROUP_CONCAT(acloumn),aprivate,astatus from Article,ArticleColumn where Article.aid = ArticleColumn.aid group by Article.aid';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }else{
      cb(false,result);
    }
  })
}

Article.prototype.selectArticle = function(name,cb){
  const sql = 'select Article.aid,atitle,acontent,acomment,aimage,atime,GROUP_CONCAT(acloumn),aprivate,astatus from Article,ArticleColumn where Article.aid = ArticleColumn.aid and atitle like ? group by Article.aid';
  db.query(sql,['%' + name + '%'],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Article.prototype.addColumn = function(id,column,cb){
  const sql = 'insert into ArticleColumn values(?,?)';
  db.query(sql,[id,column],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Article.prototype.addArticle = function(obj,cb){
  const sql = 'insert into Article values(?,?,?,?,?,?,?,?,?)';
  db.query(sql,[obj.aid,obj.atitle,obj.acontent,Date().slice(0,24),obj.acomment,obj.aimage,1,1,obj.uid],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Article.prototype.updateItem = function(status,id,cb){
  const sql = 'update Article set astatus = ? where aid = ?';
  db.query(sql,[status,id],function(err,result){
    if(err){
      cb(true);
      return;                
    }
    cb(false,result);      
  });
}

Article.prototype.deleteItem = function(id,cb){
    const sql = 'delete from Article where aid = ?';
    db.query(sql,[id],function(err,result){
      if(err){
        cb(true);
        return;
      }
      cb(false,result);
    });
}

Article.prototype.deleteColumn = function(id,cb){
    const sql = 'delete from ArticleColumn where aid = ?';
    db.query(sql,[id],function(err,result){
      if(err){
        cb(true);
        return;
      }
      cb(false,result);
    });
}

module.exports = Article;
