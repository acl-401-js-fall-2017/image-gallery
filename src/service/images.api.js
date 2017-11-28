import api from './api';

export default {
  get(id) {
    return api.get(`/images?albums=${id}`);
  },
  add(images) {
    return api.post('/images', images);
  },
  remove(id) {
    return api.fetch(`/images/${id}`);
  }
};