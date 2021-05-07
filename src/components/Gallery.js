import Image from './Image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy } from '../reducers/galleryReducer'
// import { setNotification } from '../reducers/notificationReducer'
// import { removeNotification } from '../reducers/notificationReducer'

const Gallery = () => {
  const dispatch = useDispatch()
  const images = useSelector(state => {
    return state.images.inventory
  })

  const buyClick = (id) => {
    dispatch(buy(id))
    // dispatch(setNotification(`You have just voted for '${content}'`))
    // setTimeout(() => {
    //   dispatch(removeNotification())
    // }, 2000)
  }

  return (
    <>
    <table>
        <thead>
         <tr>
            <th> Image </th>
            <th> Quanity </th>
            <th> Price </th>
            <th></th>
        </tr>
        </thead>
        <tbody>
     {images.map(image =>
        <tr key={image.id}>
            <Image src= {image.src} quantity = {image.quantity} price = {image.price} thumbnail = {false}/>
            <th> <button onClick={() => buyClick(image.id)}> Buy </button> </th>
        </tr>
      )}
      </tbody>
    </table>
    </>
  )
}
export default Gallery