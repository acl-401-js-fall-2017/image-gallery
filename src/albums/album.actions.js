import shortid from 'shortid';

export const createAlbum = name=> ({ 
  _id: shortid.generate(),
  name
});

export function loadAlbums(state, albums) {
  return {
    ...state,
    albums
  };
}

export function addAlbum(state, album) {
  return {
    ...state,
    albums: [
      ...state.albums,
      album
    ]
  };
}

export function removeAlbum(state, _id) {
  const { albums } = state;
  const index = albums.findIndex(item => item._id === _id);
  if(index === -1) return state;
  return {
    albums: [
      ...albums.slice(0, index),
      ...albums.slice(index + 1)
    ]
  };
}