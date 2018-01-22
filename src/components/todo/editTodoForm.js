import React from 'react'
import { connect } from 'react-redux'
import {
  editTodoItem,
  toggleTodoItem
} from '../../actions/todoListAction';
import { hideDialog } from '../../actions/dialogAction';

let EditTodoForm = ( {dispatch, id, todoItem } ) => {
  let input;
  let done = false;
  if(todoItem) done = todoItem.done
  return (
  <form className="edit-todo-form" onSubmit = { (e) => {
      e.preventDefault();
      if(!input.value) return;

      dispatch(editTodoItem(input.value.trim(), id))
      input.value = ''
  }}>
    <input className="input" placeholder="Edit todo item"  ref={(text) => {
        input = text;
    }}/>
    <button id="editTodoItem" className="button" type="submit" >
      Edit item
    </button>
    <label>
    <input type="checkbox" id="doneTodoItem" className="checkbox" checked = { done }
      onChange={ (e) => {
        e.preventDefault();
        dispatch(toggleTodoItem(id))
    }} />
    Done
    </label>
  </form>)
}

EditTodoForm = connect(
  ( state ) => ({
    id: state.dialog.dialogProps,
    todoItem: state.todoList.todoArr.find( item => item.id === state.dialog.dialogProps )
  })
)(EditTodoForm);

export default EditTodoForm;
