import api from './api';

export default {
  get(id) {
    console.log('about to get from /albums/', id);
    return (id) ? api.get(`/albums/${id}`) : api.get('/albums');
  },

  add(image) {
    return api.post('/albums', image);
  },

  remove(id) {
    return api.delete(`/albums/${id}`);
  }
};