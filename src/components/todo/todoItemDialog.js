import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  removeTodoItem,
  toggleTodoItem,
  editTodoItem
 } from '../../actions/todoListAction';
import { hideDialog } from '../../actions/dialogAction';

const EditTodoForm = ( props ) => {
  let input;
  return (
  <form className="dialog-form" onSubmit = { (e) => {
      e.preventDefault();
      if(!input.value) return;
      props.onSubmit(props.id, input.value.trim(), );
      input.value = ''
  }}>
    <input className="edit-input todo-form-item" placeholder= {props.todoItem.text} ref={(text) => {
        input = text;
    }}/>
    <button className="edit-button todo-form-item" type="submit" >
      Edit item
    </button>
  </form>)
}

const DialogForm = ( props ) => (
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
)


const TodoItemDialog = ( props ) => {
  if(props.dialogType){
    return (
    <div className="todo-item-dialog">
      <h2 className="dialog-title">{props.todoItem?props.todoItem.text:"TodoItem"}</h2>
      <EditTodoForm {...props} />
      <DialogForm {...props} />
    </div>)
  }
  return (null)
}

const mapStateToProps = state => ({
  id: state.dialog.dialogProps,
  todoItem: state.todoList.todoArr.find( item => item.id === state.dialog.dialogProps ),
  dialogType: state.dialog.dialogType
})

const mapDispatchToProps = dispatch => {
  return {
     onHideDialogClick: (id) => {
       dispatch(hideDialog(id))
     },

     onRemoveItemClick: (id) => {
       dispatch(hideDialog(id))
       dispatch(removeTodoItem(id))
     },

     onCheckboxChange: (id) => {
       dispatch(toggleTodoItem(id))
     },

     onSubmit: (id, text) => {
       dispatch(editTodoItem(id, text))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemDialog)
