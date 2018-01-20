import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import counter from './counterReducer';
import todoList from "./todoListReducer";

export const history = createHistory();

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

const rootReducer = combineReducers({
  routing: routerReducer,
  counter: counter
});

const devToolsExtension = (process.env.NODE_ENV === 'development') &&
                          window.devToolsExtension;

if(typeof devToolsExtension === 'function'){
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  composedEnhancers
);

export default store;
