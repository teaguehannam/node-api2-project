const express = require('express');
const dataRouter = require('./data/router.js');
const server = express();

server.use(express.json());
//Sets all the commands in dataRouter to start with '/api/posts'
server.use('/api/posts', dataRouter);

server.listen(4000, () => {
    console.log('*** Server at http://localhost:4000 ***')
})