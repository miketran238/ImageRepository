import React from 'react'

const Image = (props) => {
    return (
        <>
            <th><img src={props.src} alt="theImage" width="150" height ="100"></img></th>
            <th> {props.quantity} </th>
            <th> ${props.price} </th>
            <th> <button> Buy </button></th>
        </>
    )
}

export default Image