import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  removeTodoItem
} from '../../actions/todoListAction';
import {
  hideDialog
} from '../../actions/dialogAction';
import EditTodoForm from './editTodoForm'

const ItemDialog = ( {dispatch, id, isShowing, isHiding} ) => (
  <div className="todo-item-dialog">
    <EditTodoForm />
    <button className="dialog-button" onClick = { () => {
      console.log("Remove "+id+" from dialog")
      dispatch(hideDialog(id))
      if(!isHiding)
      dispatch(removeTodoItem(id)) // Want to use async call here. Hide after delete
    }}>
      Remove
      </button>
    <button className="dialog-button" onClick={ () => {
      dispatch(hideDialog(id))
      }
    }>
    Close
    </button>
  </div>
)

export default connect(
  ( state ) => ({
    id: state.dialog.dialogProps,
    isShowing: state.dialog.isShowing,
    isHiding: state.dialog.isHiding
  })
)(ItemDialog)
