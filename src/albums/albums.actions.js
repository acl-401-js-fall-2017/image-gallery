export function loadAlbums(state, albums) {
  return {
    ...state,
    albums
  };
}

export function addAlbum(state, newAlbum) {
  const newState = {
    ...state,
    albums: [
      ...state.albums,
      newAlbum
    ]
  };
  return newState;
}

export function removeAlbum(state, unwantedAlbum) {
  const index = state.albums.findIndex(album => album._id === unwantedAlbum._id);
  if (index === -1) return;

  const newAlbums = state.albums.slice();
  newAlbums.splice(index, 1);

  return {
    ...state,
    albums : newAlbums
  };
}