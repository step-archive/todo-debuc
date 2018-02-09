const http = require('http');
const app = require('./appExp.js');
const util = require('./util.js');
const Users = require('./src/users.js');
const users=new Users('./data/registeredUsers.json');
const fs = require('fs');
const PORT = 9000;
users.loadUsers(util.getAllRegisteredUsers(fs,'./data/registeredUsers.json'));
app.fs=fs;
app.userStore=users;
let server = http.createServer(app);
server.on('error',e=>console.error('**error**',e));
server.listen(PORT,(e)=>console.log(`server listening at ${PORT}`));
