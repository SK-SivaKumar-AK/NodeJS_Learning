/* creating server */
const http = require('http');
const routes = require('./routes');


/* create server with function */
console.log(routes.someText);
console.log('Hi SivaKumar!');
const server = http.createServer(routes.handler);


/* listen server */
server.listen(3000);