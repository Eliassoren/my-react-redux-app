import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodoForm from './addTodoForm';
import TodoItemDialog from './dialogRoot';
import { showDialog } from '../../actions/dialogAction';


let openDialog = false;

const TodoItem = ({text, onClick}) => (
  <li onClick = {onClick} className="todo-item">
  { text }
  </li>
)

const TodoUnorderedList = ({todoList, dialog, dispatch}) => {
  return(
  <div>
    <TodoItemDialog />
    <ul className = "todo-list">
    {
      todoList.map( (item) => {
        return(
        <TodoItem
          key={item.id}
          {...item}
          onClick = {()=> {
            dispatch(showDialog(item.id))
          }}
        />)
      })
    }
    </ul>
  </div>)
}
TodoUnorderedList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired).isRequired,
}
const mapStateToProps = state => ({
  todoList: state.todoList,
  dialog: state.dialog
})

const DisplayTodoList =  connect(
  mapStateToProps,
)(TodoUnorderedList)

export default DisplayTodoList;
