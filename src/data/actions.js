

export function loadAlbums(state, albums) {
  return {
    ...state,
    albums
  };
}

export function addImage(state, newImage) {
  return {
    ...state,
    images: [
      ...state.images,
      newImage
    ]
  };
}

export function removeImage(state, deleteImage) {
  const index = state.images.findIndex(image => image._id === deleteImage);

  if(index === -1) return;

  const images = state.images.slice();
  images.splice(index, 1);

  return {
    ...state,
    images: images
  };
}

export function addAlbum(state, newAlbum) {
  return {
    ...state,
    albums: [
      ...state.albums,
      newAlbum
    ]
  };
}

export function removeAlbum(state, deleteAlbum) {
  const index = state.albums.findIndex(album => album._id === deleteAlbum);

  if(index === -1) return;

  const albums = state.albums.slice();
  albums.splice(index, 1);

  return {
    ...state,
    albums: albums
  };
}