import request from 'supertest';
import { INIT_LIST, resetList } from './list';

import app from './server';

describe('server', () => {
  beforeEach(() => {
    resetList();
  });

  it('sends back the list', done => {
    request(app)
      .get('/list')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, INIT_LIST, done);
  });

  it('adds to the list', done => {
    request(app)
      .post('/add')
      .send({ title: 'new' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        [...INIT_LIST, { title: 'new', id: 3, complete: false }],
        done,
      );
  });

  it('sets the item to complete', done => {
    request(app)
      .put('/item/0')
      .send({ id: 0, complete: true })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        [{ title: 'eggs', id: 0, complete: true }, INIT_LIST[1], INIT_LIST[2]],
        done,
      );
  });

  it('has no effect if item does not exist', done => {
    request(app)
      .put('/item/1234')
      .send({ id: 1234, complete: true })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, INIT_LIST, done);
  });
});
