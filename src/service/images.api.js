import api from './api';

export default {
  get() {
    return api.get('/images');
  },
  add(images) {
    return api.post('/images', images);
  },
  remove(id) {
    return api.fetch(`/images/${id}`);
  }
};