// in App.js
export function changeDisplay(state, newDisplay) {
  return { 
    ...state, 
    display: newDisplay 
  };
}

// in Albums.js
export function loadAlbums(state, albumData) {
  return {
    ...state,
    albums: albumData
  };
}

// in Photos.js
export function loadImages(state, imageData) {
  return {
    ...state,
    images: imageData
  };
}

export function addNewImg(state, newImg) { 
  return {
    ...state,
    images: state.images.concat([newImg])
  };
}

export function removeImages(state, voidImgs) {
  return {
    ...state,
    images: state.images.filter(img => !voidImgs.includes(img._id))
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