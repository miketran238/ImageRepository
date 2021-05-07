/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
// import AnecdoteForm from './components/AnecdoteForm'
// import AnecdoteList from './components/AnecdoteList.js'
// import Filter from './components/Filter'
import Notification from './components/Notification'
import Gallery from './components/Gallery'
import Own from './components/Own'
import Cart from './components/Cart'
import Credit from './components/Credit'
import './App.css'

/* <Notification />
<AnecdoteForm /> <br></br>
<Filter />
<AnecdoteList  /> */
const Buy = () => {
  return (
    <>
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
    </>
  )
}
const Sell = () => {
  return (
    <>
      <h2> Sell your own images </h2>
      <Own />
    </>
  )
}
const App = () => {
  const [page, setPage] = useState('buy')
  const toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page)
  }
  const content = () => {
    if (page === 'buy') {
      return <Buy />
    } else if (page === 'sell') {
      return <Sell />
    }
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <h1>Welcome to Mike's Image Repository</h1>
      <Credit />
      <div>
        <a href="" onClick={toPage('buy')} style={padding}>
          <b> Buy </b> 
        </a>
        <a href="" onClick={toPage('sell')} style={padding}>
          <b>Sell </b>
        </a>
      </div>

      {content()}
      
    </div>
  )
}

export default App
