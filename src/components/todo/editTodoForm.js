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
      onSubmit: (id, text) => {
      dispatch(hideDialog(id))
      dispatch(editTodoItem(id, text))
    }
  }
}
EditTodoForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodoForm);

export default EditTodoForm;
