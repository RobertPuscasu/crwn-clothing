import { applyMiddleware, compose, createStore, Store } from 'redux'
import persistReducer from  './reducers';
import logger from 'redux-logger';

import epicMiddleware from './middleware/epic.middleware';
import epics from './epics';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
const initialState = {}


const middlewares = [ epicMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const history = createBrowserHistory();

export const store: Store = createStore(
  persistReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(routerMiddleware(history),...middlewares)),
)

export const persistor = persistStore(store);

epicMiddleware.run(epics)
