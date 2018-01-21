
export const showDialog = ( dialogProps ) => {
  return({
  type: 'SHOW_DIALOG',
  dialogType: 'TODO_DIALOG',
  dialogProps: dialogProps
})}

export const hideDialog = ( dialogType ) => {
  return ({type: 'HIDE_DIALOG'})
}
