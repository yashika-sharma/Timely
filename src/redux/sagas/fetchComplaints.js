import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../actions/actionTypes';
import axios from '../../services/axiosConfig';

function* getComplaints(payload) {
  const config = {
    method: 'get',
    url: '/complaints/' + payload,
  };
  return yield axios(config);
}

function* fetchComplaintsFromApi({payload}) {
  try {
    let result = yield call(getComplaints, payload);

    yield put({
      type: ActionTypes.FETCH_COMPLAINTS_SUCCESS,
      payload: result.data,
    });
    yield put({type: ActionTypes.TOGGLE_ISAUTHENTICATED, payload: true});
  } catch (err) {
    yield console.log(
      'document failed to be fetched from collection',
      err.response,
    );
    yield put({
      type: ActionTypes.FETCH_COMPLAINTS_FAILED,
      payload: err.message,
    });
  }
}

function* watchFetchComplaints() {
  yield takeLatest(ActionTypes.FETCH_COMPLAINTS, fetchComplaintsFromApi);
}

export default watchFetchComplaints;
