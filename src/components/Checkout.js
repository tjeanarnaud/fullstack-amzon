import React from 'react'
import '../style/Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider'

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue()

  return (
    <div className="checkout">
    
      <div className="checkout_main">

        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

        <div>
          <h3>Hello, { user?.email }</h3>
          <h2 className="checkout_title">Your Shopping Cart</h2>

          {cart.map(item => (
            <CheckoutProduct 
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}              
            />
          ))}
        </div>

      </div>

      <div className="checkout_aside">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout
