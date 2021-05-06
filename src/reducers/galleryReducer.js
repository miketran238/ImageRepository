const galleryAtStart = [
    { id: 1, src : '/img/tunnel.jpg', quantity : 5, price : 5.5} ,
    { id: 2, src : '/img/park.jpg', quantity : 10, price : 3.99} ,
    { id: 3, src : '/img/bridge.jpg', quantity : 2, price : 10} ,
    { id: 4, src : '/img/coast.jpg', quantity : 5, price : 6} ,
    { id: 5, src : '/img/rails.jpg', quantity : 10, price : 2.5} ,
    { id: 6, src : '/img/sky.jpg', quantity : 20, price : 4.99}
  ]
  
//   const getId = () => (100000 * Math.random()).toFixed(0)
  
//   const asObject = (anecdote) => {
//     return {
//       content: anecdote,
//       id: getId(),
//       votes: 0
//     }
//   }
  
//   const initialState = galleryAtStart.map(asObject)
  
  const galleryReducer = (state = galleryAtStart, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch(action.type) {
      case 'NEW':
        return [...state, action.data]
      case 'BUY': {
        const id = action.data.id
        const imageToChange = state.find( n => n.id === id ) 
        const changedImage = {
          ...imageToChange,
          quantity: imageToChange.quantity - 1
        }
        
        const newState = state.map(image => 
          image.id !== id ? image : changedImage
        )
        return newState
      }
      default:
        return state
    }
  }
  
//   export const createAnecdote = (content) => {
//     return {
//       type: 'NEW',
//       data: {
//         content,
//         votes: 0,
//         id: getId()
//       }
//     }
//   }
  
  export const buy = (id) => {
    return {
      type: 'BUY',
      data: { id }
    }
  }
  
  export default galleryReducer