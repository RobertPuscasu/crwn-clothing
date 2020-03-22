import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from  './reducers';
import logger from 'redux-logger';

import epicMiddleware from './middleware/epic.middleware';
import epics from './epics';
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
const initialState = {}
const middlewares = [logger, epicMiddleware]
export const store = createStore(
  rootReducer(),
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
)

epicMiddleware.run(epics)
