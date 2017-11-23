import shortid from 'shortid';

export const create= item => ({ 
  ...item,
  _id: shortid.generate(),
});

export function loadImages(state, images) {
  return {
    ...state,
    images
  };
}

export function loadAlbums(state, albums) {
  return {
    ...state,
    albums
  };
}


export function onDelete(state, imageId) {
  const position = state.images.findIndex(img => img._id == imageId);
  if (position === -1) return state;
  const images = state.images.slice();
  images.splice(position, 1);
  return {
    ...state,
    images
  };
}

export function onDeleteAlbum(state, albumId) {
  const position = state.albums.findIndex(album => album._id == albumId);
  if (position === -1) return state;
  const albums = state.albums.slice();
  albums.splice(position, 1);
  return {
    ...state,
    albums
  };
}

export function onAdd(imageData, state) {
  const newImage = create(imageData);
  const images = state.images.slice();
  images.push(newImage);
  return {
    ...state,
    images
  };
}

export function onAddAlbum(albumData, state) {
  const newAlbum = create(albumData);
  const albums = state.albums.slice();
  albums.push(newAlbum);
  return {
    ...state,
    albums
  };
}
