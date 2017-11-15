import imageData from './data/images';


// in App.js
export function changeDisplay(state, newDisplay) {
  return { 
    ...state, 
    display: newDisplay 
  };
}

// in Photos.js
export function loadImages(state) {
  return {
    ...state,
    images: imageData
  };
}