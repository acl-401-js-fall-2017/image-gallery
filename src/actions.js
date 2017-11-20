import shortid from 'shortid';

export function loadGallery(state, gallery){
  return{
    ...state,
    gallery
  }; 
}

export function addImg(state, img) {
  return {
    ...state,
    gallery:[
      ...state.gallery,
      img
    ]
  };
}

export function deleteImg(state, id) {
  const index = state.gallery.findIndex(img => img._id === id)
  const gallery = state.gallery.slice()
  gallery.splice(index, 1);
  return {
    ...state,
    gallery
  };
}