// import React from 'react'
import Image from './Image'

// const Gallery = (src, quantity, price) => {
//     return (
//         <table>
//             <tr>
//                 <th> Image </th>
//                 <th> Quanity </th>
//                 <th> Price </th>
//                 <th></th>
//             </tr>
//             <tr> <Image src='/img/tunnel.jpg' quantity="5" price="5.5"></Image> </tr>
//             <tr> <Image src='/img/park.jpg' quantity="10" price="3.99"></Image> </tr>
//             <tr> <Image src='/img/bridge.jpg' quantity="2" price="10"></Image> </tr>
//             <tr> <Image src='/img/coast.jpg' quantity="5" price="6"></Image> </tr>
//             <tr> <Image src='/img/rails.jpg' quantity="10" price="5.5"></Image> </tr>
//             <tr> <Image src='/img/sky.jpg' quantity="20" price="0.99"></Image> </tr>
//         </table>
        
//     )
// }

// export default Gallery

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy } from '../reducers/galleryReducer'
// import { setNotification } from '../reducers/notificationReducer'
// import { removeNotification } from '../reducers/notificationReducer'

const Gallery = () => {
  const dispatch = useDispatch()
  const images = useSelector(state => {
    return state.images
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
            <Image src= {image.src} quantity = {image.quantity} price = {image.price} />
            <th> <button onClick={() => buyClick(image.id)}> Buy </button> </th>
        </tr>
      )}
      </tbody>
    </table>
    </>
  )
}
export default Gallery