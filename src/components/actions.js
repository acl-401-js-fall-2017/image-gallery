import shortid from 'shortid';

export const createImage = image => ({ 
  ...image,
  _id: shortid.generate(),
});

export function loadImages(state, images) {
  return {
    ...state,
    images
  };
}


export function onDelete(state, imageId) {
  const position = state.images.findIndex(img => img._id == imageId);
  if (position === -1) return state;
  const images = state.images.slice();
  images.splice(position, 1);
  return {
    ...state,
    images
  };
}

export function onAdd(imageData, state) {
  const newImage = createImage(imageData);
  const images = state.images.slice();
  images.push(newImage);
  return {
    ...state,
    images
  };
}
