/**
 * @jest-environment node
 */

import counter from '../../reducers/counterReducer';
import {
   incrementCounter,
   incrementCounterAsync,
   decrementCounter,
   decrementCounterAsync } from '../../actions/counterAction';
import reduxFreeze from 'redux-freeze';
import expect from 'expect'

const testIncrement = () => {
  const stateBefore = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
  };

  const action = {
    type: 'INCREMENT_COUNTER'
  };

  const stateAfter = {
    count: 1,
    isIncrementing: false,
    isDecrementing: false
  };
}

expect(
  (counter({ count: 0}, incrementCounter()))
).toEqual( {
  count: 1
});
