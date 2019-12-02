export function createUrl(urlData) {
  const keys = Object.keys(urlData);
  let search = '';
  keys.forEach(key => {
    if (
      urlData[key] &&
      urlData[key] !== null &&
      urlData[key] !== '' &&
      urlData[key] !== ',' &&
      urlData[key] !== undefined &&
      urlData[key].length !== 0
    ) {
      // search[key] = urlData[key];
      search += `${key}=${urlData[key]}&`;
    }
  });
  // return search;
  return search.substring(0, search.length - 1);
}

export function setStateToUrl(state) {
  let urlData = {};
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;
        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;
        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }
          break;
        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }
          break;
        case 'amenities':
          urlData[key] =
            state[key] && typeof state[key] !== 'string' && state[key].length
              ? state[key].join()
              : state[key];
          break;
        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }
          break;
        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }
          break;
        case 'property':
          urlData[key] =
            state[key] && typeof state[key] !== 'string' && state[key].length
              ? state[key].join()
              : state[key];
          break;
        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }
          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }
          break;
        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }
  return createUrl(urlData);
}

export function setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION(state) {
  let urlData = {};
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;
        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;
        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }
          break;
        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }
          break;
        case 'amenities':
          urlData[key] =
            state[key] && typeof state[key] !== 'string' && state[key].length
              ? state[key].join()
              : state[key];
          break;
        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }
          break;
        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }
          break;
        case 'property':
          urlData[key] =
            state[key] && typeof state[key] !== 'string' && state[key].length
              ? state[key].join()
              : state[key];
          break;
        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }
          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }
          break;
        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }
  return createUrl(urlData);
}
