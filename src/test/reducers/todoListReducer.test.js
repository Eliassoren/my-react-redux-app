/**
 * @jest-environment node
 */
import todoList from '../../reducers/todoListReducer';
import {
  addTodoItem,
  editTodoItem,
  toggleTodoItem,
  removeTodoItem } from '../../actions/todoListAction';
import reduxFreeze from 'redux-freeze';
import expect from 'expect'


describe('addTodoItem', () => {
  it('should add a todo item to state', () => {
    const stateBefore = {todoArr: [], isRemoving: false};
    const action = {
      type: 'ADD_TODO_ITEM',
      id: 0,
      text: "Fix this"
    }
    const stateAfter = {
      todoArr: [
        {
        id: 0,
        text: "Fix this",
        done: false
        }
      ],
      isRemoving: false
    }
    reduxFreeze(action);
    reduxFreeze(stateBefore);
    expect(
      todoList(stateBefore, action)
    ).toEqual(stateAfter)
  })
})

describe('removeTodoItem', () => {
  it('should add a todo item to state', () => {
    const stateBefore = {
      todoArr: [
        {
        id: 0,
        text: "Fix this",
        done: false
        }
      ],
      isRemoving: false
    }
    const action = {
      type: 'REMOVE_TODO_ITEM',
      id: 0
    }
    const stateAfter = {todoArr: [], isRemoving: true};
    reduxFreeze(action);
    reduxFreeze(stateBefore);
    expect(
      todoList(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
