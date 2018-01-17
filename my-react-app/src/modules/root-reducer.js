import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../components/counter/counter'
export default combineReducers({
  routing: routerReducer, counter
})
