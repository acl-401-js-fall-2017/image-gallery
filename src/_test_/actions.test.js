import { addBunny } from '../actions';

it('creates and adds a bunny detail to empty state of bunnies', () => {
  const newState = addBunny({ bunnies: [] }, 'new bunny detail');
  expect(newState).toEqual({
    bunnies: [
      { _id: expect.any(String), 
        title: 'new bunny detail', 
        description: 'Best bunny desc. ever!', 
        url:'http://www.awesomelycute.com/gallery/2015/09/cute-bunnies-18.jpg' }
    ]
  });
});