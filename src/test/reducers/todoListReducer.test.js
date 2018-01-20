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


const testAddTodoItem = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: "Fix this"
  };
  const stateAfter = {
    id: 0,
    text: "Fix this",
    done: false
  };
  reduxFreeze(action);
  reduxFreeze(stateBefore);
};
expect(
  todoList(undefined, {
    type: 'ADD_TODO_ITEM',
    id: 0,
    text: "Fix this"
  })
).toEqual([{
  id: 0,
  text: "Fix this",
  done: false
}]);
