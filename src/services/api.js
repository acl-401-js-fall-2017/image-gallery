import shortid from 'shortid';

let store = {
  albums: [],
  albumsByid: {}
};

let data = window.localStorage.getItem('store');
if (data) store = JSON.parse(data);

window.onbeforeunload = () => {
  const json = JSON.stringify(store);
  window.localStorage.setItem('data', json);
};

export const ListApi = {
  get() {
    return fetch('http://localhost:3002/api/images')
      .then(response => response.json());
  },
  add(list) {
    const saved = { ...list, _id: shortid.generate() };
    store.lists.push(saved);
    return Promise.resolve(saved);
  },
  remove(id) {
    const index = store.lists.findIndex(l => l._id = id);
    if (index !== -1) store.lists.splice(index, 1);
    return Promise.resolve();
  }
};

export const todoApi = {
  get(listId) {
    let todos = store.todosByListId[listId];
    if(!todos) todos = store.todosByListId[listId] = [];
    return Promise.resolve(todos.slice());
  }
}