
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
  const index = state.albums.findIndex(t => t._id === _id);
  if(index === -1) return state;

  const albums = state.albums.slice();
  albums.splice(index, 1);

  return {
    ...state,
    albums
  };
}

