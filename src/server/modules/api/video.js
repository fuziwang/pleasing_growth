const db = require('../database.js');

var Video = function(){};

Video.prototype.selectVid = function(cb){
    const sql = 'select min(vid+1) c from Video c where not exists (select vid from Video where vid = c.vid+1);';
    db.query(sql,(err,result)=>{
      if(err){
        cb(true);
        return;                  
      }
      cb(false,result);     
    });
}

Video.prototype.getAll = function(cb){
  const sql = 'select vid,vname,vtype,vtime,Video.uid,uname from Video,User where Video.uid = User.uid';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

Video.prototype.getVideo = function(obj,cb){
  const sql = 'select vid,vname,vtype,vtime,Video.uid,uname from Video,User where Video.uid = User.uid and vid = ?';
  db.query(sql,[obj.vid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}
Video.prototype.insertItem =function(obj,cb){
  const sql = 'insert into Video values(?,?,?,?,?,?,?)';
  db.query(sql,[obj.vid,obj.vname,obj.vtype,obj.vlocal,Date().slice(0,24),1,obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Video;
