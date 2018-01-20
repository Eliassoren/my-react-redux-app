import React from 'react'
import { connect } from 'react-redux'
import { addTodoItem } from '../../actions/todoListAction'

let AddTodoForm = ( {dispatch} ) => {
  let input;
  return (
  <form className="add-todo-form" onSubmit = { (e) => {
      e.preventDefault();
      if(!input.value) return;

      dispatch(addTodoItem(input.value.trim()))
      input.value = ''
  }}>
    <input className="input" placeholder="New todo item"  ref={(text) => {
        input = text;
    }}/>
    <button id="addTodoItem" className="button" type="submit" >
      Add item
    </button>
  </form>)
}

AddTodoForm = connect()(AddTodoForm);

export default AddTodoForm;
