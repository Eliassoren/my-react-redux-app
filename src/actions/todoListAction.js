let nextId = 0;
export const addTodoItem = ( text ) => ({
      type: 'ADD_TODO_ITEM',
      id: nextId++,
      text: text
    })

export const removeTodoItem = () => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_TODO_ITEM'
    })
  }
}

export const editTodoItem = () => {
  return dispatch => {
    dispatch({
      type: 'EDIT_TODO_ITEM'
    })
  }
}

export const toggleTodoItem = () => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_TODO_ITEM'
    })
  }
}
