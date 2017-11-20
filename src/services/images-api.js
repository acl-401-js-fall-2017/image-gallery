import api from './api';

export default {
  get(imageId) {
    return api.get(`/albums/${imageId}/images`);
  },
  add(image) {
    return api.post(`/albums/${image.album}/image`, image);
  },
  remove(albumId, id) {
    return api.delete(`/albums/${albumId}/images/${id}`);
  }
};