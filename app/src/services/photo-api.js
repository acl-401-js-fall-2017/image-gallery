import api from './api';

export default {
  get: () => api.get('/photos'),
  add: photo => api.post('/photos', photo),
  remove: ids => api.delete(`/photos/${ids}`)
};