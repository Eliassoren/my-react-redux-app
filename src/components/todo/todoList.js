import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodoForm from './addTodoForm';
import TodoItemDialog from './dialogRoot';
import { showDialog } from '../../actions/dialogAction';


let openDialog = false;

const TodoItem = ({text, done, onClick}) => (
  <li onClick = {onClick} className = {(done)?"todo-item done":"todo-item"}>
  { text }
  </li>
)

const TodoUnorderedList = ({todoArr, dialog, dispatch}) => {
  return(
  <div>
    <TodoItemDialog />
    <ul className = "todo-list">
    {
      todoArr.map( (item) => {
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
    todoArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired).isRequired,
}
const mapStateToProps = state => ({
  todoArr: state.todoList.todoArr,
  dialog: state.dialog
})

const DisplayTodoList =  connect(
  mapStateToProps,
)(TodoUnorderedList)

export default DisplayTodoList;
