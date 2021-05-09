import galleryReducer from '../src/reducers/galleryReducer'
import { buy, sell, purchase, quant_down} from '../src/reducers/galleryReducer'
import galleryAtStart from '../src/reducers/galleryReducer'

describe('gallery reducer', () => {
  it('should return the initial state', () => {
    expect(galleryReducer(undefined, {})).toEqual([
      galleryAtStart
    ])
  })

  it('should handle BUY', () => {
    expect(
      galleryReducer(galleryAtStart, buy(1))
    ).toEqual([
      {
        inventory: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 4, price: 5.5 },
            { id: 2, src: '/img/park.jpg', quantity: 10, price: 3.99 },
            { id: 3, src: '/img/bridge.jpg', quantity: 2, price: 10 },
            { id: 4, src: '/img/coast.jpg', quantity: 5, price: 6 },
            { id: 5, src: '/img/rails.jpg', quantity: 10, price: 2.5 },
            { id: 6, src: '/img/sky.jpg', quantity: 20, price: 4.99 }
          ],
          cart: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 1, price: 5.5 }
          ],
          credit: 29.99,
          own: [
            { id: 7, src: '/img/boston.jpeg', quantity: 3, price: 8 },
            { id: 8, src: '/img/moon.jpeg', quantity: 1, price: 12 },
            { id: 9, src: '/img/sunset.jpeg', quantity: 2, price: 15 },
          ],
          total: 5.5,
          discount: [5,10,15]
      }
    ])
  })

  it('should handle purchase', () => {
    expect(
      galleryReducer(      {
        inventory: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 4, price: 5.5 },
            { id: 2, src: '/img/park.jpg', quantity: 10, price: 3.99 },
            { id: 3, src: '/img/bridge.jpg', quantity: 2, price: 10 },
            { id: 4, src: '/img/coast.jpg', quantity: 5, price: 6 },
            { id: 5, src: '/img/rails.jpg', quantity: 10, price: 2.5 },
            { id: 6, src: '/img/sky.jpg', quantity: 20, price: 4.99 }
          ],
          cart: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 1, price: 5.5 }
          ],
          credit: 29.99,
          own: [
            { id: 7, src: '/img/boston.jpeg', quantity: 3, price: 8 },
            { id: 8, src: '/img/moon.jpeg', quantity: 1, price: 12 },
            { id: 9, src: '/img/sunset.jpeg', quantity: 2, price: 15 },
          ],
          total: 5.5,
          discount: [5,10,15]
      }, purchase())
    ).toEqual([
      {
        inventory: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 4, price: 5.5 },
            { id: 2, src: '/img/park.jpg', quantity: 10, price: 3.99 },
            { id: 3, src: '/img/bridge.jpg', quantity: 2, price: 10 },
            { id: 4, src: '/img/coast.jpg', quantity: 5, price: 6 },
            { id: 5, src: '/img/rails.jpg', quantity: 10, price: 2.5 },
            { id: 6, src: '/img/sky.jpg', quantity: 20, price: 4.99 }
          ],
          cart: [
          ],
          credit: 24.49,
          own: [
            { id: 7, src: '/img/boston.jpeg', quantity: 3, price: 8 },
            { id: 8, src: '/img/moon.jpeg', quantity: 1, price: 12 },
            { id: 9, src: '/img/sunset.jpeg', quantity: 2, price: 15 },
            { id: 1, src: '/img/tunnel.jpg', quantity: 1, price: 5.5 }
          ],
          total: 0,
          discount: [5,10,15]
      }
    ])
  })

  it('should handle quantity down', () => {
    expect(
      galleryReducer(      {
        inventory: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 3, price: 5.5 },
            { id: 2, src: '/img/park.jpg', quantity: 10, price: 3.99 },
            { id: 3, src: '/img/bridge.jpg', quantity: 2, price: 10 },
            { id: 4, src: '/img/coast.jpg', quantity: 5, price: 6 },
            { id: 5, src: '/img/rails.jpg', quantity: 10, price: 2.5 },
            { id: 6, src: '/img/sky.jpg', quantity: 20, price: 4.99 }
          ],
          cart: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 2, price: 5.5 }
          ],
          credit: 29.99,
          own: [
            { id: 7, src: '/img/boston.jpeg', quantity: 3, price: 8 },
            { id: 8, src: '/img/moon.jpeg', quantity: 1, price: 12 },
            { id: 9, src: '/img/sunset.jpeg', quantity: 2, price: 15 },
          ],
          total: 11,
          discount: [5,10,15]
      }, quant_down(1))
    ).toEqual([
      {
        inventory: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 4, price: 5.5 },
            { id: 2, src: '/img/park.jpg', quantity: 10, price: 3.99 },
            { id: 3, src: '/img/bridge.jpg', quantity: 2, price: 10 },
            { id: 4, src: '/img/coast.jpg', quantity: 5, price: 6 },
            { id: 5, src: '/img/rails.jpg', quantity: 10, price: 2.5 },
            { id: 6, src: '/img/sky.jpg', quantity: 20, price: 4.99 }
          ],
          cart: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 1, price: 5.5 }
          ],
          credit: 29.49,
          own: [
            { id: 7, src: '/img/boston.jpeg', quantity: 3, price: 8 },
            { id: 8, src: '/img/moon.jpeg', quantity: 1, price: 12 },
            { id: 9, src: '/img/sunset.jpeg', quantity: 2, price: 15 },
            { id: 1, src: '/img/tunnel.jpg', quantity: 1, price: 5.5 }
          ],
          total: 5.5,
          discount: [5,10,15]
      }
    ])
  })
  
  it('should handle SELL', () => {
    expect(
      galleryReducer(galleryAtStart, sell(7))
    ).toEqual([
      {
        inventory: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 4, price: 5.5 },
            { id: 2, src: '/img/park.jpg', quantity: 10, price: 3.99 },
            { id: 3, src: '/img/bridge.jpg', quantity: 2, price: 10 },
            { id: 4, src: '/img/coast.jpg', quantity: 5, price: 6 },
            { id: 5, src: '/img/rails.jpg', quantity: 10, price: 2.5 },
            { id: 6, src: '/img/sky.jpg', quantity: 20, price: 4.99 },
            {id: 7, src: '/img/boston.jpeg', quantity: 1, price: 8 }
          ],
          cart: [
            { id: 1, src: '/img/tunnel.jpg', quantity: 1, price: 5.5 }
          ],
          credit: 37.99,
          own: [
            { id: 7, src: '/img/boston.jpeg', quantity: 2, price: 8 },
            { id: 8, src: '/img/moon.jpeg', quantity: 1, price: 12 },
            { id: 9, src: '/img/sunset.jpeg', quantity: 2, price: 15 },
          ],
          total: 0,
          discount: [5,10,15]
      }
    ])
  })
})