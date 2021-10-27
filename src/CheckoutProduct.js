import React from 'react'
import './CheckoutProduct.css'
import {useDispatch} from 'react-redux';
import {removeFromCheckout} from './redux/basketSlice'

function CheckoutProduct({image, title, price, rating}) {
    const dispatch = useDispatch()
    const removeFromBasket = () => {
        dispatch(removeFromCheckout(title))
    }
    return (
        <div className = "checkoutProduct">
            <img className = "checkoutProduct__image" src = {image} />
            <div className = "checkoutProduct__info">
                <p className = "checkoutProduct__title">{title}</p>
                <p className = "checkoutProduct__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className = "checkoutProduct__rating">
                    {Array(rating).fill().map((i)=>
                        <p>⭐</p>
                    )}
                </div>
                <button onClick = {removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
