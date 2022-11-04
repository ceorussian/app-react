import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
  
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;