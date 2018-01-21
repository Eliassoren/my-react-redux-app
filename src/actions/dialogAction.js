
export const requestShowDialog = ( dialogProps ) => {
  console.log("Requesting to show "+dialogProps)
  return({type: 'REQUEST_SHOW_DIALOG'})
}

export const requestHideDialog = ( dialogProps ) => {
  console.log("Requesting to hide "+dialogProps)
  return({type: 'REQUEST_HIDE_DIALOG'})
}

const show = ( dialogProps ) => {
  console.log("Showing "+dialogProps)
  return ({
  type: 'SHOW_DIALOG',
  dialogType: 'TODO_DIALOG',
  dialogProps: dialogProps
  })
}

const hide = ( dialogProps ) => {
  console.log("Hide "+dialogProps+" from action")
  return ({type: 'HIDE_DIALOG'})
}
export const showDialog = ( dialogProps ) => {
  return dispatch => {
    dispatch(requestShowDialog( dialogProps ))
    dispatch(show(dialogProps))
  }
}

export const hideDialog = ( dialogProps ) => {
  return dispatch => {
    dispatch(requestHideDialog( dialogProps ))
    dispatch(hide( dialogProps ))
  }
}
