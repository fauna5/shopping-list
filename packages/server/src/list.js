export const INIT_LIST = [
  {
    id: 0,
    title: 'eggs',
    complete: false,
  },
  {
    id: 1,
    title: 'milk',
    complete: true,
  },
  {
    id: 2,
    title: 'bread',
    complete: false,
  },
];

let list = INIT_LIST;
let counter = 2;

export function getList() {
  return list;
}

export function addToList(title) {
  counter += 1;
  list = [
    ...list,
    {
      title,
      id: counter,
      complete: false,
    },
  ];
}

export function updateItem(id, complete) {
  list = list.map(item => {
    if (item.id === id) {
      return {
        ...item,
        complete,
      };
    }
    return item;
  });
}

export function resetList() {
  counter = 2;
  list = INIT_LIST;
}
