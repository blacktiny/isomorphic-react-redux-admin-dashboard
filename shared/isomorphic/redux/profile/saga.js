// saga.js
import { all, takeEvery, put } from 'redux-saga/effects';
import profileActions from './actions';
import DemoProfileData from './profile.data';

function* fetchProfileDataEffect() {
  try {
    let profile = DemoProfileData;
    yield put(profileActions.fetchProfileDataSuccess(profile));
  } catch (error) {
    yield put(profileActions.fetchProfileDataFailure(error));
  }
}

export default function* profileSaga() {
  yield all([
    takeEvery(profileActions.FETCH_PROFILE_DATA_START, fetchProfileDataEffect),
  ]);
}
