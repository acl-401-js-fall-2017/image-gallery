const url = '/api';

const wrap = promise => {
  return promise.then(response => response.json());
};

export default {
  get(path) {
    
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
    console.log('removing in api by path', path);
    return wrap(
      fetch(`${url}${path}`, {
        method: 'delete'
      })
    );
  }
};