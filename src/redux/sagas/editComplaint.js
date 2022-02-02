import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../actions/actionTypes';
import axios from '../../services/axiosConfig';
import {select} from 'redux-saga/effects';

function* sendToAPi(updatedComplaints, userId) {
  let config = {
    method: 'patch',
    url: '/complaints/' + userId,
    data: {complaints: updatedComplaints},
  };
  return yield axios(config);
}

const getComplaints = state => state.complaints;
const getUserId = state => state.userId;

function* editComplaint({payload}) {
  try {
    let complaints = yield select(getComplaints);
    let userId = yield select(getUserId);
    let updatedComplaints = complaints.map(function(obj) {
      return obj.createdAt === payload.createdAt
        ? {...obj, complaint: payload.complaint}
        : obj;
    });
    let result = yield call(sendToAPi, updatedComplaints, userId);
    yield put({type: ActionTypes.EDIT_COMPLAINT_SUCCESS, payload: payload});
  } catch (err) {
    yield console.log(err.response);
    yield put({
      type: ActionTypes.EDIT_COMPLAINT_FAILED,
      payload: err.message,
    });
  }
}

function* watchEditComplaint() {
  yield takeLatest(ActionTypes.EDIT_COMPLAINT, editComplaint);
}

export default watchEditComplaint;
