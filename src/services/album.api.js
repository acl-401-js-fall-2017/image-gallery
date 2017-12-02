import api from './api';

export default {
  get() {
    return api.get('/albums');
  },

  add(album) {
    return api.post('/albums', album);
  },

  remove(id) {
    return api.fetch(`/albums/${id}`);
  }
};