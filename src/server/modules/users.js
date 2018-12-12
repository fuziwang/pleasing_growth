const db = require('./database.js');

var Users = function(){};

Users.prototype.getAll = function(cb){
  const sql = 'select User.uid,uname,uimage,usex,uage,uwhere,upass,utel,GROUP_CONCAT(topic),ustatus,udescribe from User,UserHobby where User.uid = UserHobby.uid group by User.uid;';
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}


Users.prototype.selectUser = function(name,cb){
  const sql = 'select User.uid,uname,uimage,usex,uage,uwhere,upass,utel,GROUP_CONCAT(topic),ustatus,udescribe from User,UserHobby where User.uid = UserHobby.uid and uname like ? group by User.uid;';
  db.query(sql,['%' + name +'%'],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Users.prototype.addItem = function(obj,cb){
  const sql = 'insert into User values(?,?,?,?,?,?,?,?,?,?,?,?)';
  db.query(sql,[obj.uid,obj.uname,obj.uimage,obj.usex,obj.uage,obj.uwhere,obj.utel,obj.upass,null,null,null,1],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Users.prototype.addTopic = function(id,topic,cb){
  const sql = 'insert into UserHobby values(?,?)';
  db.query(sql,[id,topic],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Users.prototype.deleteItem = function(id,cb){
  const sql = 'delete from User where uid = ?';
  db.query(sql,[id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Users.prototype.deleteHobby = function(id,cb){
  const sql = 'delete from UserHobby where uid = ?';
  db.query(sql,[id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Users.prototype.updateItem = function(status,id,cb){
  const sql = 'update User set ustatus = ? where uid = ?';
  db.query(sql,[status,id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Users.prototype.getImage = function(id,cb){
  const sql = 'select uimage from User where uid = ?';
  db.query(sql,[id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}


module.exports = Users;
