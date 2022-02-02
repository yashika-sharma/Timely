import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../actions/actionTypes';
import axios from '../../services/axiosConfig';

function* createCollection(payload) {
  let config = {
    method: 'post',
    url: '/complaints',
    data: {_id: payload},
  };
  return yield axios(config);
}

function* createComplaintsCollection({payload}) {
  try {
    let result = yield call(createCollection, payload);
    yield put({
      type: ActionTypes.FETCH_COMPLAINTS_SUCCESS,
      payload: result.data,
    });
    yield put({type: ActionTypes.TOGGLE_ISAUTHENTICATED, payload: true});
  } catch (err) {
    yield console.log(
      'document failed to be created in complaints collection',
      err.response,
    );
  }
}

function* watchCreateComplaints() {
  yield takeLatest(ActionTypes.CREATE_COMPLAINTS, createComplaintsCollection);
}

export default watchCreateComplaints;
