import React from 'react'

const Image = (props) => {
    if (props.thumbnail) {
        return (
            <>
                <th><img src={props.src} alt="theImage" width="200" height ="140"></img></th>
                <th> {props.quantity} </th>
                <th> ${props.price} </th>
            </>
        )
    }
    else {
        return (
            <>
                <th><img src={props.src} alt="theImage" width="350" height ="200"></img></th>
                <th> {props.quantity} </th>
                <th> ${props.price} </th>
            </>
        )
    }

}

export default Image