# loopback migrate buildin models

###Steps:

1 - Just put the file server/migrate.js inside your project/server folder

2 - Edit the file migrate.js setting the datasource you are using for buildin models

3 - From the root folder of your server run "node server/migrate.js"


###After that you should see something like this:
```
$ node server/migrate.js 
User table created
AccessToken table created
ACL table created
RoleMapping table created
Role table created
```


###Throbleshutting:

If you saw: Error: Cannot migrate models not attached to this datasource: ...

Solution: Make shure your models are in the same datasource you set in migrate.js
