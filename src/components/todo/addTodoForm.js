import React from 'react'
import { connect } from 'react-redux'
import { addTodoItem } from '../../actions/todoListAction'
import { bindActionCreators } from 'redux';



let AddTodoForm = (props) => {
  let input;
  return (
  <form className="add-todo-form" onSubmit = { (e) => {
      e.preventDefault();
      if(!input.value) return;
      props.onAddClick(input.value.trim())
      input.value = ''
  }}>
    <input className="input"  placeholder="New todo item"  ref = {(text) => {
        input = text;
    }}/>
    <button id="addTodoItem" className="button" type="submit" >
      Add item
    </button>
  </form>)
}

const mapDispatchToProps = dispatch => {
    return {
      onAddClick: text => {
        dispatch(addTodoItem(text))
      }
    }
}

AddTodoForm = connect(
  null, // First argument must contain mapStateToProps
  mapDispatchToProps
)(AddTodoForm);

export default AddTodoForm;
