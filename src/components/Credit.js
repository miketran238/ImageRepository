import React from 'react'
import { useSelector } from 'react-redux'

const Credit = () => {
  const credit = useSelector(state => state.images.credit)

  return (
      <>
        Your Credit: ${credit.toFixed(2)}
    </>
  )
}

export default Credit