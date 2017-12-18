import api from './api';

export default {
  get(imageId) {
    return api.get('/image');
  },
  add(image) {
    return api.post('/image', image);
  },
  remove(id) {
    return api.delete(`/images/${id}`);
  }
};