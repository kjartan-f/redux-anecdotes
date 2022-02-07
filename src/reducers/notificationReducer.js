const initialNotification = []


const notificationReducer = (state = initialNotification, action) => {

  switch(action.type) {
  case 'NOTIFY':
    return [action.message, ...state]
  case 'REMOVE':
    return state.filter(n => n.id !== action.id)
  default: return state
  }

}

export default notificationReducer

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const createNotification = (notification) => {
  return {
    type: 'NOTIFY',
    message: {
      id: generateId(),
      msg: notification
    }
  }
}

export const removeNotification = (id) => {
  return {
    type: 'REMOVE',
    id: id
  }
}

export const showNotificationWithTimeout = (dispatch, message) => {
  const notification = createNotification(message)
  const id = notification.message.id
  dispatch(notification)
  const remove = removeNotification(id)
  setTimeout(() => {
    dispatch(remove)
  }, 5000)

}

export const setNotification = (message, timeout) => {
  return dispatch => {
    const notification = createNotification(message)
    const id = notification.message.id
    dispatch(notification)
    const remove = removeNotification(id)
    setTimeout(() => {
      dispatch(remove)
    }, timeout*1000)
  }
}


