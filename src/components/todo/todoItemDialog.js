import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
  editTodoItem,
  removeTodoItem,
  toggleTodoItem
} from '../../actions/todoListAction';
import {
  hideDialog
} from '../../actions/dialogAction';

const ItemDialog = ( {dispatch, id} ) => (
  <div className="todo-item-dialog">
    <button className="dialog-button" >Edit</button>
    <button className="dialog-button" onClick = { () => {
      console.log("Remove "+id+" from dialog")
      dispatch(removeTodoItem(id))/*.then(() => {
        dispatch(hideDialog())
      })*/
      dispatch(hideDialog())
    }}>
      Remove
      </button>
    <button className="dialog-button" onClick={ () => {
      dispatch(hideDialog())
      }
    }>
    Close
    </button>
  </div>
)

export default connect(
  (state ) => ({
    id: state.dialog.dialogProps
  })
)(ItemDialog)
