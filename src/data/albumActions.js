import shortid from 'shortid';

export const createAlbum = name => ({ 
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
  const i = albums.findIndex(item => item._id === _id);
  if(i === -1) return state;
  return {
    albums: [
      ...albums.slice(0, i),
      ...albums.slice(i + 1)
    ]
  };
}