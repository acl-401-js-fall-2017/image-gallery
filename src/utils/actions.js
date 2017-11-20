import shortid from 'shortid';

export function loadGallery(state, gallery){
  return{
    ...state,
    gallery
  }; 
}

export function addImg(state, img) {
  return {
    ...state,
    gallery:[
      ...state.gallery,
      img
    ]
  };
}


export function deleteImg(state, id) {
  const index = state.gallery.findIndex(img => img._id === id);
  const gallery = state.gallery.slice();
  gallery.splice(index, 1);
  return {
    ...state,
    gallery
  };
}

export function loadAlbums(state, albums){
  return{
    ...state,
    albums
  };
}

export function addAlbum(state, album) {
  return {
    ...state,
    albums:[
      ...state.albums,
      album
    ]
  };
}


export function deleteAlbum(state, id) {
  const index = state.albums.findIndex(album => album._id === id);
  const albums = state.albums.slice();
  albums.splice(index, 1);
  return {
    ...state,
    albums
  };
}