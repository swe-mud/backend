import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();

// Websocket Server

// Importing the required modules
const WebSocketServer = require('ws');

// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 3456 });

// Creating connection using websocket
wss.on('connection', ws => {
  console.log('(WS) new client connected');
  // sending message
  ws.on('message', data => {
    console.log(`(WS) Client has sent us: ${data}`);
  });
  // handling what to do when clients disconnects from server
  ws.on('close', () => {
    console.log('(WS) the client has connected');
  });
  // handling client connection error
  ws.onerror = function () {
    console.log('(WSS) Some Error occurred');
  };
});
