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
    return api.fetch(`/images/${id}`);
  }
};