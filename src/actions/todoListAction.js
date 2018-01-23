let nextId = 0;
export const addTodoItem = ( text ) => {
    return dispatch => {
        dispatch({
        type: 'ADD_TODO_ITEM',
        id: nextId++,
        text: text
      })
    }
  }

const requestRemove = () => ({
  type: 'REQUEST_REMOVE_TODO_ITEM'
})

export const removeTodoItem = ( id ) => {
    return dispatch => {
      dispatch(requestRemove())
      dispatch({
          type: 'REMOVE_TODO_ITEM',
          id: id
      })
    }
  }


export const editTodoItem = ( id, text ) => {
  return dispatch => {
    dispatch({
      type: 'EDIT_TODO_ITEM',
      id: id,
      text: text
    })
  }
}

export const toggleTodoItem = ( id ) =>{
    console.log(id+" done [todoListAction]")
    return({
      type: 'TOGGLE_TODO_ITEM',
      id: id
    })}
