
export function loadImages(state, images) {

  return {
    ...state,
    images
  };
}

export function addImage(state, image) {
  return {
    ...state,
    images: [
      ...state.images,
      image
    ]
  };
}

export function removeImage(state, _id) {
  const index = state.images.findIndex(t => t._id === _id);
  if(index === -1) return state;

  const images = state.images.slice();
  images.splice(index, 1);

  return {
    ...state,
    images
  };
}
