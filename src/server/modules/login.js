const db = require('./database.js');

var Login = function(){};

Login.prototype.selectAdmin = function(obj,cb){
  const sql = 'select * from Admin where adminname = ? and adminpass = ?';
  db.query(sql,[obj.adminname,obj.adminpass],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports = Login;
