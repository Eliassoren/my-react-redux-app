const initialState = [];

const todoList = (state = initialState, action) => {

  switch (action.type){

    case 'ADD_TODO_ITEM':

    return [
          ...state,
          {
          id: action.id,
          text: action.text,
          done: false
          }
        ]

    case 'REMOVE_TODO_ITEM':
    return state.filter( todoItem => todoItem.id !== action.id);

    case 'EDIT_TODO_ITEM' :
      state.map(todoItem => {
        if(todoItem.id !== action.id){
          return state;
        }

        return [{
          ...todoItem,
          text: action.text
        }]
      })

    case 'TOGGLE_TODO_ITEM' :
      return state.map(todoItem => {
        if(todoItem.id !== action.id){
          return todoItem;
        }

        return {
          ...todoItem,
          done: !todoItem.done
        };
      });

    default: return state;
  }
}

export default todoList;
