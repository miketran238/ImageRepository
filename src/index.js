import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import filterReducer from './reducers/filterReducer'
import galleryReducer from './reducers/galleryReducer'
import notificationReducer from './reducers/notificationReducer'

// const store = createStore(anecdoteReducer)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

const reducer = combineReducers({
  images: galleryReducer,
  filter: filterReducer,
  notification: notificationReducer
})

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)