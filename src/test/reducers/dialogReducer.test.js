/**
 * @jest-environment node
 */
import reduxFreeze from 'redux-freeze';
import expect from 'expect';
import dialog from '../../reducers/dialogReducer';
import {
  requestShowDialog,
  requestHideDialog,
  showDialog,
  hideDialog
} from '../../actions/dialogAction'

describe('showDialog', () => {
  it('should set dialog to visible', () => {
    const stateBefore = {
      dialogType: null,
      dialogProps: {},
      isShowing: false,
      isHiding: false,
      visible: false
    };
    const action = {
      type: 'SHOW_DIALOG',
      dialogType: 'TODO_DIALOG',
      dialogProps: 0
    }
    const stateAfter = {
      dialogType: 'TODO_DIALOG',
      dialogProps: 0,
      isShowing: true,
      visible: true
    }
    reduxFreeze(action);
    reduxFreeze(stateBefore);
    expect(
      dialog(stateBefore, action)
    ).toEqual(stateAfter)
  })
})

describe('hideDialog', () => {
  it('should set dialog to not visible, with initial state', () => {
    const stateBefore = {
      dialogType: "TODO_DIALOG",
      dialogProps: 0,
      isShowing: false,
      isHiding: false,
      visible: true
    };
    const action = {
      type: 'HIDE_DIALOG',
      dialogProps: 0
    }
    const stateAfter = {
      dialogType: null,
      dialogProps: {},
      isShowing: false,
      isHiding: true,
      visible: false
    }
    reduxFreeze(action);
    reduxFreeze(stateBefore);
    expect(
      dialog(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
