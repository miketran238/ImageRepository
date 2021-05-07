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
  own: []
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

        const newCredit = state.credit - action.price
        const newStatePur = {
          ...state,
          cart: [],
          credit: newCredit
        }
        window.alert('Purchase successfully')
        return newStatePur
    
    case 'QUANTITY_DOWN':
      const id = action.data.id
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

      const newStateQuant = {
        ...state,
        cart: newCart,
        inventory: newInventory
      }
      return newStateQuant

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