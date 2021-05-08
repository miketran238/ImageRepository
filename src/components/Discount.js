import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import discount from '../reducers/galleryReducer'

const Discount = () => {
    const dispatch = useDispatch()
  const discountState = useSelector(state => 
    state.images.discount.filter(disc => disc !== -1)
    )
    console.log(discountState)
  const discountClick = (id) => {
    dispatch(discount(id))
}
  return (
    <>
    {discountState.map( (value,index) =>
         <button key={index} onClick={() => discountClick(index)}> {value} </button>
    )}
    </>
  )
}

export default Discount