import api from './api';

export default {
  get() {
    return api.get('/albums');
  },
  getById(id) {
    return api.get(`/albums/${id}`);
  },
  add(album) {
    return api.post('/albums', album);
  },
  remove(id) {
    return api.delete(`/albums/${id}`);
  }
};