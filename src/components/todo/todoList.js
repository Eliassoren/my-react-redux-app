import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodoForm from './addTodoForm';
import {
  editTodoItem,
  removeTodoItem,
  toggleTodoItem
} from '../../actions/todoListAction';


const TodoItem = ({text}) => (
  <li className="todo-item">{ text }</li>
)

const todoUnorderedList = ({todoList}) => {
  let fakeList = [{id: 1, text: "Test", done: false}]
  return(
  <div>
    <ul className = "todo-list">
    {
      todoList.map( (item) => {
        <TodoItem
          key={item.id}
          {...item}
        />
      })
    }
    </ul>
  </div>)
}
todoUnorderedList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired).isRequired,
}
const mapStateToProps = state => ({
  todoList: state.todoList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  editTodoItem,
  removeTodoItem,
  toggleTodoItem,
}, dispatch)

const DisplayTodoList =  connect(
  mapStateToProps,
  mapDispatchToProps
)(todoUnorderedList)

export default DisplayTodoList;
