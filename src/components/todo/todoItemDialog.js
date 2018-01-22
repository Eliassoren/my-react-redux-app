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
const ItemDialog = ( props ) => (
  <div className="todo-item-dialog">
    <h2 className="dialog-title">{props.todoItem?props.todoItem.text:"TodoItem"}</h2>
    <EditTodoForm />
    <form className="dialog-form">
      <label>
      <input type="checkbox" className="checkbox" checked = { props.todoItem.done }
        onChange={ (e) => {
          e.preventDefault();
          props.onCheckboxChange(props.id)
      }} />
      Done
      </label>
      <button className="dialog-button" onClick = { () => {
          props.onRemoveItemClick(props.id)
      }}>
        Remove
        </button>
      <button className="dialog-button" onClick={ () => {
          props.onHideDialogClick(props.id)
        }
      }>
      Close
      </button>
    </form>
  </div>
)

const mapStateToProps = state => ({
  id: state.dialog.dialogProps,
  todoItem: state.todoList.todoArr.find( item => item.id === state.dialog.dialogProps )
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
)(ItemDialog)
