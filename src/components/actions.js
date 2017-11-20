import shortid from 'shortid';


export function onDelete(imageId, state) {
  const position = state.images.findIndex(img => img._id === parseInt(imageId, 10));
  if (position === -1) return state;
  state.images.splice(position, 1);
  const images = state.images.slice();
  return {
    ...state,
    images
  };
}

export function onAdd(imageData, state) {
  imageData._id = shortid.generate();
  const images = state.images.slice();
  images.push(imageData);
  return {
    ...state,
    images
  };
}
