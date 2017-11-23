import api from './api';

export default {
  get: (id) => api.get(`/albums/${id ? id : ''}`),
  add: albumName => {
    api.post('/albums', { name: albumName, photos: [] });
  },  
  patch: (ids, operation, photos) => {
    return api.patch(`/albums/${operation === 'add' ? 'add-photos' : 'rm-photos'}/${ids}`, { photoIds: photos });
  },
  remove: (ids) => api.delete(`/albums/${ids}`)
};