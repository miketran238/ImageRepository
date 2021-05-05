import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList.js'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Gallery />
      <Notification />
      <AnecdoteForm /> <br></br>
      <Filter />
      <AnecdoteList  />
    </div>
  )
}

export default App