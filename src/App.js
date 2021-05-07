import React from 'react'
// import AnecdoteForm from './components/AnecdoteForm'
// import AnecdoteList from './components/AnecdoteList.js'
// import Filter from './components/Filter'
import Notification from './components/Notification'
import Gallery from './components/Gallery'
import Cart from './components/Cart'
import Credit from './components/Credit'
import './App.css'

/* <Notification />
<AnecdoteForm /> <br></br>
<Filter />
<AnecdoteList  /> */

const App = () => {
  return (
    <div>
      <h1>Welcome to Mike's Image Repository</h1>
      <Credit />
      
      <Notification />
      <div className="row">
        <div className="columnLeft">
          <h2> Store </h2>
          <Gallery />
        </div>
        <div className="columnRight">
          <h2>Your Cart</h2>
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default App