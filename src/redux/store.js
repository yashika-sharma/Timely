import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import logger from 'redux-logger';

const initialState = {
  userId: '',
  complaints: [],
  isAuthenticated: false,
  error: '',
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

export default store;
