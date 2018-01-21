const initialState = {
  dialogType: null,
  dialogProps: {},
  isShowing: false,
  isHiding: false
}

const dialog = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DIALOG':
      return {
        dialogType: action.dialogType,
        dialogProps: action.dialogProps,
        isShowing: !state.isShowing
      }

    case 'REQUEST_SHOW_DIALOG' :
      return {
          ...state,
          isShowing: true
      }

    case 'HIDE_DIALOG':
      return {
        ...initialState,
        isHiding: !state.isHiding
      }

    case 'REQUEST_HIDE_DIALOG' :
      return{
          ...state,
          isHiding: true
      }

    default:
      return state
  }
}

export default dialog;
