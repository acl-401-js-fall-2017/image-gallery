import { addImage, removeImage } from '../data/actions';

it('adds a new image', () => {
  const testImage = {
    _id: '12345',
    title: 'bunny',
    description: 'cute bunny',
    url: 'cutebunny.com'
  };

  const newImage = addImage({ images: [] }, testImage);

  expect(newImage).toEqual({
    images: [ { _id: '12345', title: 'bunny', description: 'cute bunny', url: 'cutebunny.com' } ]
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

  let state = { images: [] };
  state = addImage(state, testImageOne);
  state = addImage(state, testImageTwo);

  const id = state.images[0]._id;
  const newState = removeImage(state, id);

  expect(newState).toEqual({
    images: [state.images[1]]
  });
});