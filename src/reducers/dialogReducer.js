const initialState = {
  dialogType: null,
  dialogProps: {},
  isShowing: false,
  isHiding: false,
  visible: false
}

const dialog = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DIALOG':
      return {
        dialogType: action.dialogType,
        dialogProps: action.dialogProps,
        isShowing: !state.isShowing,
        visible: true
      }

    case 'REQUEST_SHOW_DIALOG' :
      return {
          ...state,
          isShowing: true
     }

    case 'HIDE_DIALOG':
      return {
        ...initialState,
        isHiding: !state.isHiding,
        visible: false
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
