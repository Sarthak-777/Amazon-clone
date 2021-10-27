import React from 'react'
import "./Product.css"
import {useDispatch} from 'react-redux'
import {addToCheckout} from './redux/basketSlice'

function Product({ title, image, price, rating }) {
    const dispatch = useDispatch()
    const addToBasket = ()=>{
        dispatch(addToCheckout({title, image, price, rating}))
    }
    return (
        <div className = "product">
            <div className = "product__info">
                <p>{title}</p>
                <p className = "product__price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className = "product__rating">
                    {Array(rating).fill().map((i)=>(<p>⭐</p>))}
                </div>
            </div>
            <img src = {image} alt ="" />
            <button onClick = {addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
