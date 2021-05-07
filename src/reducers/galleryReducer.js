const galleryAtStart = {
  inventory: [
    { id: 1, src: '/img/tunnel.jpg', quantity: 5, price: 5.5 },
    { id: 2, src: '/img/park.jpg', quantity: 10, price: 3.99 },
    { id: 3, src: '/img/bridge.jpg', quantity: 2, price: 10 },
    { id: 4, src: '/img/coast.jpg', quantity: 5, price: 6 },
    { id: 5, src: '/img/rails.jpg', quantity: 10, price: 2.5 },
    { id: 6, src: '/img/sky.jpg', quantity: 20, price: 4.99 }
  ],
  cart: [],
  credit: 29.99,
  own: [
    { id: 7, src: '/img/boston.jpeg', quantity: 3, price: 8 },
    { id: 8, src: '/img/moon.jpeg', quantity: 1, price: 12 },
    { id: 9, src: '/img/sunset.jpeg', quantity: 2, price: 15 },
  ]
}

const galleryReducer = (state = galleryAtStart, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'NEW':
      var newInventory = [...state.inventory, action.data]
      const newState = state
      newState.inventory = newInventory
      return newState

    case 'BUY': {
      const id = action.data.id
      //Update the inventory
      const imageToChange = state.inventory.find(n => n.id === id)
      const changedImage = {
        ...imageToChange,
        quantity: imageToChange.quantity - 1
      }
      if (changedImage.quantity === 0) {
        newInventory = state.inventory.filter(function (value, index, arr) {
          return value.id !== id
        });
      }
      else {
        newInventory = state.inventory.map(image =>
          image.id !== id ? image : changedImage
        )
      }
      //Add the image to the cart
      const imageInCart = state.cart.find(n => n.id === id)
      var newCart = undefined
      imageToChange.quantity = 1
      if (imageInCart === undefined) {
        newCart = [...state.cart, imageToChange]
      } else {
        const changedImageCart = {
          ...imageInCart,
          quantity: imageInCart.quantity + 1
        }
        newCart = state.cart.map(image =>
          image.id !== id ? image : changedImageCart
        )
      }
      //Update the state
      const newState = {
        ...state,
        cart: newCart,
        inventory: newInventory
      }
      return newState
    }

    case 'PURCHASE':
        if (action.price > state.credit) {
            window.alert('You do not have enough credit')
            return state
        }
        //Update own images with the image from cart
        var newOwnPur = [...state.own]
        for (var i = 0; i < state.cart.length; i++) {
          const theImage = state.cart[i]
          console.log(theImage.id)
          const imageInOwn = newOwnPur.find(n => n.id === theImage.id)
          if ( imageInOwn === undefined ) {
            newOwnPur = [...newOwnPur, theImage]
          } else {
            const changedImageOwn = {
              ...imageInOwn,
              quantity: imageInOwn.quantity + theImage.quantity
            }
            newOwnPur = newOwnPur.map(image =>
              image.id !== theImage.id ? image : changedImageOwn
            )
          }
        }

        //Clear the cart, update credit and new state
        const newCredit = state.credit - action.price
        const newStatePur = {
          ...state,
          cart: [],
          credit: newCredit,
          own: newOwnPur
        }

        window.alert('Purchase successfully')
        return newStatePur
    
    case 'QUANTITY_DOWN':
      const id = action.data.id
      //Update the cart
      const imageToChange = state.cart.find(n => n.id === id)
      const changedImage = {
        ...imageToChange,
        quantity: imageToChange.quantity - 1
      }

      if (changedImage.quantity === 0) {
        newCart = state.cart.filter(function (value, index, arr) {
          return value.id !== id
        });
      }
      else {
        newCart = state.cart.map(image =>
          image.id !== id ? image : changedImage
        )
      }
      //Put the image back to the inventory
      const imageInventory = state.inventory.find(n => n.id === id)
      newInventory = state.inventory
      if (imageInventory === undefined ) {
        imageToChange.quantity = 1
        newInventory = [...state.inventory, imageToChange]
      }
      else {
        const changedImageInventory = {
          ...imageInventory,
          quantity: imageInventory.quantity + 1
        }
        newInventory = state.inventory.map(image =>
          image.id !== id ? image : changedImageInventory
        )
      }
      //Update the state
      const newStateQuant = {
        ...state,
        cart: newCart,
        inventory: newInventory
      }
      return newStateQuant
    
    case 'SELL':
      const sellId = action.data.id
      //Update the inventory
      const imageToSell = state.own.find(n => n.id === sellId)
      const changedImageSell = {
        ...imageToSell,
        quantity: imageToSell.quantity - 1
      }
      var newOwn = undefined
      //Delete the image if the quantity reaches 0
      if (changedImageSell.quantity === 0) {
        newOwn = state.own.filter(function (value, index, arr) {
          return value.id !== sellId
        });
      }
      else {
        newOwn = state.own.map(image =>
          image.id !== sellId ? image : changedImageSell
        )
      }

      //Add the image back to the inventory
      const imageInInventory = state.inventory.find(n => n.id === sellId)
      newInventory = undefined

      //Cannot find the sold image, create a new one in the inventory
      if (imageInInventory === undefined) { 
        imageToSell.quantity = 1
        newInventory = [...state.inventory, imageToSell]
      } 
      else {
        const changedImageInv = {
          ...imageInInventory,
          quantity: imageInInventory.quantity + 1
        }

        newInventory = state.inventory.map(image =>
          image.id !== sellId ? image : changedImageInv
        )
      }
      //Update credit
      const newCreditSell = state.credit + imageToSell.price

      //Update the state
      const newStateSell = {
        ...state,
        own: newOwn,
        inventory: newInventory,
        credit: newCreditSell
      }
      return newStateSell
    

    default:
      return state
  }
}

export const buy = (id) => {
  return {
    type: 'BUY',
    data: { id }
  }
}

export const sell = (id) => {
  return {
    type: 'SELL',
    data: { id }
  }
}
export const purchase = (price) => {
  return {
    type: 'PURCHASE',
    price,
  }
}
export const quant_down = (id) => {
  return {
    type: 'QUANTITY_DOWN',
    data: {id}
  }
}

export default galleryReducer