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
    bunnies: [ { _id: '12345', title: 'bunny', description: 'cute bunny', url: 'cutebunny.com' } ]
  });
});