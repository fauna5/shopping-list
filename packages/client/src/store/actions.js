import axios from 'axios';

import { UPDATE_LIST } from './mutations';

export const GET_LIST = 'GET_LIST';
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';

const BASE_URL = 'http://localhost:3001';

//TODO more error handling around failed requests and bad response data

export default {
  [GET_LIST]: async ({ commit }) => {
    const response = await axios.get(`${BASE_URL}/list`);
    commit(UPDATE_LIST, response.data);
  },
  [ADD]: async ({ commit }, itemName) => {
    const result = await axios.post(`${BASE_URL}/add`, { title: itemName });
    commit(UPDATE_LIST, result.data);
  },
  [UPDATE]: async ({ commit }, item) => {
    const result = await axios.put(`${BASE_URL}/item/${item.id}`, item);
    commit(UPDATE_LIST, result.data);
  },
};
