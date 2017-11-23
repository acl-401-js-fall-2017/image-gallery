import api from './api';

export default {
  get(id) {
    console.log(`/albums/${id}`);
    if (id) return api.get(`/albums/${id}`);
    else return api.get('/albums');
  },
  add(album) {
    return api.post('/albums', album);
  },
  remove(id) {
    console.log('removing.....');
    return api.delete(`/albums/${id}`);
  }
};