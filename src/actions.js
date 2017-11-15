import shortid from 'shortid';
const yosemite = require('./imgs/yosemite.jpg'); 
const yellowstone = require('./imgs/yellowstone.jpg');
const arches = require('./imgs/arches.jpeg');

const createImg = (title, description, img) => ({
  title,
  description,
  _id: shortid.generate(),
  img
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