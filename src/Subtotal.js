import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useSelector} from 'react-redux'
import {useHistory} from "react-router-dom"

function Subtotal() {
    const history = useHistory()
    const basket = useSelector((state)=>state.basket)
    let sum = 0;
    const checkoutPrice = basket.map((content)=>{
        sum += content.price;
        return sum
    })
    return (
        <div className = "subtotal">
            <CurrencyFormat renderText = {(value) => (
                <>
                <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                <small className = "subtotal__gift">
                    <input type = "checkbox" />This order contains a gift 
                </small>
                </>
            )}
            decimalScale = {2}
            value = {checkoutPrice[checkoutPrice.length-1]}
            displayType = {"text"}
            thousandSeperator={true}
            prefix={"Rs "}
            />
            <button className = "checkout__button" onClick = {e => history.push("/payment")}>Process to Checkout</button>
        </div>
    )
}

export default Subtotal
