import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList.js'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Gallery from './components/Gallery'

{/* <Notification />
<AnecdoteForm /> <br></br>
<Filter />
<AnecdoteList  /> */}

const App = () => {
  return (
    <div>
      <h1>Welcome to Mike's Image Repository</h1>
      <Gallery />

    </div>
  )
}

export default App