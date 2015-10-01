/**
 * loopback: create build-in models tables
 *
 * put migrate.js file in server folder
 * run `node migrate.js`
 * @type {[type]}
 */

//var dataSource = app.dataSources.cassandra;
/*
 "cassandra": {
 "port": 9042,
 "name": "cassandra",
 "contactPoints": [
 "127.0.0.1"
 ],
 "keyspace": "apiot",
 "connector": "cassandra"
 }
 */

var app = require('./server');

var dataSource = app.dataSources.mysql;

dataSource.automigrate('User', function(err) {

  if (!err) {
    console.log('User table created');
  } else {
    console.log(err);
    console.log('-- User table not created');
  }

  dataSource.automigrate('AccessToken', function(err) {

    if (!err) {
      console.log('AccessToken table created');
    } else {
      console.log('-- AccessToken table not created');
    }

    dataSource.automigrate('ACL', function(err) {

      if (!err) {
        console.log('ACL table created');
      } else {
        console.log('-- ACL table not created');
      }

      dataSource.automigrate('RoleMapping', function(err) {

        if (!err) {
          console.log('RoleMapping table created');
        } else {
          console.log('-- RoleMapping table not created');
        }

        dataSource.automigrate('Role', function(err) {
          if (!err) {
            console.log('Role table created');
          } else {
            console.log('-- Role table not created');
          }

          dataSource.disconnect(); // close connection

        });

      });

    });

  });

});
