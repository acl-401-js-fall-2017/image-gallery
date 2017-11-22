import { addImage, removeImage } from './actions';

it('adds a new image', () => {
  const newImg = {
    _id: 'test',
    title: 'test',
    description: 'test',
    url: 'test'
  } ;
  const newState = addImage({ imageData: [] }, newImg);
  expect(newState).toEqual({ 
    imageData: [ { _id: 'test', title: 'test', description: 'test', url: 'test' } ] 
  });
});