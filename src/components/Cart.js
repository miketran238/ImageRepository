// import React from 'react'
import Image from './Image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quant_down, purchase } from '../reducers/galleryReducer'

// import { setNotification } from '../reducers/notificationReducer'
// import { removeNotification } from '../reducers/notificationReducer'

const Gallery = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => {
    return state.images.cart
  })

//   const buyClick = (id) => {
//     dispatch(buy(id))
//     dispatch(setNotification(`You have just voted for '${content}'`))
//     setTimeout(() => {
//       dispatch(removeNotification())
//     }, 2000)
//   }

  const purchaseClick = (total) => {
      dispatch(purchase(total))
  }
  const quantDownClick = (id) => {
      dispatch(quant_down(id))
  }

  if ( cart.length === 0 ) {
      return (
          <>
          Empty
          </>
      )
  }
  else {
    var total = 0
    cart.forEach(element => total += element.price * element.quantity)
    console.log(total)
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
         {cart.map(image =>
            <tr key={image.id}>
                <Image src= {image.src} quantity = {image.quantity} price = {image.price} thumbnail = {true} />
                <th> <button onClick={() => quantDownClick(image.id)}> - </button> </th>
            </tr>
          )}
          </tbody>
        </table>
        Total : ${total.toFixed(2)}
        <br />
        <button onClick={() => purchaseClick(total)}> <b> Purchase </b> </button>
        </>
      )
  }

}
export default Gallery