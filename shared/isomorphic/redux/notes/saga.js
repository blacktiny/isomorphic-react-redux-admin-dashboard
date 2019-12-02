import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

export function* changeColor() {
  yield takeEvery(actions.CHANGE_COLOR, function*() {});
}
export function* addNote() {
  yield takeEvery(actions.ADD_NOTE, function*() {});
}
export function* editNote() {
  yield takeEvery(actions.EDIT_NOTE, function*() {});
}
export function* deleteNote() {
  yield takeEvery(actions.DELETE_NOTE, function*() {});
}
export default function* rootSaga() {
  yield all([
    fork(changeColor),
    fork(addNote),
    fork(editNote),
    fork(deleteNote),
  ]);
}
