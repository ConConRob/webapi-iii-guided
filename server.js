const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const md = require('./middleware')

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/hubs', hubsRouter);

server.get('/', md.addTeam ,(req, res, next) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>{Welcome to the ${req.team}  Lambda Hubs API}</p>
    `);
});

module.exports = server;
