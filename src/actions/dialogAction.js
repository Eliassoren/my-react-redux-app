
export const requestShowDialog = ( dialogProps ) => {
  return({
    type: 'REQUEST_SHOW_DIALOG',
    dialogProps: dialogProps
  })
}

export const requestHideDialog = ( dialogProps ) => {
  return({
    type: 'REQUEST_HIDE_DIALOG',
    dialogProps: dialogProps
  })
}

const show = ( dialogProps ) => {
  return ({
  type: 'SHOW_DIALOG',
  dialogType: 'TODO_DIALOG',
  dialogProps: dialogProps
  })
}

const hide = ( dialogProps ) => {
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
