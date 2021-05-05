import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if ( state.filter === '' ) {
      return state.anecdotes
    }

    const newAnecdotes = state.anecdotes.filter( 
      anecdote => anecdote.content.includes(state.filter))
    return newAnecdotes
  })

  const voteClick = (id, content) => {
    dispatch(vote(id))
    dispatch(setNotification(`You have just voted for '${content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 2000)
  }



  return (
    <>
     {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}  
            <button onClick={() => voteClick(anecdote.id, anecdote.content)}> vote</button>
          </div>
        </div>
      )}
    </>
  )
}
export default AnecdoteList