export const UPDATE_LIST = 'UPDATE_LIST';

export default {
  [UPDATE_LIST]: (state, list) => {
    state.list = list;
  },
}