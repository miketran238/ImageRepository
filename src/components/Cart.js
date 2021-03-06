import Image from './Image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quant_down, purchase } from '../reducers/galleryReducer'
import Discount from './Discount'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => {
    return state.images.cart
  })
  const total = useSelector(state => {
    return state.images.total
  })
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
    // var subTotal = 0
    // cart.forEach(element => subTotal += element.price * element.quantity)
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
        {/* SubTotal : ${subTotal.toFixed(2)}
        <br />
        <Discount />
        <br /> */}
        Total : ${total.toFixed(2)} <br />
        <button onClick={() => purchaseClick(total)}> <b> Purchase </b> </button>
        </>
      )
  }

}
export default Cart