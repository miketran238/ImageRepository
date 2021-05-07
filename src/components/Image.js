import React from 'react'

const Image = (props) => {
    if (props.thumbnail) {
        return (
            <>
                <th><img src={props.src} alt="theImage" width="100" height ="60"></img></th>
                <th> {props.quantity} </th>
                <th> ${props.price} </th>
            </>
        )
    }
    else {
        return (
            <>
                <th><img src={props.src} alt="theImage" width="250" height ="150"></img></th>
                <th> {props.quantity} </th>
                <th> ${props.price} </th>
            </>
        )
    }

}

export default Image