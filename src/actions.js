import { v1 } from 'uuid';

export function removeImg(state, _id) {
  
  const index = state.bunnies.findIndex(bunny => bunny._id === _id);
  if(index === -1) return state;

  const bunnies = state.bunnies.slice();
  bunnies.splice(index, 1);
  
  return {
    ...state,
    bunnies
  };
}

export function addImg(state, addedImg) {
  
  return {
    ...state,
    bunnies: [
      ...state.bunnies,
      createBunny(addedImg)
    ]
  };
}

const createBunny = addedImg => ({
  _id: v1(),
  title: addedImg.title,
  description: addedImg.description,
  url: addedImg.url
});