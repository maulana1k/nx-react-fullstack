import * as express from 'express';
import * as path from 'path';
import { Message } from '@realtime-chat/api-interfaces';
import { dirname } from 'path';

const app = express();

const greeting: Message = { message: 'Welcome to api!' };
// console.log(path.join(__dirname, '../react/index.html'));

// app.use(
//   '/home',
//   express.static(path.join(__dirname, '..', '/react/index.html'))
// );
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', '/react/index.html'));
// });
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../react/index.html'));
// });
app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
