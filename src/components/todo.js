import React from 'react';
import AddTodoForm from './todo/addTodoForm';
import DisplayTodoList from './todo/todoList';

/**
* Component for todo list
*/
const Todo = () => (
  <div>
  <h2 className = "page-title"/>
  <AddTodoForm />
  <DisplayTodoList />
  </div>
)

export default Todo;
