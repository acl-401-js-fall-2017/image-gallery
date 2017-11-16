import { addImage, removeImage } from '../data/actions';

it('adds a new image', () => {
  const testImage = {
    _id: '12345',
    title: 'bunny',
    description: 'cute bunny',
    url: 'cutebunny.com'
  };

  const newImage = addImage({ bunnies: [] }, testImage);

  expect(newImage).toEqual({
    bunnies: [ { _id: expect.any(String), title: 'bunny', description: 'cute bunny', url: 'cutebunny.com' } ]
  });
});

it('removes an image', () => {
  const testImageOne = {
    _id: '12345',
    title: 'bunny',
    description: 'cute bunny',
    url: 'cutebunny.com'
  };
  const testImageTwo = {
    _id: '67890',
    title: 'bunnies',
    description: 'cutest bunny',
    url: 'cutebunny.cute'
  };

  let state = { bunnies: [] };
  state = addImage(state, testImageOne);
  state = addImage(state, testImageTwo);

  const id = state.bunnies[0]._id;
  const newState = removeImage(state, id);

  expect(newState).toEqual({
    bunnies: [state.bunnies[1]]
  });
});