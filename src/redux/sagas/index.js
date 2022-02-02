import {all, call} from 'redux-saga/effects';
import watchFetchComplaints from './fetchComplaints';
import watchCreateComplaints from './createComplaints';
import watchAuthenticate from './authentication';
import watchAddComplaint from './addComplaint';
import watchDeleteComplaint from './deleteComplaint';
import watchEditComplaint from './editComplaint';

export function* helloSaga() {
  console.log('Hello Saga!');
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(helloSaga),
    watchFetchComplaints(),
    watchCreateComplaints(),
    watchAuthenticate(),
    watchAddComplaint(),
    watchDeleteComplaint(),
    watchEditComplaint(),
  ]);
}
