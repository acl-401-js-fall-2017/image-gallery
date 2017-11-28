import shortid from 'shortid';

export function createImage(state, title, description, url) {
  const newImage = { _id: shortid.generate(), title, description, url };
  return {
    ...state,
    images: [
      ...state.images,
      newImage
    ]
  };
}

export function createAlbum(state, title) {
  const newAlbum = { _id: shortid.generate(), title };
  return {
    ...state,
    albums: [
      ...state.albums,
      newAlbum
    ]
  };
} 