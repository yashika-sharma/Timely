import * as ActionTypes from './actionTypes';

export const fetchComplaints = userId => ({
  type: ActionTypes.FETCH_COMPLAINTS,
  payload: userId,
});

export const createComplaintsCollection = userId => ({
  type: ActionTypes.CREATE_COMPLAINTS,
  payload: userId,
});

export const changeAuthentication = value => ({
  type: ActionTypes.CHANGE_AUTHENTICATION,
  payload: value,
});

export const addComplaint = complaint => ({
  type: ActionTypes.ADD_COMPLAINT,
  payload: complaint,
});

export const deleteComplaint = createdAt => ({
  type: ActionTypes.DELETE_COMPLAINT,
  payload: createdAt,
});

export const editComplaint = (createdAt, complaint) => ({
  type: ActionTypes.EDIT_COMPLAINT,
  payload: {createdAt, complaint},
});
