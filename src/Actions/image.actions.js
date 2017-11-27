export function addImage(state, newImage) {
  const newState = [
    ...state,
    newImage
  ];
  return newState;
}

export function removeImage(state, targetImage) {
  const index = state.images.findIndex(image => image._id === targetImage);
  if (index === -1) return;

  const images = state.images.slice();
  images.splice(index, 1);

  return {
    ...state,
    images
  };

}