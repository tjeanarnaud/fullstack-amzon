export const initialState = {
  cart: [],
  user: null
}

// Selector
export const getCartTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      )
      let newCart = [...state.cart]

      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.warn(`Can't remove product {id: ${action.id}} as its not in cart!`)
      }

    default:
      return {
        ...state,
        cart: newCart
    }
  }
}

export default reducer