export function addImage(state, newImage) {
  const newState = {
    ...state,
    imageData: [
      ...state.imageData,
      newImage
    ]
  };
  return newState;
}

export function removeImage(state, unwantedImage) {
  const index = state.imageData.findIndex(image => image._id === unwantedImage);
  if (index === -1) return;

  const images = state.imageData.slice();
  images.splice(index, 1);

  return {
    ...state,
    imageData : images
  };

}