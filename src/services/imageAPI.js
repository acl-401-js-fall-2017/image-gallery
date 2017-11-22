import api from './api';

export default {
  get() {
    console.log('getting....');
    return api.get('/images');
  },
  add(image) {
    return api.post('/images', image);
  },
  remove(id) {
    console.log('removing.....');
    return api.delete(`/images/${id}`);
  }
};