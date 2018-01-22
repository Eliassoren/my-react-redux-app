const initialState = {
  todoArr: [],
  isRemoving: false
};

const todoList = (state = initialState, action) => {

  switch (action.type){

    case 'ADD_TODO_ITEM':

    return {
          ...state,
          todoArr: [
            ...state.todoArr,
            {
              id: action.id,
              text: action.text,
              done: false
            }
         ]
      }

    case 'REQUEST_REMOVE_TODO_ITEM' :
        return {
          ...state,
          isRemoving: true
      }

    case 'REMOVE_TODO_ITEM':
    let newArr = state.todoArr.filter( todoItem => todoItem.id !== action.id);
    return {
      ...state,
      todoArr: newArr,
      isRemoving: !state.isRemoving
    }


    case 'EDIT_TODO_ITEM' :
      newArr = state.todoArr.map(todoItem => {
        if(todoItem.id !== action.id){
          return state;
        }

        return [{
          ...todoItem,
          text: action.text
        }]
      })

      return {
        ...state,
        todoArr: newArr
      }

    case 'TOGGLE_TODO_ITEM' :
      newArr = state.todoArr.map(todoItem => {
        if(todoItem.id !== action.id){
          return todoItem;
        }

        return {
          ...todoItem,
          done: !todoItem.done
        }
      })

    return {
      ...state,
      todoArr: newArr
   }
    default: return state;
  }
}

export default todoList;
