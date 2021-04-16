import React from 'react'
import '../style/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue()

  const removeFromCart = () => {
    // remove item from the basket
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct_rating">
          { Array(rating).fill().map((_, i) => (<p>⭐</p>)) }
        </p>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
