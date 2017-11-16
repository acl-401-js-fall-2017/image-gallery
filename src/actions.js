import shortid from 'shortid';
const yosemite = require('./imgs/yosemite.jpg'); 
const yellowstone = require('./imgs/yellowstone.jpg');
const arches = require('./imgs/arches.jpeg');

const createImg = (title, description, img) => ({
  _id: shortid.generate(),
  title,
  img,
  description
});

export function loadGallery(state){
  return{
    ...state,
    gallery: [
      createImg('Yosemite', 'Yosemite valley in winter', yosemite),
      createImg('YellowStone', 'Yellowstone prism', yellowstone),
      createImg('Arches', 'Arches National Park', arches),
    ]
  }; 
}

export function addImg(state, img) {
  return {
    ...state,
    gallery:[
      ...state.gallery,
      createImg(img.title, img.description, img.url)
    ]
  }
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