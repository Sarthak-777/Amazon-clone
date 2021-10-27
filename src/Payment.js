import React from 'react'
import "./Payment.css"
import {useSelector} from 'react-redux'
import CheckoutProduct from './CheckoutProduct'
import {Link} from 'react-router-dom'

function Payment() {
    const user = useSelector((state)=>state.user)
    console.log(user)
    const basket = useSelector((state)=>state.basket)
    return (
        <div>
            <div className = "payment">
                <div className = "payment__container">
                    <h1>
                        Checkout <Link to = "/checkout">{basket?.length} items</Link>
                    </h1>
                    <div className = "payment__section">
                        <div className = "payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className = "payment__address">
                            <p>{user?.email}</p>
                            <p>Lalitpur, Nepal</p>
                        </div>

                    </div>

                    <div className = "payment__section">
                        <div className = "payment__title">
                            <h3>Review Items and delivery</h3>
                        </div>
                        <div className = "payment__items">
                            {basket.map((item)=>
                                <CheckoutProduct 
                                    title = {item.title} 
                                    image = {item.image} 
                                    price = {item.price} 
                                    rating = {item.rating}
                                />
                            )}
                        </div>
                    </div>

                    <div className = "payment__section">
                        <div className = "payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className = "payment__details">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
