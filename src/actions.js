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

// in Gallery.js
export function setInitialImg(state, range) {
  return {
    ...state,
    currentImg: Math.floor(Math.random() * range)
  };
}

export function slide(state, direction, range) {

  const nextImg = {...state}.currentImg;
  const slideBack = () => state.currentImg > 0 ? nextImg - 1 : range - 1;
  const slideForward = () => state.currentImg < range - 1 ? nextImg + 1 : 0;

  return {
    ...state,
    currentImg: direction === 'back' ? slideBack() : slideForward()
  };
}

// in ImageManager.js
export function toggle(state, section) {
  const newOpen = { ...{ ...state }.open };
  newOpen[section] = !newOpen[section];
  return {
    ...state,
    open: newOpen
  };
}