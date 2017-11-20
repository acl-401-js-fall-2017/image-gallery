import api from './api';

export default {
  get(albumId) {
    return api.get(`/albums/${albumId}/images`);
  },
  add(image) {
    return api.post(`/albums/${image.album}/tasks`, image);
  },
  remove(albumId, id) {
    return api.delete(`/albums/${albumId}/tasks/${id}`);
  }
};