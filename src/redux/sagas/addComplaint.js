import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../actions/actionTypes';
import axios from '../../services/axiosConfig';
import {select} from 'redux-saga/effects';

function* sendToAPi(complaints, userId) {
  let config = {
    method: 'patch',
    url: '/complaints/' + userId,
    data: {complaints: complaints},
  };
  return yield axios(config);
}

const getComplaints = state => state.complaints;
const getUserId = state => state.userId;

function* addComplaint({payload}) {
  try {
    let complaints = yield select(getComplaints);
    let userId = yield select(getUserId);
    let complaint = {
      complaint: payload,
      answered: false,
      createdAt: Date.now(),
    };
    let updatedComplaints = complaints.concat(complaint);
    let result = yield call(sendToAPi, updatedComplaints, userId);
    yield put({type: ActionTypes.ADD_COMPLAINT_SUCCESS, payload: complaint});
  } catch (err) {
    yield console.log(err.response);
    yield put({type: ActionTypes.ADD_COMPLAINT_FAILED, payload: err.message});
  }
}

function* watchAddComplaint() {
  yield takeLatest(ActionTypes.ADD_COMPLAINT, addComplaint);
}

export default watchAddComplaint;
