import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import youtubeSearchApi from '@iso/config/youtube_search.config';
export const per_page = 10;
const maxResults = 10;
const youtubeSearchURL = `https://www.googleapis.com/youtube/v3/search?maxResults=${maxResults}&type=video&key=${youtubeSearchApi}&part=snippet`;

const onSearchReqeust = async (searcText, pageToken) =>
  await fetch(
    `${youtubeSearchURL}&q=${encodeURIComponent(searcText)}${pageToken}`
  )
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);

function* searchRequest({ payload }) {
  const { searcText, pageToken } = payload;
  try {
    const searchResult = yield call(
      onSearchReqeust,
      searcText,
      pageToken ? `&pageToken=${pageToken}` : ''
    );
    if (searchResult.items) {
      yield put(
        actions.youtubeSearchSuccess(
          searchResult.items,
          searchResult.pageInfo.totalResults,
          searchResult.nextPageToken,
          searchResult.prevPageToken
        )
      );
    } else {
      yield put(actions.youtubeSearchSuccess());
    }
  } catch (error) {
    yield put(actions.youtubeSearchSuccess());
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.YOUTUBE_SEARCH, searchRequest)]);
}
