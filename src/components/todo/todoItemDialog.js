import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  removeTodoItem,
  toggleTodoItem
 } from '../../actions/todoListAction';
import { hideDialog } from '../../actions/dialogAction';
import EditTodoForm from './editTodoForm'


let hideDialogAndRemove = async function(id, dispatch) {
  dispatch(hideDialog(id))
  dispatch(removeTodoItem(id))
}
const TodoItemDialog = ( props ) => {
  if(props.dialogType){
    return (
    <div className="todo-item-dialog">
      <h2 className="dialog-title">{props.todoItem?props.todoItem.text:"TodoItem"}</h2>
      <EditTodoForm />
      <form className="dialog-form">
        <label for="done">Done</label>
        <input id="done" type="checkbox" className="checkbox todo-form-item" checked = { props.todoItem.done }
          onChange={ (e) => {
            e.preventDefault();
            props.onCheckboxChange(props.id)
        }} />

        <button className="dialog-button todo-form-item" onClick = { () => {
            props.onRemoveItemClick(props.id)
        }}>
          Remove
          </button>
        <button className="dialog-button todo-form-item" onClick={ () => {
            props.onHideDialogClick(props.id)
          }
        }>
        Close
        </button>
      </form>
    </div>)
  }
  return (null)
}

const mapStateToProps = state => ({
  id: state.dialog.dialogProps,
  todoItem: state.todoList.todoArr.find( item => item.id === state.dialog.dialogProps ),
  dialogType: state.dialog.dialogType,
})

const mapDispatchToProps = dispatch => {
  return {
     onHideDialogClick: (id) => {
       dispatch(hideDialog(id))
     },

     onRemoveItemClick: (id) => {
        hideDialogAndRemove(id, dispatch)
     },

     onCheckboxChange: (id) => {
       dispatch(toggleTodoItem(id))
     }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemDialog)
