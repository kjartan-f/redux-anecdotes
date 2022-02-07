import reducer, { createAnecdote, voteAnecdote } from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('Aneccdote reducer', () => {

  test('return new state with action NEW_ANECDOTE', () => {
    const state = []
    const action = createAnecdote('the anecdote')

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })

  test('vote for a anecdote', () => {
    const state = []
    const action = createAnecdote('the anecdote')

    deepFreeze(state)
    const newState = reducer(state, action)

    deepFreeze(newState)

    const vote = voteAnecdote(newState[0].id)

    const voteState = reducer(newState, vote)
    console.log('VOTE', newState)
    expect(voteState[0].votes).toEqual(1)
  })
})