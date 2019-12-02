import fetch from 'isomorphic-unfetch';
import shuffle from 'lodash/shuffle';

const FetchAPIData = url => {
  return fetch(url)
    .then(r => r.json())
    .then(data => {
      return data;
    });
};

export const ProcessAPIData = apiData => {
  let fetchData = {};
  if (apiData) {
    apiData.forEach((item, key) => {
      fetchData.data = item.data ? [...item.data] : [];
      fetchData.name = item.name ? item.name : '';
    });
  }
  const data = fetchData ? fetchData.data : [];
  return data;
};

export const SearchedData = processedData => {
  const randNumber = Math.floor(Math.random() * 50 + 1);
  const data = shuffle(processedData.slice(0, randNumber));
  return data;
};

export const SearchStateKeyCheck = state => {
  for (var key in state) {
    if (
      state[key] !== null &&
      state[key] != '' &&
      state[key] != [] &&
      state[key] != 0 &&
      state[key] != 100
    ) {
      return true;
    }
  }
  return false;
};

export const Paginator = (posts, processedData, limit) => {
  return [...posts, ...processedData.slice(posts.length, posts.length + limit)];
};

const GetAPIData = async apiUrl => {
  const promises = apiUrl.map(async repo => {
    const apiPath = `${process.env.SERVER_API}/static/data`; // read it from env variable
    const api = `${apiPath}/${repo.endpoint}.json`;
    // console.log(api, 'api api');
    const response = await FetchAPIData(api);
    return {
      name: repo.name,
      data: response,
    };
  });
  const receviedData = await Promise.all(promises);
  return receviedData;
};

export default GetAPIData;
