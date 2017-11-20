import api from './api';

export default {
  get() {
    return api.get('/api/images');
  },
  add(image) {
    return api.post('/api/images', image);
  },
  remove(id) {
    return api.fetch(`/api/images/${id}`);
  }
};