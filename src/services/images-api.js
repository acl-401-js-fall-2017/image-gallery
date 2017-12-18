import api from '../utils/api';

export default {
  get(_id) {
    return api.get(`/images?album=${_id}`);
  },
  add(image) {
    return api.post('/images', image);
  },
  remove(id) {
    return api.delete(`/images/${id}`);
  }
};