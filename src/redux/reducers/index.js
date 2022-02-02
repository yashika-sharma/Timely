import * as ActionTypes from '../actions/actionTypes';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_ISAUTHENTICATED: {
      return {...state, isAuthenticated: action.payload};
    }

    case ActionTypes.FETCH_COMPLAINTS_SUCCESS: {
      return {
        ...state,
        userId: action.payload._id,
        complaints: action.payload.complaints,
      };
    }

    case ActionTypes.FETCH_COMPLAINTS_FAILED: {
      return {...state, error: action.payload};
    }

    case ActionTypes.ADD_COMPLAINT_SUCCESS: {
      let newComplaints = [...state.complaints];
      newComplaints.push(action.payload);
      return {...state, complaints: newComplaints};
    }

    case ActionTypes.ADD_COMPLAINT_FAILED: {
      return {...state, error: action.payload};
    }

    case ActionTypes.DELETE_COMPLAINT_SUCCESS: {
      return {
        ...state,
        error: '',
        complaints: state.complaints.filter(
          complaint => complaint.createdAt !== action.payload,
        ),
      };
    }

    case ActionTypes.DELETE_COMPLAINT_FAILED: {
      return {...state, error: action.payload};
    }

    case ActionTypes.EDIT_COMPLAINT_SUCCESS: {
      return {
        ...state,
        error: '',
        complaints: state.complaints.map(complaint =>
          complaint.createdAt === action.payload.createdAt
            ? {...complaint, complaint: action.payload.complaint}
            : complaint,
        ),
      };
    }

    case ActionTypes.EDIT_COMPLAINT_FAILED: {
      return {...state, error: action.payload};
    }

    default:
      return state;
  }
}
