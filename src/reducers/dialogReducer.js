const initialState = {
  dialogType: null,
  dialogProps: {}
}

const dialog = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DIALOG':
    console.log("show")
      return {
        dialogType: action.dialogType,
        dialogProps: action.dialogProps
      }
    case 'HIDE_DIALOG':
      console.log("hide")
      return initialState
    default:
      return state
  }
}

export default dialog;
