const db = require('./database.js');

var Welcome = function(){};

Welcome.prototype.getUser = function(cb){
  const sql = 'select COUNT(uid) c from User';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Welcome.prototype.getArticle = function(cb){
  const sql = 'select COUNT(aid) c  from Article';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Welcome.prototype.getSay = function(cb){
  const sql = 'select COUNT(sid) c from Say';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Welcome.prototype.getoneAge = function(cb){
  const sql = 'select COUNT(uid) c from User where uage between 20 and 29';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Welcome.prototype.gettwoAge = function(cb){
  const sql = 'select COUNT(uid) c  from User where uage between 30 and 44';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}


Welcome.prototype.getthreeAge = function(cb){
  const sql = 'select COUNT(uid) c from User where uage between 45 and 59';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}


Welcome.prototype.getfourAge = function(cb){
  const sql = 'select COUNT(uid) c  from User where uage between 60 and 1000';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Welcome;
