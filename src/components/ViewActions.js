import shortid from 'shortid';

const createImage = (title, description, url) => ({
  _id: shortid.generate(),
  title,
  description,
  url
});

export function loadImages(state) {
  return {
    ...state,
    images: [
      createImage(
        'Baby Pandas',
        'A little panda learning about gravity',
        'http://a.abcnews.com/images/Lifestyle/gty_baby_pandas_01_jc_160930_4x3_992.jpg'
      ),
      createImage(
        'Hello panda',
        'Panda waving at his fans',
        'https://pbs.twimg.com/media/Cxjpjf6WQAEQoFZ.jpg'
      ),
      createImage(
        'Red Panda',
        'Red pandas are kinda like pandas little cat, they eat bamboo also',
        'https://cdn.arstechnica.net/wp-content/uploads/2017/01/Ailurus_fulgens_RoterPanda_LesserPanda-800x976.jpg'
      )
    ]
  };
}

export function addImage(state, title, description, url ) {
  return {
    ...state,
    images: [
      ...state.images,
      createImage(title, description, url)
    ]
  };
}

export function removeImage(state, _id) {
  const index = state.images.findIndex(t => t._id === _id);
  if(index === -1) return state;

  const images = state.images.slice();
  images.splice(index, 1);

  return {
    ...state,
    images
  };
}