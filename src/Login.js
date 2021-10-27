import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                history.push('/')
            }
        })
        .catch(e=>alert(e.message))
    }

    const register = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            //successfully returned a promise
            if(auth){
                history.push('/')
            }
        })
        .catch((e)=>console.log(e))

    }

    return (
        <div className = "login">
            <Link to = "/">
            <img className = "login__logo" src = "https://lh3.googleusercontent.com/proxy/cCHJpwkXwm97PQ6oxDvG8wWRtmBBb3eFa5-QAh_eRKv666-rfWf8V0y7sRzwjzxlPCTtQ1tATYwyfYaKGOeN17oBFc8hJ4uc3mEkHMD0qYi0Fxc" />
            </Link>
            <div className = "login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type = "text" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type = "password" value = {password} onChange = {
                        (e)=>setPassword(e.target.value)
                        } />
                    <button  type = "submit"
                        onClick = {signIn} className = "login__signInButton">Sign In</button>
                </form>
            <p>
            By continuing, you agree to Clone Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button onClick = {register} className = "login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
