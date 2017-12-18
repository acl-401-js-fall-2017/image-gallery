
const url = '/api';

const promiseWrap = promise => {
  return promise.then(response => response.json());
};

export default {
  get(path) {
    return promiseWrap(
      fetch(`${url}${path}`)
    );
  },
  post(path, data) {
    return promiseWrap(
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
    return promiseWrap(
      fetch(`${url}${path}`, {
        method: 'delete'
      })
    );
  }
};