import api from './api';

export default {
  get: (id) => api.get(`/albums/${id ? id : ''}`),
  patch: (ids, operation, photos) => {
    return api.patch(`/albums/${operation === 'add' ? 'add-photos' : 'rm-photos'}/${ids}`, { photoIds: photos });
  }
};