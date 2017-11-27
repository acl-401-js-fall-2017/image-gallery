export function addImage(state, newImage) {
  return {
    ...state,
    images: [
      ...state.images,
      newImage
    ]
  };
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
