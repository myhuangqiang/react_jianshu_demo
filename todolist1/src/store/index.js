import { createStore, applyMiddleware  } from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import todoSagas from './saga'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(thunk) // thunk 中间件

  applyMiddleware(sagaMiddleware)  // redux-saga 中间件
);

sagaMiddleware.run(todoSagas)

export default store;