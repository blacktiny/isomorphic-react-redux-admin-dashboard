import { all } from 'redux-saga/effects';
import authSaga from '@iso/redux/auth/saga';
import ecommerceSaga from '@iso/redux/ecommerce/saga';

export default function* rootSaga(getState) {
  yield all([authSaga(), ecommerceSaga()]);
}
