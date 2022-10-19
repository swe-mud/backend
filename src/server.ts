import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import EventRoute from "@routes/event.route";

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new EventRoute()]);

app.listen();

// Websocket Server

// Importing the required modules
const WebSocketServer = require('ws');

// Creating a new websocket server
export const websocketServer = new WebSocketServer.Server({ port: 16816 });
console.log('WSS Started');
// Creating connection using websocket
websocketServer.on('connection', ws => {
  console.log('(WS) new client connected');
  // sending message
  ws.on('message', data => {
    console.log(`(WS) Client has sent us: ${data}`);
  });
  // handling what to do when clients disconnect from server
  ws.on('close', () => {
    console.log('(WS) the client has connected');
  });
  // handling client connection error
  ws.onerror = function () {
    console.log('(WSS) Some Error occurred');
  };
});

/**
 * Sends messages to all clients (only 1, bc single player game)
 * @param data not stringified data
 */
export function sendToWsClient(data) {
  const stringifyedData = JSON.stringify(data);
  websocketServer.clients.forEach(function each(client) {
    client.send(stringifyedData);
  });
}
