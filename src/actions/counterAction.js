
export const incrementCounter = () => {
  return dispatch => {
    dispatch({
      type: 'INCREMENT_COUNTER_REQUESTED'
    })

    dispatch({
      type: 'INCREMENT_COUNTER'
    })
  }
}

export const decrementCounter = () => {
  return dispatch => {
    dispatch({
      type: 'DECREMENT_COUNTER_REQUESTED'
    })

    dispatch({
      type: 'DECREMENT_COUNTER'
    })
  }
}

// Async function returns a Thunk
export const incrementCounterAsync = () => {
  return dispatch => {
    dispatch({
      type: 'INCREMENT_COUNTER_REQUESTED'
    })
    // 3 second delay before increment
    return setTimeout(() => {
      dispatch({
        type: 'INCREMENT_COUNTER'
      })
    }, 3000)
  }
}

export const decrementCounterAsync = () => {
  return dispatch => {
    dispatch({
      type: 'DECREMENT_COUNTER_REQUESTED'
    })
    // 3 Second delay before decrementing
    return setTimeout(() => {
      dispatch({
        type: 'DECREMENT_COUNTER'
      })
    }, 3000)
  }
}
