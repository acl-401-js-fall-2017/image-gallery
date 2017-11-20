import shortid from 'shortid';

export function createImage(state, title, description, url) {
  const newImage = { _id: shortid.generate(), title, description, url };
  return {
    ...state,
    images: [
      ...state.images,
      newImage
    ]
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
  const index = state.images.findIndex(item => item._id === _id);
  if(index === -1) return state;

  const images = state.images.slice();
  images.splice(index, 1);
  
  return {
    ...state,
    images
  };
}

export function updateImage(state, image) {
  const { images } = state;
  const index = images.findIndex(item => item._id === image._id);
  if(index === -1) return state;
  
  return {
    ...state,
    images: [
      ...images.slice(0, index),
      image,
      ...images.slice(index + 1)
    ]
  };
}