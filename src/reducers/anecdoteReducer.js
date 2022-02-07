


import anecdotesServices from '../services/anecdotes'


const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
  case 'NEW_ANECDOTE':
    return [...state, action.data]
  case 'INIT_ANECDOTE':
    return action.data
  case 'VOTE_ANECDOTE':
    return state.map(a => a.id !== action.data.id? a : action.data)
  default:
    return state
  }

}

export default anecdoteReducer

export const createAnecdote = (data) => {
  return async dispatch => {
    const anecdote = await anecdotesServices.createAnecdote(data)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote
    })
  }
}

export const updateAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesServices.updateAnecdote(anecdote)
    dispatch(
      {
        type: 'VOTE_ANECDOTE',
        data: updatedAnecdote
      }
    )
  }
}
export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesServices.getAll()

    dispatch({
      type : 'INIT_ANECDOTE',
      data : anecdotes
    })
  }
}
