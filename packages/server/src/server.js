import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import { getList } from './list';

const app = express();
app.use(bodyParser.json());

app.get('/list', (req, res) => {
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
