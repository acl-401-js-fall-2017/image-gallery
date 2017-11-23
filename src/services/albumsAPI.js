import api from './api';

export default {
  get() {
    console.log('getting....');
    return api.get('/albums');
  },
  add(album) {
    return api.post('/albums', album);
  },
  remove(id) {
    console.log('removing.....');
    return api.delete(`/albums/${id}`);
  }
};