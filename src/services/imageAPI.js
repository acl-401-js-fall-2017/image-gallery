import api from './api';

export default {
  get(id) {
    console.log(`gettiing on path /images?album=${id}`);
    if (id) return api.get(`/images?album=${id}`);
  },
  add(image) {
    return api.post('/images', image);
  },
  remove(id) {
    console.log('removing.....');
    return api.delete(`/images/${id}`);
  }
};