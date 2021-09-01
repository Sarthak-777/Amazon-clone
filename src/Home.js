import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img className = "home__image" src = "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" alt = "" />
            <div className = "home__row">
                <Product title = "The lean Startup: How constant Innovation Creates Radically Successful Business Paperback" price = {2999} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating = {5} />
                <Product title = "Seagate Backup Plus Disco duro externo" price = {40000} image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY355_.jpg" rating = {5}/>
            </div>
            <div className = "home__row">
                <Product title = "Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB" price = {42000} image="https://m.media-amazon.com/images/I/615YaAiA-ML._SX342_.jpg" rating = {4}/>
                <Product title = "HP 63XL | Cartucho de tinta | Negro" price = {12000} image="https://m.media-amazon.com/images/I/71FMdUhizpS._AC_SY355_.jpg" rating = {4}/>
                <Product title = "Acer Aspire 5 Slim A515-46-R14K Laptop, 15.6-inch IPS Full HD Screen" price = {65000} image="https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_SX425_.jpg" rating = {4}/>
            </div>
            <div className = "home__row">
                <Product title = "TCL 40S325 TV inteligente de 40 pulgadas 1080p Smart LED Roku TV (2019)" price = {59000} image="https://m.media-amazon.com/images/I/71MVe3Ym8yL._AC_SX450_.jpg" rating = {4} />
            </div>  
            </div>
            
        </div>
    )
}

export default Home
