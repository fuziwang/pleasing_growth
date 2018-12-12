const db = require('../database.js');

var User = function(){};

User.prototype.getAll = function(obj,cb){
  const sql = 'select * from User where uid = ?';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.getSay = function(obj,cb){
  const sql = 'select * from Say where uid = ?';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.getHobby = function(obj,cb){
  const sql = 'select * from UserHobby where uid = ?';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.getArticle = function(obj,cb){
  const sql = 'select * from Article where uid = ?';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.getConcern = function(obj,cb){
  const sql = 'select * from UserConcern where uid = ?';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.getFans = function(obj,cb){
    const sql = 'select * from UserConcern where upid = ?';
    db.query(sql,[obj.upid],(err,result)=>{
      if(err){
        cb(true);
        return;
      }
      cb(false,result);
    })
}

User.prototype.getUser = function(obj,cb){
  const sql = 'select * from User where utel = ? and upass = ?';
  db.query(sql,[obj.utel,obj.upass],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.selectUid = function(cb){
  const sql = 'select min(uid+1) c from User c where not exists (select uid from User where uid = c.uid+1);';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.insertItem = function(obj,cb){
  const sql = 'insert into User(uid,utel,upass) values(?,?,?)';
  db.query(sql,[obj.uid,obj.utel,obj.upass],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  })
}

User.prototype.updatePass = function(obj,cb){
  const sql = 'update User set upass = ? where utel = ?';
  db.query(sql,[obj.upass,obj.utel],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.updateImage = function(obj,cb){
  const sql = 'update User set uimage = ? where uid = ?';
  db.query(sql,[obj.uimage,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.updateSex = function(obj,cb){
  const sql = 'update User set usex = ? where uid = ?';
  db.query(sql,[obj.usex,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

User.prototype.insertHobby = function(uid,topic,cb){
  const sql = 'insert into UserHobby values(?,?)';
  db.query(sql,[uid,topic],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = User;
