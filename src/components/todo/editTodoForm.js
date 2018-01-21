import React from 'react'
import { connect } from 'react-redux'
import {
  editTodoItem,
  toggleTodoItem
} from '../../actions/todoListAction';
import {
  hideDialog
} from '../../actions/dialogAction';

let EditTodoForm = ( {dispatch, id, done } ) => {
  let input;
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
    done: state.todoList[state.dialog.dialogProps].done
  })
)(EditTodoForm);

export default EditTodoForm;
