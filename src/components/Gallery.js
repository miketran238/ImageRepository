import React from 'react'
import Image from './Image'

const Gallery = (src, quantity, price) => {
    return (
        <table>
            <tr>
                <th> Image </th>
                <th> Quanity </th>
                <th> Price </th>
                <th></th>
            </tr>
            <tr> <Image src='/img/tunnel.jpg' quantity="5" price="5.5"></Image> </tr>
            <tr> <Image src='/img/park.jpg' quantity="10" price="3.99"></Image> </tr>
            <tr> <Image src='/img/bridge.jpg' quantity="2" price="10"></Image> </tr>
            <tr> <Image src='/img/coast.jpg' quantity="5" price="6"></Image> </tr>
            <tr> <Image src='/img/rails.jpg' quantity="10" price="5.5"></Image> </tr>
            <tr> <Image src='/img/sky.jpg' quantity="20" price="0.99"></Image> </tr>
        </table>
        
    )
}

export default Gallery