import {put, takeLatest, delay} from 'redux-saga/effects';
import * as ActionTypes from '../actions/actionTypes';

function* toggleIsAuthenticated({payload}) {
  yield put({type: ActionTypes.TOGGLE_ISAUTHENTICATED, payload: payload});
}

function* watchAuthenticate() {
  yield takeLatest(ActionTypes.CHANGE_AUTHENTICATION, toggleIsAuthenticated);
}

export default watchAuthenticate;
