const url = '/api';

const wrap = promise => {
  return promise.then(response => response.json());
};

export default {
  get(path) {
    console.log('we are in api+++++',path);
    return wrap(
      fetch(`${url}${path}`)
    );
  },

  post(path, data) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    );
  },
  
  delete(path) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'delete'
      })
    );
  }
};