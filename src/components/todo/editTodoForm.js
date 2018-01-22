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
      props.onSubmit(input.value.trim(), props.id);
      input.value = ''
  }}>
    <input className="edit-input" placeholder="Edit todo item"  ref={(text) => {
        input = text;
    }}/>
    <button id="editTodoItem" className="edit-button" type="submit" >
      Edit item
    </button>
  </form>)
}

const mapStateToProps = state => ({
  id: state.dialog.dialogProps
})
const mapDispatchToProps = dispatch => {
  return {
      onSubmit: (text, id) => {
      dispatch(hideDialog(id))
      dispatch(editTodoItem(text, id))
    }
  }
}
EditTodoForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodoForm);

export default EditTodoForm;
