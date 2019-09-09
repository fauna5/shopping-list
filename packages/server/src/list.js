/* eslint-disable import/prefer-default-export */
export const INIT_LIST = [
  {
    title: 'eggs',
  },
  {
    title: 'milk',
  },
  {
    title: 'bread',
  },
];

const list = INIT_LIST;

export function getList() {
  return list;
}
