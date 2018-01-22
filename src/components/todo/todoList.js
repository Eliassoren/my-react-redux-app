import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodoForm from './addTodoForm';
import TodoItemDialog from './todoItemDialog';
import { showDialog } from '../../actions/dialogAction';



const TodoItem = ({text, done, onClick}) => (
  <li onClick = {onClick} className = {(done)?"todo-item done":"todo-item"}>
  { text }
  </li>
)

const TodoUnorderedList = ( props ) => {
  return(
  <div>
    <TodoItemDialog />
    <ul className = {props.dialog.visible?"todo-list hidden":"todo-list"} >
    {
      props.todoArr.map( (item) => {
        return(
        <TodoItem
          key={item.id}
          {...item}
          onClick = {() => {
            props.onTodoItemClick(item.id)
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

const mapDispatchToProps = dispatch => {
  return {
    onTodoItemClick: ( id ) => {
      dispatch(showDialog(id))
    }
  }
}

const DisplayTodoList =  connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoUnorderedList)

export default DisplayTodoList;
