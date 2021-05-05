import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content)) 
    dispatch(setNotification(`You have just created a new anecdote '${content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 2000)
  }

  return (
    <>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <input name="anecdote"/>
      <button type="submit">create</button>
    </form>
    </>
  )
}
export default AnecdoteForm