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

describe('addTodoItem', () => {
  it('should increment the counter', () => {
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
      isIncrementing: true,
      isDecrementing: false
    };
    reduxFreeze(action);
    reduxFreeze(stateBefore);
    expect(
      counter(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
