import { applyMiddleware, compose, createStore, Store } from 'redux'
import persistReducer from  './reducers';
import logger from 'redux-logger';

import epicMiddleware from './middleware/epic.middleware';
import epics from './epics';
import { persistStore } from 'redux-persist';
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
const initialState = {}
const middlewares = [logger, epicMiddleware]
export const store: Store = createStore(
  persistReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
)

export const persistor = persistStore(store);

epicMiddleware.run(epics)
