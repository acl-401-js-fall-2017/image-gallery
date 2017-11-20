import shortid from 'shortid';


export function onDelete(imageId, state) {
  const position = state.images.findIndex(img => img._id === parseInt(imageId, 10));
  if (position === -1) return state;
  const images = state.images.slice();
  images.splice(position, 1);
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
