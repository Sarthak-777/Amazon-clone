import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className = "checkout">
            <div className = "checkout__left">
                <img className = "checkout_ad" src = "//icms-image.slatic.net/images/ims-web/0d7399b5-ee7f-4f04-838f-f59aa0770d48.png" alt = ""/>
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
            </div>
            <div className = "checkout__right">
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
