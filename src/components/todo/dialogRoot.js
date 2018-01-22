import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import ItemDialog from './todoItemDialog';

const ItemDialogRoot = ( { dialogType, dialogProps} ) => {
    if(dialogType){
      return (<ItemDialog {...dialogProps} />)
    }
    return (<span> </span>)
}
const TodoItemDialog =  connect(
  state => state.dialog
)(ItemDialogRoot)

export default TodoItemDialog;
