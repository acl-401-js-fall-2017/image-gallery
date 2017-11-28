import api from './api';

export default {
  get(id) {
    return (id) ? api.get(`/albums/${id}`) : api.get('/albums');
  },

  add(image) {
    return api.post('/albums', image);
  },

  remove(id) {
    return api.delete(`/albums/${id}`);
  }
};