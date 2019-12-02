import { all, takeLatest, put, call, fork } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';

import { login, logout, removeCookie } from './auth.utils';
import { notification } from '@iso/components';
import JwtAuthentication from './jwtAuthentication';
import actions from './actions';

const ApiUrl = '/api/login';

function* loginRequest({ payload: { user } }) {
  try {
    const response = yield fetch(ApiUrl, {
      method: 'POST',

      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user }),
    });
    if (response.status === 200) {
      const { token } = yield response.json();
      yield call(login, { token });
      yield put(actions.loginRequestSuccess(token));
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  } catch (error) {
    yield put(actions.loginRequestFailure(error));
  }
}

export function* jwtLoginRequest() {
  // yield takeLatest(actions.JWT_LOGIN_REQUEST, function*({ payload }) {
  //   const result = yield call(JwtAuthentication.login, payload.userInfo);
  //   if (result.error) {
  //     notification('error', result.error);
  //     yield put(actions.loginRequestFailure(error));
  //   } else {
  //     payload.history.push('/dashboard');
  //     yield put({
  //       type: actions.LOGIN_REQUEST_SUCCESS,
  //       token: result.token,
  //       profile: result.profile,
  //     });
  //   }
  // });
}

function* logoutRequest() {
  try {
    yield call(logout);
    yield put(actions.logoutRequestSuccess());
  } catch (error) {
    yield put(actions.logoutRequestFailure(error));
  }
}
// export function* loginSuccess() {
//   yield takeLatest(actions.LOGIN_SUCCESS, function*(payload) {
//     setCookie('login_saga', payload.token);
//     yield setCookie('id_token', payload.token);
//   });
// }

// export function* loginError() {
//   yield takeLatest(actions.LOGIN_ERROR, function*() {});
// }

export function* onLogin() {
  yield takeLatest(actions.LOGIN_REQUEST_START, loginRequest);
}
export function* onLogout() {
  yield takeLatest(actions.LOGOUT_REQUEST_START, logoutRequest);
}
export default function* rootSaga() {
  yield all([call(onLogin), call(jwtLoginRequest), call(onLogout)]);
}
