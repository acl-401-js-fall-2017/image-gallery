import { addImage, removeImage } from '../Actions/image.actions';

it('adds a new image', () => {
  const image = {
    _id: '12345',
    title: 'bun',
    description: 'fuzz bun',
    url: 'fuzzbun.com'
  };

  const newImages = addImage({ images: [] }, image);

  expect(newImages).toEqual({
    images: [ { _id: expect.any(String), title: 'bun', description: 'fuzz bun', url: 'fuzzbun.com' } ]
  });
});

it('removes an image', () => {
  const imageOne = {
    _id: '12345',
    title: 'bun',
    description: 'fuzz bun',
    url: 'fuzzbun.com'
  };
  const imageTwo = {
    _id: '67890',
    title: 'bunnies',
    description: 'fuzzst bun',
    url: 'fuzzbun.fuzz'
  };

  let state = { images: [] };
  state = addImage(state, imageOne);
  state = addImage(state, imageTwo);

  const id = state.images[0]._id;
  const newState = removeImage(state, id);

  expect(newState).toEqual({
    images: [state.images[1]]
  });
});