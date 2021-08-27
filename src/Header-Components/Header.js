import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>

            <div className="header_search">
                <input className="header_searchBox" type="text"></input>
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">

                <div className="header_option">
                    <span className="header_option_1">Hello Guest</span>
                    <span className="header_option_2">Sign in</span>
                </div>

                <div className="header_option">
                    <span className="header_option_1">Returns</span>
                    <span className="header_option_2">& Orders</span>
                </div>

                <div className="header_option">
                    <span className="header_option_1">Your</span>
                    <span className="header_option_2">prime</span>
                </div>

                <div className="header_optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header_optionLineTwo header_basketCount">0</span>
                </div>

            </div>
        </div>
    )
}

export default Header
