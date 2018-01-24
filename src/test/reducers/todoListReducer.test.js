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
      text: "Before"
    }
    const stateAfter = {
      todoArr: [
        {
        id: 0,
        text: "Before",
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
  it('should remove an item from the todo list', () => {
    const stateBefore = {
      todoArr: [
        {
        id: 0,
        text: "Before",
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

describe('toggleTodoItem', () => {
  it('should toggle an item and mark it as done', () => {
    const stateBefore = {
      todoArr: [
        {
          id: 0,
          text: "Before",
          done: false
        }
      ],
      isRemoving: false
    }
    const action = {
      type: 'TOGGLE_TODO_ITEM',
      id: 0
    }
    const stateAfter = {todoArr: [
      {
        id: 0,
        text: "Before",
        done: true
      }
    ],
    isRemoving: false};
    reduxFreeze(action);
    reduxFreeze(stateBefore);

    expect(
      todoList(stateBefore, action)
    ).toEqual(stateAfter)
  })
})

describe('editTodoItem', () => {
  it('should edit the text of a todo item', () => {
    const stateBefore = {
      todoArr: [
        {
          id: 0,
          text: "Before",
          done: false
        }
      ],
      isRemoving: false
    }
    const action = {
      type: 'EDIT_TODO_ITEM',
      id: 0,
      text: "Edited"
    }
    const stateAfter = {todoArr: [
      {
        id: 0,
        text: "Edited",
        done: false
      }
    ],
    isRemoving: false};
    reduxFreeze(action);
    reduxFreeze(stateBefore);

    expect(
      todoList(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
