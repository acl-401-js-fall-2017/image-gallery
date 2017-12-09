export function addAlbum(state, addedAlbum) { 
  return {
    ...state,
    albums: [
      ...state.albums,
      addedAlbum
    ]
  };
}

export function removeAlbum(state, _id) {
  const { albums } = state;
  const index = albums.findIndex(a => a._id === _id);
  if(index === -1) return state;
  return {
    albums: [
      ...albums.slice(0, index),
      ...albums.slice(index + 1)
    ]
  };
}