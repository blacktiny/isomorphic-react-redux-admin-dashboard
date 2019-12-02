import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import omit from 'lodash/omit';
import fakeData from './fakeData';

import { rsf, db } from '@iso/lib/firebase/firebase';
import {
  convertCollectionsSnapshotToMap,
  deleteDocuments,
  addCollectionAndDocuments,
} from '@iso/lib/firebase/firebase.util';

const fakeDataList = new fakeData(5).getAll();

/**
 * DOC: https://redux-saga-firebase.js.org/reference/dev/firestore
 */

const COLLECTION_NAME = 'investors'; // change your collection
const ORDER_BY = 'id';
const ORDER = 'desc';

function* loadFromFirestore() {
  try {
    const collectionRef = db
      .collection(COLLECTION_NAME)
      .where('deleted_at', '==', null)
      .orderBy(ORDER_BY, ORDER);
    const snapshots = yield call(rsf.firestore.getCollection, collectionRef);
    let data = yield call(convertCollectionsSnapshotToMap, snapshots);
    yield put(actions.loadFromFireStoreSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actions.loadFromFireStoreError(error));
  }
}

function* storeIntoFirestore({ payload }) {
  const { data, actionName } = payload;
  try {
    switch (actionName) {
      case 'delete':
        yield call(
          rsf.firestore.setDocument,
          `${COLLECTION_NAME}/${data.key}`,
          {
            deleted_at: new Date().getTime(),
          }
        );
        break;
      case 'update':
        yield call(
          rsf.firestore.setDocument,
          `${COLLECTION_NAME}/${data.key}`,
          {
            ...omit(data, ['key']),
          }
        );
        break;
      default:
        yield call(rsf.firestore.addDocument, COLLECTION_NAME, data);
        break;
    }
    yield put({ type: actions.LOAD_FROM_FIRESTORE });
  } catch (error) {
    console.log(error);
    yield put(actions.saveIntoFireStoreError(error));
  }
}

function* resetFireStoreDocuments() {
  try {
    yield call(deleteDocuments, COLLECTION_NAME);
    yield call(addCollectionAndDocuments, COLLECTION_NAME, fakeDataList);

    yield put({ type: actions.LOAD_FROM_FIRESTORE });
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_FROM_FIRESTORE, loadFromFirestore),
    takeEvery(actions.SAVE_INTO_FIRESTORE, storeIntoFirestore),
    takeEvery(actions.RESET_FIRESTORE_DOCUMENTS, resetFireStoreDocuments),
  ]);
}
