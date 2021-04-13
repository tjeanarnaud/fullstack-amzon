import React from 'react'
import '../style/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'


const Header = () => {
  return (
    <div className="header">
      <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />

      <div className="header_search">
        <input className="header_search_input" type="text" /> 
        <SearchIcon className="header_search_icon" />
      </div>

      <div className="header_nav">

        <div className="header_nav_option">
          <span className="header_option_line_one">Hello Guest</span>
          <span className="header_option_line_two">Sign in</span>
        </div>

        <div className="header_nav_option">
          <span className="header_option_line_one">Returns</span>
          <span className="header_option_line_two">& Orders</span>
        </div>

        <div className="header_nav_option">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Prime</span>
        </div>

        <div className="header_nav_option_cart">
          <ShoppingBasketIcon />
          <span className="header_option_line_two header_cart_count">0</span>
        </div>

      </div>
    </div>
  )
}

export default Header