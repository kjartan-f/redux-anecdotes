import React, { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notifications from './components/Notifications'
import { initAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAnecdotes())
  },[dispatch])

  return (
    <div>
      <Notifications />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App