import Image from './Image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sell } from '../reducers/galleryReducer'
// import { setNotification } from '../reducers/notificationReducer'
// import { removeNotification } from '../reducers/notificationReducer'

const Own = () => {
    const dispatch = useDispatch()
    const images = useSelector(state => {
    return state.images.own
    })

    const sellClick = (id) => {
    dispatch(sell(id))
    // dispatch(setNotification(`You have just voted for '${content}'`))
    // setTimeout(() => {
    //   dispatch(removeNotification())
    // }, 2000)
    }

    if ( images.length === 0 ) {
        return (
            <>
            You don't have any images
            </>
        )
    }
    else {
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
                    <th> <button onClick={() => sellClick(image.id)}> Sell </button> </th>
                </tr>
            )}
            </tbody>
            </table>
            </>
        )
    }
}
export default Own