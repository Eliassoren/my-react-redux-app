import React from 'react'
import { connect } from 'react-redux'
import { editTodoItem } from '../../actions/todoListAction';
import { hideDialog } from '../../actions/dialogAction';

let EditTodoForm = ( props ) => {
  let input;
  return (
  <form className="dialog-form" onSubmit = { (e) => {
      e.preventDefault();
      if(!input.value) return;
      props.onSubmit(props.id, input.value.trim(), );
      input.value = ''
  }}>
    <input className="edit-input todo-form-item" placeholder= {props.text} ref={(text) => {
        input = text;
    }}/>
    <button className="edit-button todo-form-item" type="submit" >
      Edit item
    </button>
  </form>)
}

const mapStateToProps = state => ({
  id: state.dialog.dialogProps,
  text: state.todoList.todoArr.find( item => item.id === state.dialog.dialogProps).text
})
const mapDispatchToProps = dispatch => {
  return {
      onSubmit: (id, text) => {
      dispatch(editTodoItem(id, text))
    }
  }
}
EditTodoForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodoForm);

export default EditTodoForm;
