var database = {
  db: null,
  initDB: function(){
    database.db = window.openDatabase("pnpaa", "1.0", "PNPAA", 200000);
    return database.db;
  },
  instance: function(){
    return database.db || database.initDB();
  },
  errCB: function(err){
    alert("Error processing SQL: (" + err.code + ") " + err.message);
  },
  prepare: function(){
    db = database.instance()
    db.transaction(function(tx){
      tx.executeSql('CREATE TABLE IF NOT EXISTS USERS (id UNIQUE, email VARCHAR(50) NULL, firstname VARCHAR(50) NULL, lastname VARCHAR(50) NULL, field VARCHAR(50) NULL, bio VARCHAR(50) NULL)');
    }, database.errCB);
    return db;
  },
  empty: function(){
    db = database.instance()
    db.transaction(function(tx){
      tx.executeSql('DELETE * FROM USERS');
    }, function errorCB(err) {
      alert("Error processing SQL: "+err.code);
    }, function(){})
  },
  getUser: function(fn){
    db = database.instance()
    db.transaction(function(tx){
      tx.executeSql('SELECT * FROM USERS LIMIT 1', [], function(tx, results){
        var len = results.rows.length;
        if (len > 0) {
          fn({success: true, user: results.rows.item(0)})
        }else{
          fn({success: false})
        }
      }, database.errCB);
    }, database.errCB)
  },
  saveUser: function(user, fn){
    db = database.instance()
    db.transaction(function(tx){
      tx.executeSql('INSERT INTO USERS (id, email, firstname, lastname, field, bio) VALUES ("'+user.id+'", "'+user.email+'", "'+user.firstname+'", "'+user.lastname+'", "'+user.field+'", "'+user.bio+'")');
    }, database.errCB, fn)
  }
}