import api from './api';

export default {
  getAll(){
    return api.get('/images');
  },
  getAlbumImage(albumId) {
    return api.get(`/albums/${albumId}`);
  },
  add(image) {
    return api.post('/images', image);
  },
  remove(id) {
    return api.delete(`/images/${id}`);
  }
};