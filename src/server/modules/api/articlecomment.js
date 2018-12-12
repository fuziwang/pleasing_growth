const db = require('../database.js');

var ArticleComment = function(){};

ArticleComment.prototype.selectAcid = function(cb){
    const sql = 'select min(acid+1) c from ArticleComment c where not exists (select acid from ArticleComment where acid = c.acid+1);';
    db.query(sql,(err,result)=>{
      if(err){
        cb(true);
        return;                  
      }
      cb(false,result);     
    });
}

ArticleComment.prototype.getAll = function(cb){
  const sql = 'select acid,accontent,actime,uname,uimage,aid from ArticleComment,User where ArticleComment.uid = User.uid';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

ArticleComment.prototype.getArticleComment = function(obj,cb){
  const sql = 'select acid,accontent,actime,uname,uimage,aid from ArticleComment,User where ArticleComment.uid = User.uid and acid = ?';
  db.query(sql,[obj.acid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
ArticleComment.prototype.insertItem =function(obj,cb){
  const sql = 'insert into ArticleComment values(?,?,?,?,?,?)';
  db.query(sql,[obj.acid,obj.accontent,Date().slice(0,24),1,obj.uid,obj.aid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = ArticleComment;
