import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const anecdotes = await axios.get(baseUrl)
  return anecdotes.data
}

const createAnecdote = async (anecdote) => {
  const obj = {
    content: anecdote,
    votes: 0
  }
  const newAnecdote = await axios.post(baseUrl, obj)
  return newAnecdote.data
}

const updateAnecdote = async (obj) => {
  const updateAnecdote = await axios.put(`${baseUrl}/${obj.id}`, obj)
  return updateAnecdote.data
}

export default { getAll, createAnecdote, updateAnecdote }