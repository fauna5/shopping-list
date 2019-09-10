import createStore from './store';
import axios from 'axios';

import { ADD, GET_LIST, UPDATE } from './actions';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
}));

describe('store', () => {
  it('is set up correctly', () => {
    const store = createStore();
    expect(store.state).toMatchSnapshot();
  });

  it('is gets the list', async () => {
    const list = [
      {
        id: 0,
        title: 'eggs',
        complete: false,
      },
    ];
    axios.get.mockImplementation(() => ({
      data: list,
    }));

    const store = createStore();
    await store.dispatch(GET_LIST);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/list');
    expect(store.state.list).toEqual(list);
  });

  it('it adds to the list', async () => {
    const listAdded = [
      {
        id: 0,
        title: 'eggs',
        complete: false,
      },
      {
        id: 1,
        title: 'added',
        complete: false,
      },
    ];
    axios.post.mockImplementation((_, item) => ({
      data: listAdded,
    }));

    const store = createStore();
    await store.dispatch(ADD, 'new');
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/add', {
      title: 'new',
    });
    expect(store.state.list).toEqual(listAdded);
  });

  it('it updates the status of the list items', async () => {
    const listUpdated = [
      {
        id: 0,
        title: 'eggs',
        complete: true,
      },
    ];
    axios.put.mockImplementation((_, item) => ({
      data: listUpdated,
    }));

    const store = createStore();
    await store.dispatch(UPDATE, { id: 0, complete: true });
    expect(axios.put).toHaveBeenCalledWith('http://localhost:3001/item/0', {
      id: 0,
      complete: true,
    });
    expect(store.state.list).toEqual(listUpdated);
  });
});
