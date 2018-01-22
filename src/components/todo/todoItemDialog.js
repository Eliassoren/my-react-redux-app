import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeTodoItem } from '../../actions/todoListAction';
import { hideDialog } from '../../actions/dialogAction';
import EditTodoForm from './editTodoForm'

const hide = (id, dispatch) => {
  dispatch(hideDialog(id))
}
let hideDialogAndRemove = async function(id, dispatch) {
  await hide(id, dispatch)
  dispatch(removeTodoItem(id))
}
const ItemDialog = ( props ) => (
  <div className="todo-item-dialog">
    <EditTodoForm />
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
  </div>
)

const mapStateToProps = state => ({
  id: state.dialog.dialogProps,
  isShowing: state.dialog.isShowing,
  isHiding: state.dialog.isHiding
})

const mapDispatchToProps = dispatch => {
  return {
     onHideDialogClick: (id) => {
       dispatch(hideDialog(id))
     },
     
     onRemoveItemClick: (id) => {
        hideDialogAndRemove(id, dispatch)
     }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDialog)
