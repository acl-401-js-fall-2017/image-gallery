export function loadImages(state, images) {
  return {
    ...state,
    images: images
  };
}

export function addImage(state, newImage) {
  const newState = {
    ...state,
    images: [
      ...state.images,
      newImage
    ]
  };
  return newState;
}

export function removeImage(state, unwantedImage) {
  const index = state.images.findIndex(image => image._id === unwantedImage);
  if (index === -1) return;

  const images = state.images.slice();
  images.splice(index, 1);

  return {
    ...state,
    images : images
  };
}