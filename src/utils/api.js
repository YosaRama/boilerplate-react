import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_ENDPOINT_URL}`,
  timeout: 40000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const fetcher = (url) => {
  return instance.get(url).then((res) => {
    var results = res.data;

    if (!results) {
      throw Error(results.message);
    }

    return results.data;
  });
};

export { instance as api };
