import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import Filter from './Filter'
import { updateAnecdote } from '../reducers/anecdoteReducer'


const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  })

  const vote = async (anecdote) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes +1 }

    dispatch(updateAnecdote(updatedAnecdote))
    dispatch(setNotification(`You just votes for '${anecdotes.find(a => a.id === anecdote.id).content}'`, 5))
    //showNotificationWithTimeout(dispatch,`You just votes for '${anecdotes.find(a => a.id === anecdote.id).content}'`)
  }

  return (
    <>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
          anecdote={anecdote}
          key={anecdote.id}
          handleVote={() => vote(anecdote)}
        />
      )}
    </>
  )
}

export default AnecdoteList