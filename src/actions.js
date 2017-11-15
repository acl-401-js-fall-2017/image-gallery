import shortid from 'shortid';

const createBunny = title => ({ //passing title to link to id, how to link to below objects
  _id: shortid.generate(),
  title,
  description: '',
  url: ''
});

export function loadBunnies(state) {
  return {
    ...state,
    bunnies: [ //how do I handle "bunnies" objects with titles linking to desc and url
      { title: 'Halloween Bunny',
        description: 'Isn\'t it a fuzzy-wuzzy, cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' },
      { title: 'Belly Bunny',
        description: 'I\'m a rub-my-belly bunny',
        url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' },
      { title: 'Side-Eye Bunny',
        description: 'Were you taking to me?',
        url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' }
    ]
  };
}

export function addBunny(state, title) {
  return {
    ...state,
    bunnies: [
      ...state.bunnies,
      createBunny(title)
    ]
  };
}

export function removeBunny(state, _id) {
  const i = state.bunnies.findIndex(title => title._id === _id);
  if(i === -1) return state;

  const bunnies = state.bunnies.slice(); 
  // why make a copy of only part of the array? Because of spreading state? But we don't indicate where to slice.
  bunnies.splice(i, 1); // 1st parameter says what position to affect, 2nd parameter determines add(0)/remove(1)
  return {
    ...state,
    bunnies
  };
}