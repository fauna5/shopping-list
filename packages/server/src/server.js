import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';

import { getList, addToList, updateItem } from './list';

const app = express();

const corsOptions =
  process.env.NODE_ENV !== 'production'
    ? { credentials: true, origin: 'http://localhost:8080' }
    : {};
app.use(cors({ corsOptions }));

app.use(bodyParser.json());

app.get('/list', (req, res) => {
  res.send(getList());
});

app.post('/add', (req, res) => {
  addToList(req.body.title);
  res.send(getList());
});

app.put('/item/:id', (req, res) => {
  updateItem(Number(req.params.id), req.body.complete);
  res.send(getList());
});

export default app;

if (!module.parent) {
  const server = http.createServer(app);
  server.listen(process.env.PORT || 3001, () => {
    /* eslint-disable-next-line no-console */
    console.info(`Server started on port ${server.address().port}`);
  });
}
