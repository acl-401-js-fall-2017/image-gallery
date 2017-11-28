

export function loadAlbums(state, albums) {
  return {
    ...state,
    albums
  };
}

export function addImage(state, newImage) {
  return {
    ...state,
    bunnies: [
      ...state.bunnies,
      newImage
    ]
  };
}


export function removeImage(state, deleteImage) {
  const index = state.bunnies.findIndex(image => image._id === deleteImage);

  if(index === -1) return;

  const images = state.bunnies.slice();
  images.splice(index, 1);

  return {
    ...state,
    bunnies: images
  };
}