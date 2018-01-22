import React from 'react';
import AddTodoForm from './addTodoForm';
import DisplayTodoList from './todoList';

export default () => (
  <div>
  <h2 className = "page-title"/>
  <AddTodoForm />
  <DisplayTodoList />
  </div>
)
