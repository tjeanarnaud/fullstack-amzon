import React from 'react'
import '../style/Subtotal.css'
import NumberFormat from 'react-number-format'
import { useStateValue } from '../StateProvider'
import { getCartTotal } from '../reducer'

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue()

  return (
    <div className="subtotal">

      <NumberFormat 
        renderText={(value) => (
          <>  
            <p>Subtotal ({cart.length} items): <strong>{value}</strong></p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )} 
        value={getCartTotal(cart)} 
        thousandSeparator={true} 
        displayType={'text'} 
        decimalScale={2}
        prefix={'$'} 
        // className="foo" 
      />

      <button>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal
