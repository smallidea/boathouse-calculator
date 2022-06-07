#!/usr/bin/env node
/** Smoke 0608-Local&Remote*/
/**
 * Module dependencies. 
 */
 
const app = require('./app');
const debug = require('debug')('calculator:server');
const http = require('http');

/**
 * Get port from environment and store in Express.  
 */


const port = normalizePort(process.env.PORT || '3001');
const host = '0.0.0.0'

app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces. 
 */

server.listen(port, host);
server.on('error', onError);
server.on('listening', onListening);

console.log("Server running on port " + port);
console.log("SmartTEST CLI k8s mode v0.1.19.3751");
console.log("Smoke Server 2022.6.6");
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }
 
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

