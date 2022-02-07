import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    props.createAnecdote(event.target.anecdote.value)
    props.setNotification(`new anecdote ${event.target.anecdote.value}`, 5)
    event.target.anecdote.value = ''

  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default connect(null, { createAnecdote, setNotification })(AnecdoteForm)