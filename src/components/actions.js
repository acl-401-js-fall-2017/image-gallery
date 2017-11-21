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


export function onDelete(imageId, state) {
  console.log('i am image id', imageId);
  const position = state.images.findIndex(img => img._id == imageId);
  console.log('i am position of delete', position);
  if (position === -1) return state;
  const images = state.images.slice();
  images.splice(position, 1);
  console.log('i am new image array', images);
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
