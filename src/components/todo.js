import React from 'react';
import AddTodoForm from './todo/addTodoForm';
import DisplayTodoList from './todo/todoList';

export default () => (
  <div>
  <h2 className = "page-title"/>
  <AddTodoForm />
  <DisplayTodoList />
  </div>
)
